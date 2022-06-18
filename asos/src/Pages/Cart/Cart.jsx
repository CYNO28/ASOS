import React from 'react'
import styles from "./cart.module.css"
import {TbTruckDelivery} from 'react-icons/tb';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';

const Cart = () => {
    let cartItems=0;
    const emptyCart = () => {
        return (
            <div className={styles.emptyCartDiv}>
                <BsBag className={styles.bagicon}/>
                <h3 className={styles.line1}>Your bag is empty</h3>
                <p className={styles.line2}>Items remain in your bag for 60 minutes, and then <br />they’re moved to your Saved Items.</p>
                <p className={styles.line2}>Sign in to see your bag <br />and get shopping!</p>
                <button className={styles.signInButton}>SIGNIN</button>
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
                        <div className={styles.cartDiv}>
                            <div className={styles.cartItem}>
                                <div>
                                    <img className={styles.image} src="https://images.asos-media.com/products/asos-design-curb-neckchain-with-butterfly-charm-in-multicolour-enamel/202240654-1-gold" alt="" />
                                </div>
                                <div>
                                    <h4>$16.00</h4>
                                    <p className={styles.itemName}>ASOS DESIGN curb neckchain with butterfly charm in multicolour enamel</p>
                                </div>
                                <div>
                                    <h2>x</h2>
                                </div>
                            </div>
                            <hr className={styles.hr}/>
                        </div>
                        <div className={styles.subtotal}>
                            <div className={styles.subtotalText}>
                                <h4>SUB-TOTAL</h4>
                                <h4>$34.00</h4>
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
                            <p style={{letterSpacing:"1px", fontSize:"15px"}}>$36.00</p>
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
        {cartItems===0 ? emptyCart() : itemsInCart()}
    </div>
  )
}

export default Cart