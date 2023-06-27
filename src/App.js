import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
const [firstName,setFirstName]=useState('')
const [lastName,setLastName]=useState('')
const [email,setEmail]=useState('')
const [phoneNumber,setPhoneNumber]=useState('')
const [errorMessage, setErrorMessage] = useState('')
const [isFormValid, setIsFormValid] = useState(false)

useEffect(() => {
  setIsFormValid(firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '');
}, [firstName, lastName, email, phoneNumber]);


const firstNameChange = (e) => {
  setFirstName(e.target.value)
}
const lastNameChange = (e) => {
  setLastName(e.target.value)
}
const emailChange= (e) => {
  setEmail(e.target.value)
}
const phoneNumberChange = (e) => {
  setPhoneNumber(e.target.value)
}

const Submit = (e) => {
  e.preventDefault()
  if (firstName === '') {
    setErrorMessage('Please enter your first name.')
    return
  }
  if (lastName === '') {
    setErrorMessage('Please enter your last name.')
    return
  }
  if (email === '') {
    setErrorMessage('Please enter your  email.')
    return
  }
  if (phoneNumber === '') {
    setErrorMessage('Please enter your phone number.')
    return
  }
  setErrorMessage('')


  localStorage.setItem('first name', firstName)
  localStorage.setItem('last name', lastName)
  localStorage.setItem('email', email)
  localStorage.setItem('phone number',  phoneNumber)
  setFirstName('')
  setLastName('')
  setEmail('')
  setPhoneNumber('')

  console.log('Login successful!')
}

return (
  <div>
    <h1>Login Form</h1>
    {errorMessage && <p>{errorMessage}</p>}
    <form onSubmit={Submit}>
      <label className='label'>
        First name:<br/>
        <input type="text" value={firstName}  onChange={firstNameChange} className='input'></input>
      </label>
      <br />
      <label className='label'>
        Last name:<br/>
        <input type="text" value={lastName} onChange={lastNameChange} className='input'></input>
      </label>
      <br />
      <label className='label'>
        Email:<br/>
        <input type="email" value={email}  onChange={emailChange} className='input'></input>
      </label>
      <br />
      <label className='label'>
        Phone number:<br/>
        <input type="text" value={phoneNumber} on onChange={phoneNumberChange} className='input'></input>
      </label >
      <br />
      <button type="submit" disabled={!isFormValid} className='button'>
        Submit
      </button>
    </form>
  </div>
)
}
export default App;
