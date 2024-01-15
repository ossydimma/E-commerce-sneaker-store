// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement,numb } from "../util/features/count";
import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'
import productT1 from '../images/image-product-1-thumbnail.jpg'
import productT2 from '../images/image-product-2-thumbnail.jpg'
import productT3 from '../images/image-product-3-thumbnail.jpg'
import productT4 from '../images/image-product-4-thumbnail.jpg'
import minuIcon from "../images/icon-minus.svg"
import plusIcon from "../images/icon-plus.svg"
import cart from '../images/icon-cart.svg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
interface MyComponentProps {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function swiper({  setIsShow }: MyComponentProps) {
  let count = useSelector(selectCount);
  const [showFeedBack, setShowFeedBack] = useState(false);
  const dispatch = useDispatch();
  const [thumbsSwiper] = useState(null);
  const [navigator, setNavigator] = useState(
    window.innerWidth < 900 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 900 ? setNavigator(false) : setNavigator(true);
    });
  }, []);

  return (
    <>
      <div className="product">
        <div className="imagesCon">
          <Swiper
            spaceBetween={5}
            navigation={navigator}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            thumbs={{ swiper: thumbsSwiper }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={product1} alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product2} alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product3} alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product4} alt="product image" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            // onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                src={productT1}
                alt="product image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={productT2}
                alt="product image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={productT3}
                alt="product image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={productT4}
                alt="product image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="product_content">
          <div>
            <span>SNEAKERS COMPANY</span>
          </div>
          <div>
            <h1>Fall Limited Edition Sneakers</h1>
          </div>
          <div className="product_content_para">
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="prices">
            <div className="price">
              <strong>$125.00</strong>
              <div>
                <span>50%</span>
              </div>
            </div>
            <div className="old-price">
              <p>$250.00</p>
            </div>
          </div>
          <div className="add-cart">
            <div className="cart-cal">
              <div
                onClick={() => {
                  if (count > 0) dispatch(decrement());
                }}
              >
                <img src={minuIcon} alt="minus icon" />
              </div>
              <p>{count}</p>
              <div
                onClick={() => {
                  dispatch(increment());
                }}
              >
                <img src={plusIcon} alt="plus icon" />
              </div>
            </div>

            <div className="cart-btn">
              <div>
                <button
                  onClick={() => {
                    if (count === 0) {
                      setShowFeedBack(true);
                    } else {
                      setIsShow(true);
                      setShowFeedBack(false);
                      if (count > 0) dispatch(numb())
                    }
                  }}
                >
                  <img src={cart} alt="cart icon" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          {showFeedBack && (
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "hsl(26, 100%, 55%)",
              }}
            >
              Select The Quantities You Need
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default swiper;
