import React from "react";
import style from '../../Styles/Pages/Men.module.css'
const Men = () => {
  const background =
    "https://content.asos-media.com/-/media/homepages/unisex/homepages/2021/12_dec/sale/xmas-sale-2021/single-gradient/1/desktop.jpg";
const saleimg="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png"
const secbackground="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/hero/mw1_dt_hero_1258x600.jpg"
const secbackgroundsmall='https://content.asos-media.com/-/media/homepages/mw/2022/june/06/hero/mw_1mob_hero_640x692.jpg'
const bannerimg="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride-2022/uk/pride_hp_p1_final_dt_1258_150-v2-new.png"
  return (
    <div>
      Men
      <div className="Top-section">
        <div className="sale-img"></div>
        <div className="sale-span">
            <span>
                UP TO 70% OFF!
                <br />
                IT'S CALLED BIG DISCOUNT ENERGY
            </span>
        </div>
        <div className="crousel"></div>
        <div className="view-all-btn">
            <button>VIEW ALL</button>
        </div>
        <p> Limited time only. Selected styles marked down as shown.</p>
      </div>
    </div>
  );
};

export default Men;
