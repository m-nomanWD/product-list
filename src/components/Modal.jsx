import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { close_Modal, open_Modal } from "../features/modalSlice";
import confirmIcon from "/assets/images/icon-order-confirmed.svg";
import { clearCart } from "../features/cartSlice";
export default function Modal() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, total } = useSelector((store) => store.cart);
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpen]);
  return (
    <article className={isOpen ? "w-full min-h-full bg-overlay flex justify-center items-center pb-4 absolute top-0 left-0" : 'hidden'}>
      <div
        className={
          isOpen ? "block bg-white md:w-[400px] sm:w-11/12 rounded-lg mt-16 p-4  " : "hidden"
        }
      >
        <img src={confirmIcon} alt="tick icon" className="my-4" />
        <h1 className="text-4xl">Order Confirmed</h1>
        <p className="text-Rose_500 font-semibold text-sm mb-6 ">
          we hope you enjoy you food!{" "}
        </p>
        <div className="bg-Rose_50 px-4">
          {cartItems.map((item, index) => {
            const { amount, price, image, name } = item;
            const { thumbnail } = image;
            return (
              <div key={index} className="flex items-center justify-between align-middle py-4 border-b-[1px] border-Rose_100">
                <div>
                  <div className="flex items-center">
                    <img src={thumbnail} alt="name" className="rounded-lg h-14 w-14" />

                    <div className="text-sm ml-4 ">
                      <h5 className="font-semibold mb">{name}</h5>
                      <b className="text-Red  mr-4">{amount}x</b>
                      <span className="font-semibold text-Rose_500">@ ${price}</span>
                    </div>
                  </div></div>
                <h3 className="font-semibold text-md ">${amount * price}</h3>
              </div>
            );
          })}
          <div className="flex justify-between py-5">
            <p className="text-sm text-Rose_500 font-semibold">Order Totle</p>
            <strong className="text-2xl">${total}</strong>
          </div>
        </div>
        <button className="bg-Red p-[12px] rounded-[3rem] text-white mt-8 mb-6 w-full" onClick={() => {
          dispatch(close_Modal())
          dispatch(clearCart())
        }}>
          Start New Order
        </button>
      </div>
    </article>
  );
}
