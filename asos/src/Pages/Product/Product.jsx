import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaRegHeart,
} from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import styles from "./product.module.css";

const Product = () => {
  const SliderData = [
    {
      image:
        "https://images.asos-media.com/products/jdy-peplum-blouse-in-white/203232469-1-clouddancer?$n_640w$&wid=513&fit=constrain",
    },
    {
      image:
        "https://images.asos-media.com/products/jdy-peplum-blouse-in-white/203232469-2?$n_750w$&wid=750&fit=constrain",
    },
    {
      image:
        "https://images.asos-media.com/products/jdy-peplum-blouse-in-white/203232469-3?$n_750w$&wid=750&fit=constrain",
    },
    {
      image:
        "https://images.asos-media.com/products/jdy-peplum-blouse-in-white/203232469-4?$n_750w$&wid=750&fit=constrain",
    },
  ];

  const name = "JDY peplum blouse in white";
  const oldPrice = "2700";
  const newPrice = "1600";
  const color = "Cloud Dancer";
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div>
      <div className={styles.pBody}>
        <div className={styles.sideImage}>
          {SliderData.map((el) => {
            return <img src={el.image} alt="" />;
          })}
        </div>
        <section className={styles.slider}>
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={
                  index === current ? styles.slide.active : styles.slide
                }
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt="travel image"
                    className={styles.image}
                  />
                )}
              </div>
            );
          })}
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </section>
        <div className={styles.pDetails}>
          <div>
            <p>{name}</p>
            <p>
              RRP{oldPrice} <b style={{ color: "red" }}>Now{newPrice}</b>(-40%)
            </p>
          </div>
          <p>COLOR:{color}</p>
          <label htmlFor="">SIZE</label>
          <select name="" id="">
            <option value="..">Please select</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
          <div>
            <button>ADD TO BAG </button>
            <FaRegHeart />
          </div>
          <div>
            <FiTruck /> <span>Free Delevery.</span>
            <p>
              Ts&Cs apply. <u>Learn more</u>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.extraD}>
            <div>
                <h3>PRODUCT DETAILS</h3>
                <p><u>Blouse by JDY</u></p>
                <ul>
                    <li>The scroll is over</li>
                    <li> V-neck</li>
                    <li>Button plackt</li>
                    <li>Long sleaves</li>
                </ul>
            </div>
            <div>
                <h3>PRODUCT CODE</h3>
                <p>120368583</p>
                <h3>BRAND</h3>
                <p>{name}</p>
            </div>
            <div>
                <h3>SIZE & FIT</h3>
                <p>Model wears: UK 8/ EU 36/ US 4</p>
                <p>Model's height: 170cm/5'7"</p>
            </div>
      </div>
     <div className={styles.footCarousal}>
          <h3>Recently viewed</h3>
          <div>
            {SliderData.map((el)=>{
             return   <img src={el.image} alt="" />
            })}
          </div>
     </div>
    </div>
  );
};

export default Product;
