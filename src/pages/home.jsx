import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuthProducts } from '../utils/api';

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const logout = ()=> {
    localStorage.removeItem('JWT');
    navigate('/');
  }
  useEffect(()=> {
    getAuthProducts(localStorage.getItem('JWT'))
    .then(res=> setItems(res.data));
  },[])
  return (
    <>
    <div>
      <button onClick={logout}>Logout</button>
    </div>
    <div>
    <Link to="../addproducts">Add products</Link>
    <div>
      {items.map(item=> {
        return(
          <div className='card' key={item.id}>
            <h5>{item.product_name}</h5>
            <p>{item.product_description}</p>
          </div>
        )
      })}
    </div>
    </div>
    </>
  )
}
export default Home;
