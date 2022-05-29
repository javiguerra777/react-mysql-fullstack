import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const logout = ()=> {
    localStorage.removeItem('JWT');
    navigate('/');
  }
  return (
    <div>
    <nav className='d-flex flex-wrap py-3 mb-4 border-bottom display-flex navbar'>
    <button className='btn btn-dark' id='button' onClick={logout}>Logout</button>
        <Link to='/home'>Home</Link>
        <Link to="../addproducts">Add products</Link>
    </nav>
    </div>
  )
}

export default Header