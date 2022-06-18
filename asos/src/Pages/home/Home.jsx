import React from 'react'
import styles from '../components/home.module.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div> 
          <div className={styles.container}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/archive/oct-2021/microsoftteams-image-(10).png" className={styles.containerImg} alt="" />
                    <div className={styles.centered}>This is ASOS</div>
                    <div className={styles.centered1}>ASOS DESIGN and 850+ brands </div>


                    <div style={{display: 'flex'}} className={styles.centered2}>

                        <div>
                          <Link to='/women' className={styles.imgbtn}>SHOP WOMEN</Link>
                        {/* <h1 className={styles.imgbtn}>SHOP WOMEN</h1> */}
                        </div>

                        <div>
                        <Link to='/men' className={styles.imgbtn}>SHOP MEN</Link>
                        </div>
                         
                          
                    </div>
               
                </div>

                <div  className={styles.forthdiv}>
                   <h2>EASY WORLDWIDE DELIVERY <span style = {{display: 'block',fontSize:"12px"}}>*minimum spends apply</span></h2>
                   <h2>ASOS DESIGN and 850+ <span style = {{display: 'block',fontSize:"12px"}}>brands</span></h2>
                </div>

    </div>
  )
}

export default Home