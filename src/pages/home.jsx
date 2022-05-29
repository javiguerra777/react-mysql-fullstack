import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getAuthProducts, deleteProduct } from '../utils/api';

const Home = () => {
  const [items, setItems] = useState([]);  
  useEffect(() => {
    getAuthProducts(localStorage.getItem('JWT'))
      .then(res => setItems(res.data));
  }, []);
  const deleteItem = (id) => {
    deleteProduct(id, localStorage.getItem('JWT'));
    const newItems = items && items.filter((item) => item.id !== id);
    setItems(newItems);
  }
  console.log(items)
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
