import React from 'react';

 import classes from './ProfileInfo.module.css';


 const ProfileInfo = (props) => {
  return (
  <div>
    <div>
      <img src='https://fs.tonkosti.ru/sized/c1600x400/0k/5p/0k5pzsquv480ggkckscogwcok.jpg' />
    </div>
    <div className={classes.descriptionBlock}>
      ava + description
    </div>
  </div>
  )
}
export default ProfileInfo;