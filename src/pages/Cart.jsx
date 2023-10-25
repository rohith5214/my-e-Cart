import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const CartArray = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  const getTotal = ()=>{
    if(CartArray.length>0){
      setTotal(CartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
  }
  useEffect(()=>{
     getTotal()
  },[CartArray])

  const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order Successfuly Placed...Thankyou for purchasing with us!!!")
    navigate('/')
  }
  return (
    <div className='container' style={{marginTop:'100px'}}>
      {
        CartArray.length>0?
        <div className='row mt-5'>
          <div className='col-lg-7'>
            <div className='table border shadow rounded'> 
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  CartArray.map((product,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{product?.title}</td>
                      <td><img height={'100px'} src={product?.thumbnail} alt="" /></td>
                      <td>${product?.price}</td>
                      <td ><button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}><i class="fa-solid fa-trash text-danger fa-2x"></i></button></td>
                    </tr>
                  ))
                }
              </tbody>
            </div>

          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-4'>
           <div className='p-3 rounded shadow'>
             <h1 className='text-primary'>Cart Summary</h1>
             <h4 className='mt-3'>Total Products: <span>{CartArray.length}</span></h4>
             <h4>Total: <span className='text-danger fs-2 fw-bolder'></span>${total}</h4>
             <div className='d-grid'>
                <button onClick={handleCart} className='btn btn-success rounded'>Check Out</button>
             </div>

           </div>
          </div>

        </div>
      :<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
      <img height={'230px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
      <h3 className='fw-bolder text-primary'>Your Cart Is Empty!!!</h3>
      <Link style={{textDecoration:'none'}} className='btn btn-success'  to={'/'}>Back To Home</Link>
    </div>
     }    
    </div>
  )
}

export default Cart