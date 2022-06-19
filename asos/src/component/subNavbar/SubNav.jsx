import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./subNav.module.css";
const SubNav = () => {
  const {pathname}=useLocation()
 const page=pathname.split("/")[1]
  console.log(page)
  if(page=="join")return null
  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
     
        <ul className={styles.navLink}>
          <li >
       
          <a href="">

          Sale

          </a>
          {/* <div className={styles.uptringle}></div> */}

          <div className={styles.downtringle}></div>
          </li>
          <li>
            <Link to="#">New in</Link>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header>NEW PRODUCTS</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">View all</a>
                    </li>
                    <li>
                      <a href="#">Clothing</a>
                    </li>
                    <li>
                      <Link to={page=="men"?'/men/menshoes':'/women/shoes'}>Shoes</Link>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <Link to={"/bodycare/skincare"}>Face + Body</Link>
                    </li>
                    <li>
                      <Link to={page=="men"?'/men/tshirts':'/women/womenTop'}>Topshop</Link>
                    </li>
                    <li>
                      <a href="#">Back in stock</a>
                    </li>
                    <li>
                      <a href="#">Outlet</a>
                    </li>
                    <li>
                      <a href="#">Trending now</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>Shoap By body fit</header>
                  <div className={styles.midNavImg}>
                    <div>
                 
                    <img src="https://images.asos-media.com/navigation/ww_gbl_newin_curveplussize_3M_114998343?&$n_240w$" alt="" />
                    </div>
                    <div>

                    <img src="https://images.asos-media.com/navigation/ww_gbl_newin_maternity_3M_113467652?&$n_240w$" alt="" />
                    
                    </div>
                    <div>

                    <img src="https://images.asos-media.com/navigation/ww_gbl_newin_petite_3M_1999343?&$n_240w$" alt="" />
                   
                    </div>
                    <div>
                    <img src="https://images.asos-media.com/navigation/ww_gbl_newin_tall_3M_104174270?&$n_240w$" alt="" />
                 
                    </div>
                  </div>
                </div>
                <div  className={styles.row}>
                  <header>NEW EDITS</header>
                  <div className={styles.lPImage}>
                  <img src="https://images.asos-media.com/navigation/ww_asos_design_festigal_1650x1884?&$n_320w$" alt="" />
                  <img src="https://images.asos-media.com/navigation/ww_asos_edition_1650x1884_june?&$n_320w$" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="#">Clothing</Link>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header>SHOP BY PRODUCT</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">New in</a>
                    </li>
                    <li>
                      <Link to={'/women/dress'}>Dresses</Link>
                    </li>
                    <li>
                    <Link to={page=="men"?'/men/T-shirts':'/women/womenTop'}>Tops</Link>

                    </li>
                    <li>
                      <a href="#">Shorts</a>
                    </li>
                    <li>
                      <a href="#">Swimwear & Beachwear</a>
                    </li>
                    <li>
                      <a href="#">Blazers</a>
                    </li>
                    <li>
                      <a href="#">Co-ords</a>
                    </li>
                    <li>
                      <a href="#">Coats & Jackets</a>
                    </li>
                    <li>
                      <a href="#">Designer</a>
                    </li>
                    <li>
                      <a href="#">Exclusives at ASOS</a>
                    </li>
                    <li>
                      <Link to={'/men/jeans'}>Jeans</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                 
                  <ul className={styles.megaLinks}>
                    <header>...</header>
                    <li>
                      <a href="#">Jumpers & Cardigans</a>
                    </li>
                    <li>
                      <a href="#">Jumpsuits & Playsuits</a>
                    </li>
                    <li>
                      <a href="#">Loungewear</a>
                    </li>
                    <li>
                      <a href="#">Multipacks</a>
                    </li>
                    <li>
                      <a href="#">Shirts & Blouses</a>
                    </li>
                    <li>
                      <a href="#">Skirts</a>
                    </li>
                    <li>
                      <a href="#">Socks & Tights</a>
                    </li>
                    <li>
                      <a href="#">Sportswear</a>
                    </li>
                    <li>
                      <a href="#">Suits & Tailoring</a>
                    </li>
                  </ul>
                 
                </div>

                <div  className={styles.row}>
                  <header>SHOP BY BODY FIT</header>
                  <div className={styles.midNavImg}>
                    <div>
                 
                    <img src="https://images.asos-media.com/navigation/ww_gbl_clothing_asoscurveandplussize_3M_115454141?&$n_240w$" alt="" />
                    </div>
                    <div>

                    <img src="https://images.asos-media.com/navigation/ww_gbl_clothing_maternity_3M_117396604?&$n_240w$" alt="" />
                    
                    </div>
                    <div>

                    <img src="https://images.asos-media.com/navigation/ww_gbl_clothing_petite_3M_111618675?&$n_240w$" alt="" />
                   
                    </div>
                    <div>
                    <img src="https://images.asos-media.com/navigation/ww_gbl_clothing_tall_3M_116746580?&$n_240w$" alt="" />
                 
                    </div>
                  </div>
                </div>
                <div  className={styles.row}>
                  <header>SHOP BY EDIT</header>
                    <div className={styles.shopList}>
                          <div>
                            <img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3M_111178847?&$n_240w$" alt="" />
                             <p>Weading</p>
                          </div>
                          <div>
                            <img src="https://images.asos-media.com/navigation/ww_gbl_clothing_bridal_3M_1618123?&$n_240w$" alt="" />
                            <p>Bridal</p>
                          </div>
                          <div>
                            <img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modestfashion_3M_114696164?&$n_240w$" alt="" />
                            <p>Modest fashion</p>
                          </div>
                          <div>
                            <img src="https://images.asos-media.com/navigation/ww_clothing_lastchancetobuydress_2M_115452191?&$n_240w$" alt="" />
                            <p>Last chance</p>
                          </div>
                          <div>
                            <img src="https://images.asos-media.com/navigation/ww_au_clothing_workwear_3M_109335997?&$n_240w$" alt="" />
                            <p>Workwear</p>
                          </div>
                    </div>
                </div>
              </div>
            </div>
           
          </li>
          <li>
            <Link to="#">Dresses</Link>
          </li>
          <li>
            <Link to="#">Shoes</Link>
          </li>
          <li>
            <Link to="#">Sportswear</Link>
          </li>
          <li>
            <Link to="#">Accessories</Link>
          </li>
          <li>
            <Link to="#">Summer</Link>
          </li>
          <li>
            <Link to="#">Trending now</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNav;
