import React from "react";
import classes from './Messages.module.css'
const Messages = (props) => {
    return  <div className={classes.messages}>
            {props.message}
    </div>
}



export default Messages;