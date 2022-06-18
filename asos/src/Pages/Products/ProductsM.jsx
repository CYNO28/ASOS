import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { getData } from "../../Store/action";
const Products = () => {
  const {pathname}=useLocation()
  const [data,setData]=React.useState({})
  const name=pathname.split("/")[1]
  const type=pathname.split("/")[2]
  const dispatch=useDispatch()
  const {products}=useSelector(state=>state)
  console.log(products)
  useEffect(()=>{

dispatch(getData(name))




},[])

return (
    <div>
      hello
   
      {/* {data.map((e)=>(<div>{e}</div>))} */}
    </div>
  );
};

export default Products;
