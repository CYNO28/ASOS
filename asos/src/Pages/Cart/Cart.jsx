import React, { useState } from 'react'
import styles from "./cart.module.css"
import {TbTruckDelivery} from 'react-icons/tb';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';

const Cart = () => {

    let cartData = JSON.parse(localStorage.getItem("cart"));
   const [cart, setCart] = useState(cartData);

function total(){
    let total=0
    cart.map((e)=>{
        total+=(Number(e.price.split("£")[1]))
    
    })
    return total
}

    const deleteCartItem = (i) => {
        for(let j=0; j<cartData.length; j++){
            
            if(j===i){
                cartData.splice(i,1)
            }
        }
        setCart([...cartData])
        localStorage.setItem("cart", JSON.stringify(cartData));
    }

    const emptyCart = () => {
        return (
            <div className={styles.emptyCartDiv}>
                <BsBag className={styles.bagicon}/>
                <h3 className={styles.line1}>Your bag is empty</h3>
                <p className={styles.line2}>Items remain in your bag for 60 minutes, and then <br />they’re moved to your Saved Items.</p>
                <p className={styles.line2}>Sign in to see your bag <br />and get shopping!</p>
                <button className={styles.signInButton}>
                    
                    SIGNIN</button>
            </div>
        )
    }

    const itemsInCart = () => {
        return (
            <div className={styles.container}> 
                <div className={styles.box}>
                    <div className={styles.leftSection}>
                        <div className={styles.bagText}>
                            <h3 style={{letterSpacing:"2px"}}>MY BAG</h3>
                            <p className={styles.para}>Items are reserved for 60 minutes</p>
                        </div>
                        {cart.map((ele,i)=>(
                            <div key={i} className={styles.cartDiv}>
                                <div className={styles.cartItem}>
                                    <div>
                                        <img className={styles.image} src={ele.imageUrl} alt="" />
                                    </div>
                                    <div>
                                        <h4>{ele.price}</h4>
                                        <p className={styles.itemName}>{ele.title}</p>
                                    </div>
                                    <div onClick={()=>deleteCartItem(i)}>
                                        <h2 className={styles.removeItem}
                                        >x</h2>
                                    </div>
                                </div>
                                <hr className={styles.hr}/>
                            </div>
                        ))}
                        
                        <div className={styles.subtotal}>
                            <div className={styles.subtotalText}>
                                <h4>SUB-TOTAL</h4>
                                <h4>{"£"+total()}</h4>
                            </div>
                        </div>
                        <div className={styles.deliveryDiv}>
                            <div>
                                <TbTruckDelivery style={{fontSize: "30px"}}/>
                            </div>
                            <div>
                                <h4 style={{letterSpacing: "1.5px",marginBottom:"10px"}}>FREE STANDARD DELIVERY</h4>
                                <p className={styles.para}>Faster delivery options available
                                    to most countries.
                                </p>
                                <a style={{color: "black"}} href="">More Info</a>
                            </div>
                        </div>
                        <h3 style={{letterSpacing: "1.5px"}}>WONDERING WHERE YOUR ITEMS HAVE GONE?</h3>
                        <hr className={styles.bottomHr}/>
                        <p className={styles.para}>No worries – you'll find them in your Saved Items.</p>
                        <button className={styles.savedButton}>VIEW ALL SAVED ITEMS</button>
                    </div>
                    <div className={styles.rightSection}>
                        <h3 style={{letterSpacing:"2px"}}>TOTAL</h3>
                        <hr className={styles.rightHr}/>
                        <div className={styles.subTotalDiv}>
                            <h4 style={{letterSpacing:"1px", fontSize:"15px"}}>Sub-Total</h4>
                            <p style={{letterSpacing:"1px", fontSize:"15px"}}>{"£"+total()}</p>
                        </div>
                        <div className={styles.subTotalDiv}>
                            <h4 style={{letterSpacing:"1px", fontSize:"15px"}}>Delivery</h4>
                            <AiOutlineInfoCircle/>
                        </div>
                        <select className={styles.selectTag}>
                            <option value="Standard">Standard Delivery (Free)</option>
                            <option value="Express">Express Delivery ($20.00)</option>
                        </select>
                        <button className={styles.checkoutButton}>CHECKOUT</button>
                        <h4 style={{letterSpacing:"1px", fontSize:"15px"}}>WE ACCEPT:</h4>
                        <img className={styles.cards} src="https://i.postimg.cc/jS6rnQdF/Screenshot-2022-06-18-at-4-37-09-PM.png" alt="" />
                        <p className={styles.para}>Got a discount code? Add it in the next step.</p>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
        {cartData.length===0 ? emptyCart() : itemsInCart()}
    </div>
  )
}

export default Cart