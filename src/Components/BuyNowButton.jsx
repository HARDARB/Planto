import React from "react";
import { useCart } from "../Components/CartContext";
import { CgShoppingCart } from "react-icons/cg";

export const GreenButton = ({ product }) => {
  const { addToCart, toggleCart, cart } = useCart();

  return (
    <div className="flex items-center gap-3">
      {/* Buy Now */}
      <button
        onClick={() => addToCart(product)}
        className="mt-3 text-xs bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 text-white"
      >
        Buy Now
      </button>

      {/* Cart Toggle */}
      <button
        onClick={toggleCart}
        className="relative  px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        <CgShoppingCart className="inline-block w-5 h-5" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
};


export const WhiteButton = ({ product }) => {
  const { addToCart, toggleCart, cart } = useCart();

  return (
    <div className="flex items-center gap-3">
      {/* Buy Now */}
      <button
        onClick={() => addToCart(product)}
        className="border text-xs border-white px-5 py-2 rounded-lg hover:bg-green-600 hover:text-white transition text-white"
      >
        Buy Now
      </button>

       {/* Cart Toggle */}
      <button
        onClick={toggleCart}
        className="relative px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        <CgShoppingCart className="inline-block w-5 h-5" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
};

export const CartButton = ({ product }) => {
  const { addToCart, toggleCart, cart } = useCart();

  return (
    <div className="flex items-center gap-3">
       {/* Cart Toggle */}
      <button
        onClick={toggleCart}
        className="relative px-4 py-2  text-white rounded-lg hover:bg-gray-900 transition"
      >
        <CgShoppingCart className="inline-block w-5 h-5" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
};
