import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { getData } from "../../Store/action";
import { setData } from "../../Store/action.type";
import Show from "./Show";
const Products = () => {
  const {pathname}=useLocation()
  const [products, setProducts] = useState([]);

  const name=pathname.split("/")[1]
  const type=pathname.split("/")[2]
  const dispatch=useDispatch()
  const Data=useSelector(state=>state)

 const [loading,setLoading]=useState(true)
  useEffect(()=>{

dispatch(getData(name))
setProducts(Data.products)


console.log(loading,Data.loading)
},[])

  
return (
    <div>
       <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)",gap:'20px',width:"82%",margin:'auto',marginTop:'2rem',}}> 
        {Data.loading?null:Data.products[type].map(element=>(<Show key={element.id} element={element}></Show>))}
  </div> 
    </div>
  );
};

export default Products;
