import React, { useState } from 'react'
import { Card } from 'antd';


const { Meta } = Card;




export const Body = (props) => {
const [showbutton,setshowbutton]=useState(true)
const  Add =(cart,setcart)=>{
setcart(cart + 1);
setshowbutton(!showbutton);

}
const Remove = (cart,setcart)=>{
    setcart(cart - 1);
    setshowbutton(!showbutton);

}


  return (
    <div>
        

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.image} />}
  >
    <Meta title= {props.phonename}  />
    <Meta title= {props.Price}  />
    {showbutton ? <button onClick={()=>Add(props.var1,props.var2)}>ADD</button> 
    :<button onClick={()=>Remove(props.var1,props.var2)}>Remove</button>
 }
    

    

  </Card>

    </div>
  )
}


