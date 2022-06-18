import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { getData } from "../../Store/action";
const Products = () => {
  const {pathname}=useLocation()
  
 

  const type=pathname.split("/")[2]
  const dispatch=useDispatch()
  const Data=useSelector(state=>state.Data)


  useEffect(()=>{

dispatch(getData(name))




},[])

return (
    <div>
      hello
   
    
    </div>
  );
};

export default Products;
