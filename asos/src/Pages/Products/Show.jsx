import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './show.module.css'
const Show= ({element}) => {
let product=JSON.parse(localStorage.getItem('product'))||{}
const navigate=useNavigate()    
function onClickHandler(){
product=element
localStorage.setItem('product',JSON.stringify(product))
navigate('/ProductDetails')

    }
  return (
    <div  className={style.productdiv} onClick={onClickHandler}>
        <img src={element.imageUrl} className={style.productimg} alt="" />
        <div className={style.producttitle}>
        <p >{element.title}</p>
        </div>
        <p className={style.productprice}>{element.price}</p>
    </div>
  )
}

export default Show