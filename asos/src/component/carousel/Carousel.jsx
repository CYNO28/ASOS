import React from "react";
import Carousel from "react-elastic-carousel";

import style from "./style.module.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 2, itemsToShow: 2 },
  { width: 3, itemsToShow: 3 },
  { width: 4, itemsToShow: 4 },
  { width: 5, itemsToShow: 5 },
];
const Carousels = () => {
  return (
    <>
    
        <Carousel  className={style.Carousel} breakPoints={breakPoints}>
         
            <div className={style.Cimgbox}>
              <img
                src="https://images.asos-media.com/products/asos-design-plunge-neck-fluffy-mini-dress-in-hot-pink/201624497-1-hotpink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <p>DRESSES</p>
            </div>
         
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/threadbare-cut-out-front-crop-top-in-orange/202048146-1-orange?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>TOPS</p>
            </div>
          
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/asos-design-wide-fit-haven-padded-toe-thong-heeled-sandals-in-green/200732619-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>SHOES</p>
            </div>
          
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/topshop-paperbag-waist-shorts-in-animal/202466210-1-animal?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>SHORT & TROUSERS</p>
            </div>
          

          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/asos-design-recycled-frame-chunky-square-sunglasses-with-colour-block-bevel/201734940-1-multi?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>ACCESSORIES</p>
            </div>
          
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/love-other-things-towelling-triangle-bikini-with-heart-ring-detail-in-purple/202616760-1-purple?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>SWIMWEAR</p>
            </div>
          
        
        </Carousel>
   
    </>
  );
};

export default Carousels;
