import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { getData } from "../../Store/action";
import { setData } from "../../Store/action.type";
const Products = () => {
  const {pathname}=useLocation()
  
 const [data,setData]=useState([1,2,3,4,5,6,7,8,9,10])
  const name=pathname.split("/")[1]
  const type=pathname.split("/")[2]
  const Data=useSelector(state=>state.Products)
 useEffect(()=>{
    console.log(name,type)
    getData(name)
 },[pathname])
console.log(Data)

 

return (
    <div>
   hello
   {data.map(e=>{<div>hello</div>})}
    </div>
  );
};

export default Products;
