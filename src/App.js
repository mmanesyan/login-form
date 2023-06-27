import React,{useState} from 'react';
import './App.css';

function App() {

  return (
   <div>
    <h1>Login Form</h1>
    <label>
     First name:
      <input type="text"  value={firstName}></input>
    </label>
    <br/>
    <label>
     Last name:
      <input type="text"  value={lastName}></input>
    </label>
    <br/>
    <label>
    Email:
      <input type="email"  value={email}></input>
      </label>
      <br/>
      <label>
    Phone number:
      <input type="number"  value={phoneNumber}></input>
      </label>
      <br/>
      <button type="submit" disabled={!isFormValid}>
          Login
        </button>
   </div>
  );
}

export default App;
