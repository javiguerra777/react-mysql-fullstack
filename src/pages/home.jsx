import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import UserContext from '../context/context';
import { getAuthProducts, deleteProduct } from '../utils/api';

const Home = () => {
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);  
  useEffect(() => {
    getAuthProducts(user.id)
      .then(res => setItems(res.data));
  }, [user.id]);
  const deleteItem = (id) => {
    deleteProduct(id, user.id);
    const newItems = items && items.filter((item) => item.id !== id);
    setItems(newItems);
  }
  return (
    <>
      <Header/>
    <div className='container flex-body'>
      {items.map(item=> {
        return(
          <div className='card card-home' key={item.id}>
            <h5 id="fixed">{item.product_name} <Link to={ `../editproduct/${item.id}`}>Edit Product</Link><button className=' btn btn-secondary' onClick={()=> deleteItem(item.id)}>X</button></h5>
            <p>{item.product_description}</p>
          </div>
        )
      })}
    </div>
    </>
  )
}
export default Home;
