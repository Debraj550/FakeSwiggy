import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { removeItem, clearCart, addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import Lottie from "lottie-react";
import emptycart from "../assets/emptycart.json";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleItemRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handleItemAdd = (item) => {
    dispatch(addItem(item));
  };

  const calculateTotalPrice = () => {
    return cartData.reduce((total, item) => {
      return total + item.totalPrice;
    }, 0);
  };
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartData]);

  if (cartData.length === 0) {
    return (
      <div className="w-6/12 m-auto">
        <h1 className="text-center font-mono font-bold text-lg mt-10 bg-red-500 text-white rounded-lg">
          No items in the cart.
        </h1>
        <Lottie
          className="bg-slate-50"
          animationData={emptycart}
          loop={true}
        ></Lottie>
      </div>
    );
  }
  console.log(cartData);
  return (
    <div>
      <h2
        className="flex justify-center p-2 mx-auto text-center font-mono font-bold text-lg mt-10 mb-5 w-6/12 bg-gray-700
       text-white rounded-lg"
      >
        Cart
      </h2>
      <div className="bg-white-300">
        {cartData.map((item, idx) => (
          <div
            className="bg-slate-50 rounded-lg border-b-2 mb-4 p-4  w-7/12 m-auto flex items-center justify-between"
            key={idx}
          >
            <div className="">
              <img
                className="w-40 rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
            <div className="m-6 w-full text-left">
              <h1 className="font-semibold">{item.card.info.name}</h1>
              <p className="text-gray-400">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 flex flex-col items-center ">
              <div>
                <p className="font-semibold text-gray-600 mb-2">
                  Rs.{" "}
                  {(parseFloat(item.card.info.price / 100).toFixed(2) ||
                    parseFloat(item?.card?.info?.defaultPrice / 100).toFixed(
                      2
                    )) * item.quantity}
                </p>
              </div>
              <div className="w-full flex justify-center gap-2">
                <button
                  onClick={() => handleItemRemove(item)}
                  className="text-normal bg-red-500 text-white font-bold mr-1 px-3 py-1 rounded-lg transition-all hover:scale-90 "
                >
                  -
                </button>
                <div className="text-gray-500 font-bold">{item.quantity}</div>
                <button
                  onClick={() => handleItemAdd(item)}
                  className="text-normal bg-red-500 text-white font-bold ml-1 px-3 py-1 rounded-lg transition-all hover:scale-90 "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-7/12 m-auto flex justify-end">
        <h1 className="font-bold p-2 m-2 text-lg bg-slate-200 rounded-lg">
          Total - {totalPrice}
        </h1>
      </div>
      <div className="w-7/12 m-auto flex justify-end">
        <button
          onClick={() => handleEmptyCart()}
          className=" bg-red-500 text-white font-bold p-2 m-2 rounded-lg transition-all hover:scale-90"
        >
          Empty Cart
        </button>
        <button
          onClick={() => handleEmptyCart()}
          className=" bg-red-500 text-white font-bold p-2 m-2 rounded-lg transition-all hover:scale-90"
        >
          Add to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
