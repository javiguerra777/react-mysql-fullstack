import React, { useEffect, useState } from 'react';
import { getProducts, addUserProducts } from '../utils/api';
import Header from '../components/Header';
import { useContext } from 'react';
import UserContext from '../context/context';

const Addproducts = () => {
  const { user } = useContext(UserContext);
  const [items,setItems] = useState([]);
  useEffect(()=> {
    getProducts()
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }, []);

  const addItem = (id) => {
    addUserProducts({product_id:id}, user.id);
  }
  return (
    <>
      <Header/>
      <header className='header'>
        <h1>List of Products:</h1></header>
      <div className='container flex'>
      {items.map(item=> {
        return(
          <div key={item.id} className="card card-product">
            <h5>{item.product_name}</h5>
            <p>{item.product_description}</p>
            <div className='new-btn'>
              <button className='btn btn-light' onClick={() => addItem(item.id)}>Add to cart</button>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Addproducts;