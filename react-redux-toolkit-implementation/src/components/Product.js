import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Product() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(result => setProducts(result.data))
  }, [])


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
                  <button className='btn btn-primary'>Add {item.name}</button>
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