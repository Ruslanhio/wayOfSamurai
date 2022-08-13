import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfT_9y1qoJrPXPEESnKcnpTYO_2hhlqLP9A&usqp=CAU' />
      {props.message}
      <div>
        <span>like</span>
        {props.likeNumber}
      </div>
    </div>
  )
}





export default Post; 