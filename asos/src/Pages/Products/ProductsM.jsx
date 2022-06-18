import React from "react";
import { useParams } from "react-router-dom";

const ProductsM = () => {
  const params =useParams()
  console.log(params)
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

export default ProductsM;
