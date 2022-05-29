import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authenticateUser } from '../utils/api';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit=async (e)=> {
    e.preventDefault();
    try{
      const user = await authenticateUser({email: email, password:password});
      if(user.data === 'Password not found' || user.data === 'Email not found'){
        console.log("Incorrect login");
      } else {
        localStorage.setItem('JWT', user.data);
        console.log('Good job logging in');
        navigate('/home')
      }
      }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='container'>
      <header>
        <h3>Login here</h3>
      </header>
     
      <form className='form-group' onSubmit={submit}>
        <label className='form-control' htmlFor="email">
          Email:
          <input
            type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
           />
        </label>
        <label className='form-control' htmlFor="password">
          Password:
          <input type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
      <hr />
      <form>
        <h3>Create profile</h3>
        <Link className='btn btn-dark' to="../signup">signup</Link>
      </form>
    </div>
  )
}

export default Login;