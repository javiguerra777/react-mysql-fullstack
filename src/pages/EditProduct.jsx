import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from '../utils/api';
const EditProduct = () => {
  const navigate = useNavigate();
  const [thisId, setId] = useState('');
  const { id } = useParams();
  const submit = () => {
    updateProduct(id, { product_id: thisId }, localStorage.getItem('JWT'));
    navigate('/home')
  }
  console.log(id);
  return (
    <div>
      <header>
        <h5>Hello Change Item Here</h5>
      </header>
      <form onSubmit={submit}>
        <label htmlFor="newdesc">
          <input
            type="text"
            onChange={(e)=> setId(e.target.value)}
          />
        </label>
        <button type='submit'>Update Product</button>
      </form>
    </div>
    
  )
}

export default EditProduct