import React from "react";
import { useCart } from "../Components/CartContext";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const {
    cart,
    isOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    subtotal,
  } = useCart();

  const isCartEmpty = cart.length === 0;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity z-50 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full z-50 md:w-96 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">My Cart</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-150px)]">
          {isCartEmpty ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t -mt-6">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>

          {isCartEmpty ? (
            <button
              disabled
              className="w-full bg-gray-400 text-white py-3 rounded-lg cursor-not-allowed"
            >
              Checkout
            </button>
          ) : (
            <Link to="/signup">
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
                Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
