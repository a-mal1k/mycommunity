import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {initializeApp} from "firebase/app";
initializeApp({
  apiKey: "AIzaSyA-wYRYSUAsN6pOMASls20GBOw_SYA3BnI",
  authDomain: "mycommunity-e1678.firebaseapp.com",
  projectId: "mycommunity-e1678",
  storageBucket: "mycommunity-e1678.appspot.com",
  messagingSenderId: "135557172867",
  appId: "1:135557172867:web:48de18db557132a00915b6",
  measurementId: "G-0ZQT0YE22L"
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
