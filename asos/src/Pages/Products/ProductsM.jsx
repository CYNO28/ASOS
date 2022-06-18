import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { getData } from "../../Store/action";
import { setData } from "../../Store/action.type";
const Products = () => {
  const {pathname}=useLocation()
  

  const name=pathname.split("/")[1]
  const type=pathname.split("/")[2]
  const dispatch=useDispatch()
  const Data=useSelector(state=>state)


  useEffect(()=>{

dispatch(getData(name))
console.log(Data)



},[name])

return (
    <div>


    </div>
  );
};

export default Products;
