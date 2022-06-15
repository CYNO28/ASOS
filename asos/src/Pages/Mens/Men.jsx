import React from "react";
import style from './Men.module.css'
const Men = () => {
  
const saleimg="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png"
const secbackground="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/hero/mw1_dt_hero_1258x600.jpg"
const secbackgroundsmall='https://content.asos-media.com/-/media/homepages/mw/2022/june/06/hero/mw_1mob_hero_640x692.jpg'
const bannerimg="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride-2022/uk/pride_hp_p1_final_dt_1258_150-v2-new.png"
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
    </div>
  );
};

export default Men;
