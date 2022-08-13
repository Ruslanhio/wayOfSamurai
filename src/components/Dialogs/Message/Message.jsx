import React from 'react';
import Messages from '../Messages/Messages';
import classes from './../Dialogs.module.css';

const Message = (props) => {
  let messagesElements = props.messages
  .map(m => <Messages message={m.message} />)
  let newMessagesElement = React.createRef();

  let sendMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = () =>{
    let body = newMessagesElement.current.value;
    props.updateNewMessageBody(body)
  }

return  <div className={classes.messages}>
   <div>{messagesElements}</div>
    <div>
        <div><textarea onChange={onMessageChange} ref={newMessagesElement}
        value={props.newMessageBody}/></div>
        <button onClick={sendMessage}>Add</button>
    </div>
</div>

    // return <div className={classes.message}>{props.message}</div>

}



export default Message;