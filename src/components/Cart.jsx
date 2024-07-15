import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";
import { close_Modal, open_Modal } from "../features/modalSlice";
import emptyCartIcons from "/assets/images/illustration-empty-cart.svg";
import carbonIcon from "/assets/images/icon-carbon-neutral.svg";
import closer from "/assets/images/icon-remove-item.svg";
export default function Cart() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  if (cartItems.length === 0) {
    return (
      <div className="bg-white md:w-[400px] rounded-sm p-4 h-fit sm:w-11/12 mx-auto  ">
        <h1 className="text-Red text-2xl ">{`Your Cart(${amount})`}</h1>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-48 my-6"
            src={emptyCartIcons}
            alt="cart empty Icon"
          />
          <p className="text-Rose_400 text-sm font-semibold">
            Your added items will appear here!
          </p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>

        <div className="bg-white md:w-[400px] rounded-sm p-4 flex flex-col justify-center sm:w-11/12 mx-auto ">
          <h1 className="text-Red text-2xl ">{`Your Cart(${amount})`}</h1>
          <div>
            {cartItems.map((item, index) => {
              const { amount, name, price } = item;
              return (
                <div key={index} className="flex justify-between items-center  border-b-[1px] border-Rose_100 py-3">
                  <div>
                    <h2 className="font-bold">{name}</h2>
                    <div className="text-sm text-Rose_400 mt-1">
                      <span className="text-Red font-bold mr-4 ">
                        {amount}x
                      </span>
                      <span className="justify-center ">@ ${price}</span>{" "}
                      <span className="font-bold ml-2">
                        ${price * amount}
                      </span>
                    </div>
                  </div>
                  <img
                    src={closer}
                    alt=""
                    className="p-1  rounded-full border-[1px] border-Rose_400 cursor-pointer"
                    onClick={() => dispatch(removeItem({ item }))}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center w-full ">
            <p className="text-Rose_500">order total</p>
            <h2 className="text-xl font-bold my-4 ">${total}</h2>
          </div>
          <p className="flex justify-center bg-Rose_50 text-sm py-2 font-semibold text-Rose_500 my-4 ">
            <img src={carbonIcon} alt="" className="mr-2 " />
            This is <b className="mx-1 text-Rose_900"> carbon-neutral </b>
            delivry.
          </p>
          <button className="bg-Red p-[12px] rounded-[3rem] text-white mt-4 " onClick={() => dispatch(open_Modal())}>
            Confirm Order
          </button>
        </div>

      </div>
    );
  }
}

