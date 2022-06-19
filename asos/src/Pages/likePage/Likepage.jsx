 
import React from 'react'
import { FaHandHoldingHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './likepage.module.css'
const Likepage = () => {
  return (
    <div> 
          <div  className={styles.divI}>

              <div className={styles.divII}>
 
                    <FaHandHoldingHeart className={styles.divIII}/>

                    <h1 className={styles.divIV}>You have no Saved Items</h1>

                    <p  className={styles.divV}>Sign in to synk Saved Items<span style={{display:"block"}}>across all your devices.</span></p>
                   
                    <div className={styles.divVI}>

                    <Link to="#" className={styles.divVII}>SIGN IN</Link>
                   
                    </div>
                    
              </div>

          </div>
          
    </div>
  )
}

export default Likepage