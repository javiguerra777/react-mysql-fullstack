import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createNewUser } from '../utils/api';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let disabled = false;
  if(!name || !email || !password){
    disabled=true;
  }
  const navigate = useNavigate();
  const createUser =async (e)=> {
    e.preventDefault();
    try{
      const user = {
        name: name,
        email: email,
        password
      }
      await createNewUser(user);
      console.log('created user');
    }catch(err) {
      console.log(err);
    }
    navigate('/');
  }
  return (
    <div>
      <Link to="/">Cancel</Link>
      <form onSubmit={createUser}>
        <label htmlFor="name">
          Name:
          <input 
          type="text"
          id="name"
          name="name"
          placeholder='John Appleseed'
          onChange={(e)=> setName(e.target.value)}
           />
        </label>
        <label htmlFor="email">
          Email:
          <input 
          type="email"
          id="email"
          name="email"
          placeholder="user@gmail.com"
          onChange={(e)=> setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input 
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e)=> setPassword(e.target.value)}
           />
        </label>
        <button disabled={disabled}>Create Profile</button>
      </form>
    </div>
  )
}
export default Signup;
