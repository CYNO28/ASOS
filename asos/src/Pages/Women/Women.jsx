import React from "react";
import style from './women.module.css'
const Women = () => {
  
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
        Festi-gal
        </span>
      </div>
      </div>
      <div className={style.thirdSection}>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/119158763_model_1-(1).jpg" alt="" />
          <h3>ASOS WEEKEND COLLECTIVE</h3>
          <p>Sunday energy intensifies</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/ww_glam_coords_moment_870x1110.jpg" alt="" />
          <h3>GLAM CO-ORDS</h3>
          <p>Twin flames</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/220511_vk_asos_shot_04_310-(1).jpg" alt="" />
          <h3>TOPSHOP</h3>
          <p>You wanna be on Top(shop)?</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/2022-03-17_ord-lb-serum-visual_v3.jpg" alt="" />
          <h3>THE ORDINARY</h3>
          <p>Anything but</p>
        </div>
      </div>
     
      <div className={style.fourthSection}></div>
      <div className={style.fifthSection}>
        <div className={style.imgbox1}>
        <img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/ww_asos_edition_moment_870x1110_v3.jpg"></img>
        <h2>ASOS EDITION</h2>
        <p>Material girl</p>
        <button className={style.fibtn}>SHOP THE BRAND</button> 
        </div>
        <div className={style.imgbox1}>
<img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/ww_summer_romance_moment_870x1110.jpg"></img>
<h2>SUMMER ROMANCE</h2>
<p>Ruffle some feathers</p>
<button className={style.fifbtn}>SHOP ASOS DESIGN</button> 
        </div>
      </div>
      <div className={style.sixSection}>
        <h2>TRENDING BRANDS</h2>
        <div className={style.imgflexbox}>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png" alt="" />
    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="" />
    </div>
      </div>
    </div>
  );
};

export default Women;
