import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const items = useSelector((state) => state.cart)
  
  return (
    <div className='row'>
      {
        items.map(item => (
          <div className='col-md-12 mt-3'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><b>{item.name.toUpperCase()}</b></h5>
                <p className="-text">{item.email}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cart