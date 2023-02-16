import React, { useState } from 'react'
import { Body } from './Body';
import Data from './Data';
import { Header } from './Header';
import './Style.css';



export const Cart = () => {
  const [data,setdata]=useState(Data);
const [cart,setCart]=useState(0)


console.log(data);
  return (
    <div>
      <h1>Parent Component</h1>
      <div className='navbar'>
        <h3>Home </h3>
        <h3>About</h3>
        <h3>Cart {cart}</h3>
      </div>
      <Header />
      <div className='Cart-content'>
        {data.map((value)=>{
          return<>
            <Body  var1={cart} var2={setCart} image={value.image} phonename={value.name} Price={value.price} />
            
          </>
        })}
      </div>
      
    </div>

  )
}
