import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add } from '../store/slices/CartSlice'

function Product() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(result => setProducts(result.data))
  }, [])

  const addItem = (item) => {
    dispatch(add(item))
  }


  return (
    <>
      <div className='row'>
        {
          products.map(item => (
            <div className='col-md-4 mt-3'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>{item.name.toUpperCase()}</b></h5>
                  <p className="-text">{item.email}</p>
                  <button onClick={() => addItem(item)} className='btn btn-primary'>Add {item.name}</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Product