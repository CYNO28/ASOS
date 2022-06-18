import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Products = () => {
  const {pathname}=useLocation()

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
