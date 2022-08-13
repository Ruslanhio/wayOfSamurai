//import logo from './logo.svg';
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs
              messagesPage={props.state.messagesPage}
              sendMessage={props.sendMessage}
              updateNewMessageBody={props.updateNewMessageBody}
            />}/>
            <Route path="/profile" element={<Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}/>}/>
            <Route path="/feed" element={<Feed />} />
            <Route path='/music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}
export default App;
