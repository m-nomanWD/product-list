import React from "react";
import { useState } from "react";
import addToCartIcon from "/assets/images/icon-add-to-cart.svg";
import plusBtn from "/assets/images/icon-increment-quantity.svg";
import minusBtn from "/assets/images/icon-decrement-quantity.svg";
import { useSelector, useDispatch } from "react-redux";

import { addToCart, increase, decrease, removeItem } from "../features/cartSlice";
export default function SingleProduct({ product }) {
  const { name, image, category, price, amount, isInCart } = product;
  const { desktop, mobile, tablet } = image;
  // console.log({product});
  const distpatch = useDispatch();

  return (
    <article className="lg:w-[270px] md:w-[320px] sm:w-11/12 mb-4">
      <div className="flex flex-col  items-center">
        <img
          src={mobile}
          alt="name"
          className={
            isInCart ? "rounded-2xl border-2 border-Red md:h-56 object-cover " : "rounded-2xl md:h-56 object-cover"
          }
        />

        {isInCart ? (
          <div className="cart-btn border-none bg-Red text-Rose_100 justify-between px-4 ">
            <img
              className="w-5 h-5 rounded-full border-Rose_100 border-[1px] p-1 hover:change-color    "
              src={minusBtn}
              alt=""
              onClick={() => {
                amount <= 1 ? distpatch(removeItem({ item: product })) :
                  distpatch(decrease({ name: name, price: price }))


              }}
            />
            <span>{amount}</span>{" "}
            <img
              src={plusBtn}
              alt=""
              className="rounded-full border-Rose_100 border-[1px] p-1  "
              onClick={() => {
                distpatch(increase({ name: name, price: price }));

              }}
            />
          </div>
        ) : (
          <div
            onClick={() => {
              distpatch(addToCart({ product }));

            }}
            className=" border-Rose_300 border-2 bg-white   cart-btn "
          >
            <img src={addToCartIcon} alt="" className="mr-2 " />

            <span className="font-semibold capitalize">add to cart</span>
          </div>
        )}
      </div>
      <div className="my-2">
        <h6 className="text-Rose_300 text-sm">{category}</h6>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="font-bold text-Red">${price}</p>
      </div>
    </article>
  );
}
