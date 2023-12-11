import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 1.implement add functionality
      //  1. create  a constant that keeps the track of title and content.
      //  2. pass the new note back to the App
      //  3. Add new note to an Array
      //  4. take array and render separate note components for each item.
//2. implement delete note functionality
     //1.  