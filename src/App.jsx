// import React from "react";
// import { Navbar } from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import TopSelling from "./Components/TopSelling";
// import Reviews from "./Components/Reviews";
// import BestOxygen from "./Components/BestOxygen";
// import Footer from "./Components/Footer";
// import Session_img from "./assets/img/nagy-arnold-X_IvVDuHvDQ-unsplash 2.png"; // Assuming you have a background image
// import TrendyPlants from "./Components/TrendyPlants";

// function App() {
//   return (
//     <div className=" bg-primary font-Inter">
//    <div className="relative">
//   {/* ✅ Background image */}
// <img
//   src={Session_img}
//   alt="background"
//   className="absolute  left-0 right-0 w-full h-full object-cover z-0"
// />

//   {/* Foreground content */}
//   <div className="relative z-10">
//     <Navbar />
//     <Hero />
//     <TrendyPlants />
//   </div>
// </div>
//     <TopSelling />
//       <Reviews />
//       <BestOxygen />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { CartProvider, useCart } from "../src/Components/CartContext";
// import CartSidebar from "../src/Components/CartSidebar";
// import { Navbar } from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import TopSelling from "./Components/TopSelling";
// import Reviews from "./Components/Reviews";
// import BestOxygen from "./Components/BestOxygen";
// import Footer from "./Components/Footer";
// import Session_img from "./assets/img/nagy-arnold-X_IvVDuHvDQ-unsplash 2.png"; // Assuming you have a background image
// import TrendyPlants from "./Components/TrendyPlants";



// function App() {


//   return (
//     <CartProvider>
//      <div className=" bg-primary font-Inter">
//    <div className="relative">
//   {/* ✅ Background image */}
// <img
//   src={Session_img}
//   alt="background"
//   className="absolute left-0 right-0 w-full h-300 md:h-full object-cover z-0"
// />

//   {/* Foreground content */}
//   <div className="relative z-10">
//     <Navbar />
//     <Hero />
//     <TrendyPlants />
//   </div>
// </div>
//     <div className="px-5">
//       <TopSelling />
//         <Reviews />
//         <BestOxygen />
//       </div>

//         <Footer />
//         <CartSidebar />
//     </div>
//       </CartProvider>

//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "../src/Components/CartContext";
import CartSidebar from "../src/Components/CartSidebar";
import { Navbar } from "./Components/Navbar";
import Hero from "./Components/Hero";
import TopSelling from "./Components/TopSelling";
import Reviews from "./Components/Reviews";
import BestOxygen from "./Components/BestOxygen";
import Footer from "./Components/Footer";
import Session_img from "./assets/img/nagy-arnold-X_IvVDuHvDQ-unsplash 2.png";
import TrendyPlants from "./Components/TrendyPlants";

// Auth Pages
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import PaymentForm from "./Components/PaymentForm";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="bg-primary font-Inter">
                <div className="relative">
                  {/* ✅ Background image */}
                  <img
                    src={Session_img}
                    alt="background"
                    className="absolute left-0 right-0 w-full h-300 md:h-full object-cover z-0"
                  />

                  {/* Foreground content */}
                  <div className="relative z-10">
                    <Navbar />
                    <Hero />
                    <TrendyPlants />
                  </div>
                </div>

                <div className="px-5">
                  <TopSelling />
                  <Reviews />
                  <BestOxygen />
                </div>

                <Footer />
                <CartSidebar />
              </div>
            }
          />

          {/* Sign In Page */}
          <Route path="/signin" element={<SignIn />} />

          {/* Sign Up Page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Payment form*/}
          <Route path="/paymentform" element={<PaymentForm />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

