import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/context';
import { authenticateUser } from '../utils/api';
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [failedLogin, setFailedLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit= async (e)=> {
    e.preventDefault();
    const userLogin = await authenticateUser({ email: email, password: password })
      .then(res => {
        if (!res.statusText === "OK") {
          throw Error('Failed login');
        } else {
          return res.data;
        }
      })
      .catch(err => console.log(err))
    if (userLogin) {
      console.log(userLogin);
      setUser({
        email: email,
        id: userLogin,
        loggedIn: true
      })
      navigate('/home')
    } else {
      setFailedLogin(true);
    }
    setEmail('');
    setPassword('');
  }
  setTimeout(() => {
    setFailedLogin(false);
  }, 5000);
  return (
    <div className='container'>
      {failedLogin && (
        <div>
          <h1>Try to login again</h1>
        </div>
      )}
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