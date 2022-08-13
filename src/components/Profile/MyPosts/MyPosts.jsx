import React from 'react';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../redux/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
//  console.log(props.newPostText)
  let postsElements = props.posts
  .map (p => <Post message={p.message} likeNumber={p.likeNumber} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
let action =  UpdateNewPostTextActionCreator(text)
props.dispatch(action)
        
}

  return <div className={classes.postBlock}>
    <div className={classes.item}>
     <h3>My post</h3>
    </div>
    {props.number}
    <div>
      <div>
         <textarea onChange={onPostChange} ref={newPostElement}
         value={props.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
    </div>
    <div className={classes.posts}>
     {postsElements}
      </div>
    </div>
}

export default MyPosts;