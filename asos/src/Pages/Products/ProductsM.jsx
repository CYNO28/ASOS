import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
const Products = () => {
  const {pathname}=useLocation()
// const dispatch=useDispatch()
//   useEffect(()=>{
// console.log(pathname)
  



// },[])
  return (
    <div>
        {/* <BreadCrumb></BreadCrumb>
      <div className={style.gridbox}>
        <div className={style.imgbox2}></div>
      </div> */}
      products
    </div>
  );
};

export default Products;
