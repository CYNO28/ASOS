import React from 'react'
import style from './show.module.css'
const Show = ({element}) => {
    
    function onClickHandler(){

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