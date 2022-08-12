import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import pic from './277081215_1629829970699664_8164463741762050939_n.jpg';
import Profile from '../src/profile/profile.js';
import Image from '../src/profile/image.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <Image>{pic}</Image>
  <Profile FullName="siwar ben rhouma" bio="It is better to fail in originality than to succeed in imitation." profession="data sciences engineer" user="siwar">
  </Profile>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
