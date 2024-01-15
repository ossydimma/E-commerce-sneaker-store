import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../util/features/count";
interface MyComponentProps {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}
function Navbar({ isShow, setIsShow }: MyComponentProps) {
  const count = useSelector(selectCount);
  const [showCartBox, setShowCartBox] = useState(false);
  const [showNav, setshowNav] = useState(
    window.innerWidth > 900 ? true : false
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 900 ? setshowNav(false) : setshowNav(true);
    });
  }, []);
  function showSideBar(): void {
    setshowNav(true);
  }
  function hideSideBar(): void {
    setshowNav(false);
  }

  return (
    <nav>
      <div className="menu">
        <div className="menu-left">
          <div className="title">
            <h1>Sneakers</h1>
          </div>
          <div onClick={showSideBar}>
            <img
              src="/src/images/icon-menu.svg"
              className="bar-icon"
              alt="bar icon"
            />
          </div>
          {showNav && (
            <ul>
              <img
                src="/src/images/icon-close.svg"
                alt="icon-close"
                onClick={hideSideBar}
              />
              <li>
                <a href="/">Collections</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          )}
        </div>
        {showCartBox && (
          <div className="cart-items">
            <div className="cart-title-txt">
              <h4>cart</h4>
            </div>
            {!isShow && (
              <div className="empty-cart">
                <p>Your Cart Is Empty</p>
              </div>
            )}
            {isShow && (
              <div>
                <div className="cart-content">
                  <div className="cart-content-image">
                    <img
                      src="/src/images/image-product-1.jpg"
                      alt="product image"
                    />
                  </div>
                  <div className="cart-content-body">
                    <h1>Fall Limited Edition Sneakers</h1>
                    <div className="cart-content-body-flex">
                      <div>
                        <p>{`$125.00 x ${count}`}</p>
                        <strong>${125.0 * count}</strong>
                      </div>
                      <img
                        src="/src/images/icon-delete.svg"
                        alt="delete icon"
                        onClick={() => setIsShow(false)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="cart-item-btn">
                  <button>Checkout</button>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="menu-right">
          <div
            className="cart"
            style={{ cursor: "pointer" }}
            onClick={() => {
              !showCartBox ? setShowCartBox(true) : setShowCartBox(false);
            }}
          >
            {isShow && <p>1</p>}
            <img src="/src/images/icon-cart.svg" alt="cart" />
          </div>
          <div>
            <img src="/src//images/image-avatar.png" alt="dp" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
