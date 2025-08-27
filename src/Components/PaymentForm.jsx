import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const PaymentForm = () => {
  const [status, setStatus] = useState("idle"); // idle | success | fail

  const handlePayment = () => {
    // Simulate payment process
    setTimeout(() => {
      // Randomly decide success/fail (replace with real payment response)
      Math.random() > 0.5 ? setStatus("success") : setStatus("fail");
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      {status === "idle" && (
        <>
          {/* Payment Method */}
          <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <button className="border rounded-lg p-3 hover:border-green-500">
              <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" className="mx-auto" />
            </button>
            <button className="border rounded-lg p-3 hover:border-green-500">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="mx-auto" />
            </button>
            <button className="border rounded-lg p-3 hover:border-green-500">
              <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="mx-auto" />
            </button>
            <button className="border rounded-lg p-3 text-xs font-medium hover:border-green-500">
              Cash<br />On<br />Delivery
            </button>
          </div>

          {/* Card Info */}
          <div className="space-y-3 mb-6">
            <input type="text" placeholder="Card Number" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Cardholder Name" className="w-full p-2 border rounded-md" />
            <div className="grid grid-cols-3 gap-2">
              <input type="text" placeholder="MM" className="p-2 border rounded-md" />
              <input type="text" placeholder="YY" className="p-2 border rounded-md" />
              <input type="text" placeholder="CVC" className="p-2 border rounded-md" />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Subtotal (2 items)</span>
              <span>$60.80</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Home delivery cost</span>
              <span>$5.50</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total Amount</span>
              <span>$66.30</span>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Confirm Payment
          </button>
        </>
      )}

      {/* Success Message */}
      {status === "success" && (
        <div className="flex flex-col items-center text-center space-y-4">
          <FaThumbsUp className="text-green-500 text-6xl" />
          <h2 className="text-xl font-bold">Payment Successful</h2>
          <p className="text-gray-600">Your order has been placed successfully.</p>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
            onClick={() => setStatus("idle")}
          >
            Continue Shopping
          </button>
        </div>
      )}

      {/* Fail Message */}
      {status === "fail" && (
        <div className="flex flex-col items-center text-center space-y-4">
          <FaThumbsDown className="text-red-500 text-6xl" />
          <h2 className="text-xl font-bold">Payment Failed</h2>
          <p className="text-gray-600">Something went wrong. Try again later.</p>
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            onClick={() => setStatus("idle")}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
