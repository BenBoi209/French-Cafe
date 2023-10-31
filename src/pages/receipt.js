import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Recipt = ({}) => {

    const {items,totalItems} = JSON.parse(localStorage.getItem("react-use-cart"))


     return (<>
       <h1>{totalItems}</h1>
     {
        items.map((item) => (<>
        <h1>{item.title}</h1>
        
        </>))
     }
          
     </>);
}

export default Recipt;