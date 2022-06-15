import React from "react";
import style from './Men.module.css'
const Men = () => {
  
const saleimg="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png"

const secbackgroundsmall='https://content.asos-media.com/-/media/homepages/mw/2022/june/06/hero/mw_1mob_hero_640x692.jpg'

  return (
    <div>
      Men
      <div className={style.top_section}>
        <div className={style.sale_img}> <img src={saleimg} alt="" /></div>
        <div >
            <span>
               <h2 className={style.salespan}>UP TO 70% OFF!
               <br />
                IT'S CALLED BIG DISCOUNT ENERGY
            </h2> 
                </span>
        </div>
        <div className="crousel"></div>
        <div className="view-all-btn">
            <button className={style.middlebtn}>VIEW ALL</button>
        </div>
        <p className={style.topdis}> Limited time only. Selected styles marked down as shown.</p>
      </div>
      <div className={style.secSection}>
          <button className={style.secbtn}>SHOP ASOS DESIGN</button>
        <div className={style.summerj}>
      <span>  
        Summer juice
        </span>
      </div>
      </div>
      <div className={style.thirdSection}>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_festive_jewels_moment_870x1110.jpg" alt="" />
          <h3>ASOS DESIGN JEWELS</h3>
          <p>E-boy energy</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_au_footwear_moment_870x1110.jpg" alt="" />
          <h3>SHOES</h3>
          <p>Sneaky picks</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_skate_prints_moment_870x1110.jpg" alt="" />
          <h3>SKATE PRINTS</h3>
          <p>Punk perfection by ASOS DESIGN</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_hiit_moment_870x1110.jpg" alt="" />
          <h3>HIIT</h3>
          <p>Ready,sweat,go!</p>
        </div>
      </div>
      <div className={style.fourthSection}></div>
    </div>
  );
};

export default Men;
