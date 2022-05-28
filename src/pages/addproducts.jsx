import React, { useEffect, useState } from 'react';
import { getProducts, addUserProducts } from '../utils/api';
import { Link } from 'react-router-dom';

const Addproducts = () => {
  const [items,setItems] = useState([]);
  useEffect(()=> {
    getProducts()
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }, []);

  const addItem = (id) => {
    addUserProducts({product_id:id}, localStorage.getItem('JWT'));
  }
  return (
    <>
    <Link to="../home">Return Home</Link>
    <div>List of products</div>
    <div>
      {items.map(item=> {
        return(
          <div key={item.id} className="card">
            <h5>{item.product_name}</h5>
            <p>{item.product_description}</p>
            <button onClick={()=>addItem(item.id)}>Add to cart</button>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Addproducts;