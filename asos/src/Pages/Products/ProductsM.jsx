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



},[])
console.log(Data.products)
  
return (
    <div > 
      <div style={{backgroundColor:"#ccc",padding:'10px',margin:' 20px 0'}}>
      <div style={{width:'60%',margin:'auto',textAlign:'center'}}>
        <h2>
      Topshop

        </h2>
Topshop is now officially an ASOS brand! This season, discover the iconic British brand’s clothes, shoes and accessories collections (and yes, that does include the much-loved denim range). Dress for comfort with sweatshirts, joggers and T-shirts, or make a statement with printed dresses, chic tops and heeled boots for any occasion. Topshop’s Jamie, Joni and Leigh skinny jeans are an absolute staple, while straight-leg cuts and mom jeans will take your denim collection to the next level. Elsewhere, expect layered necklaces, retro sunglasses and cross-body bags to give your wardrobe that extra something-something.
      </div>
      </div>
       <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)",gap:'20px',width:"82%",margin:'auto',marginTop:'2rem',}}> 
        {Data.loading?null:Data.products[type].map(element=>(<Show key={element.id} element={element}></Show>))}
  </div> 
    </div>
  );
};

export default Products;
