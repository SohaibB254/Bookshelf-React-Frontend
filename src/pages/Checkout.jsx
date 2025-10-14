import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { useCheckout } from "../context/CheckoutContext";
import { useCart } from "../context/CartContext";
import { div, h1 } from "motion/react-client";

const Checkout = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAddress, setShowAddress] = useState(true);
  const { itemsInCart } = useCart()
  const { checkoutItem,totals } = useCheckout();
  const [payMethod, setPayMethod] = useState("online");
  const path = useLocation().pathname


  const handleDeliveryInfo = () => {
    setShowAddress((prev) => !prev);
  };

  const handlePaymentMethod = (paymentType) => {
    setPayMethod(paymentType);
  };

  const handleConfirmPayment = () => {
    setShowConfirmation(true);
  };
  return (
    <>
      <div className=" w-screen relative  font-inter dark:text-gray-300  px-[5vw] ">
        <div
          id="Checkout"
          className={`flex flex-wrap sm:flex-nowrap checkout-page ${
            showConfirmation ? "blurred" : ""
          } w-[90vw] gap-1 mt-4`}
        >
          <div className="w-[90vw]">
            <div id="OrderReview" className="border w-auto pt-2 pl-4 sm:h-[300px] ">
              <h1 className=" text-xl font-semibold px-4"> Order Summary</h1>
            { path.startsWith('/total') ? (
              <div className="flex sm:items-center sm:flex-row py-4 flex-col justify-between px-3">
                <div id="itemNames">
                  <h1>Items:</h1>
                  {itemsInCart.map((item)=>{
                    return <h1 className="text-green-500">{item.title} x {item.quantity}</h1>
                  })}
                </div>

                <div className=" flex flex-col mt-3">
                    <span>
                      Total Price:{" "}
                      <span className="text-green-500">
                        {" "}
                        {totals.totalPrice}
                      </span>
                    </span>
                    <span>Delivery: {totals.totalDelivery}</span>
                    <span>
                      SubTotal: {totals.totalPrice + totals.totalDelivery}
                                        </span>
                    <span>Total items: {totals.totalItems}</span>
                  </div>
                   </div>
            ):(
                 <div className="flex gap-3 mt-3">
                <div id="OrderImg">
                  <img
                    className="w-[100px]"
                    src={checkoutItem.cover_photo}
                    alt=""
                  />
                </div>
                <div
                  id="OrderDetail"
                  className="flex justify-between sm:flex-row flex-col px-4 mx-4 w-full "
                >
                  <div>
                    <h1 className=" text-base sm:text-[20px] font-bold">
                      {checkoutItem.title}
                    </h1>
                    <p className="text-gray-500  italic">
                      Author: {checkoutItem.author}
                    </p>
                  </div>
                  <div className=" flex flex-col">
                    <span>
                      Price:{" "}
                      <span className="text-green-500">
                        {" "}
                        {checkoutItem.price}
                      </span>
                    </span>
                    <span>Delivery: {checkoutItem.delivery}</span>
                    <span>
                      SubTotal: {checkoutItem.price + checkoutItem.delivery}
                    </span>
                    <span>Quantity: {checkoutItem.quantity}</span>
                  </div>
                </div>
              </div>
            )
            }

            </div>
            <div id="OrderDelievryDetails" className="border  px-4 py-3">
              <div className="flex w-full justify-between px-4">
                <h1 className=" text-xl font-semibold ">Delivery Details</h1>
                <div className="flex items-center gap-2">
                  <input
                    onClick={handleDeliveryInfo}
                    id="saveDetailCheck"
                    className="w-4 h-4 text-center"
                    type="checkbox"
                  />
                  <span>Use Saved Details</span>
                </div>
              </div>
              <form
                className={`${
                  showAddress ? "flex" : "hidden"
                } flex-col gap-2  mt-3`}
              >
                <input
                  className="w-80 p-2 dark:bg-gray-900 rounded-sm"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <input
                  className="min-w-[80%] p-2 dark:bg-gray-900  rounded-sm"
                  type="text"
                  name="name"
                  placeholder="Address"
                />
                <div>
                  <input
                    className=" w-80 my-2 mr-2 dark:bg-gray-900 p-2 rounded-sm"
                    type="text"
                    name="city"
                    placeholder="City/Region"
                  />
                  <input
                    className=" w-80 my-2  p-2 dark:bg-gray-900 rounded-sm"
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                  />
                  <input
                    className=" w-80 my-2 mr-2  p-2 dark:bg-gray-900 rounded-sm"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-80  my-2 p-2 dark:bg-gray-900 rounded-sm"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <input className="w-4 h-4 text-center" type="checkbox" />
                    <span>Save Details</span>
                  </div>
                  <button className="u-btn w-40 rounded-sm">
                    Confirm Details
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div id="OrderPaymentDetails"
            className="border py-3  sm:text-[24px] px-4 w-[50%] "
          >
            <div>
              <h1 className=" text-base">Got a Coupon Code?</h1>
              <div className="flex items-center  text-base border-b">
                <input
                  className="w-80 h-10 my-3 p-2 dark:bg-gray-900  rounded-r-none rounded-sm"
                  type="text"
                  name="code"
                  placeholder="Coupon Code"
                />
                <button className="u-btn h-10 rounded-l-none  rounded-sm">
                  Apply
                </button>
              </div>
            </div>
            <div className="text-base mt-12">
              <h1 className="text-base mb-2 sm:text-[24px]">Payment Details</h1>
              <p className="font-semibold">Choose Payment Method</p>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 text-center"
                    name="paymentMethod"
                    id="online"
                    type="radio"
                    checked={payMethod === "online"}
                    onChange={() => handlePaymentMethod("online")}
                  />
                  <label
                    htmlFor="online"
                    className="text-xs sm:text-base  truncate"
                  >
                    Online Payment
                  </label>
                  <input
                    className="w-4 h-4 text-center"
                    name="paymentMethod"
                    id="cod"
                    type="radio"
                    checked={payMethod === "cod"}
                    onChange={() => handlePaymentMethod("cod")}
                  />
                  <label htmlFor="cod" className="text-xs sm:text-base">
                    COD
                  </label>
                </div>
              </div>
              {payMethod === "online" && (
                <div className={`flex  flex-col mt-4 gap-3`}>
                  <p className="font-semibold">Choose online payment option</p>
                  <span className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 text-center"
                      name="onlinePaymentOption"
                      id="paypal"
                      type="radio"
                    />
                    <label htmlFor="paypal">Paypal</label>
                  </span>
                  <span className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 text-center"
                      name="onlinePaymentOption"
                      id="apple"
                      type="radio"
                    />
                    <label htmlFor="apple">Apple Pay</label>
                  </span>
                  <span className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 text-center"
                      name="onlinePaymentOption"
                      id="mobile"
                      type="radio"
                    />
                    <label htmlFor="mobile">Mobile Account</label>
                  </span>
                  <span className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 text-center"
                      name="onlinePaymentOption"
                      type="radio"
                      id="card"
                    />
                    <label htmlFor="card">Debit/Credit Card</label>
                  </span>
                  <input
                    className="w-80 my-1 mr-4 p-2 dark:bg-gray-900 rounded-sm"
                    type="number"
                    name="cardNumber"
                    placeholder="Card number"
                  />
                  <input
                    className="w-80 my-1 mr-4 p-2 dark:bg-gray-900 rounded-sm"
                    type="date"
                    name="cardExpDate"
                    placeholder="Expiry MM/YY e.g, 07/35 "
                  />
                  <input
                    className="w-80 my-1 mr-4 p-2 dark:bg-gray-900 rounded-sm"
                    type="number"
                    name="cardCv"
                    placeholder="Security Number e.g, 054"
                  />
                  <div className="flex items-center gap-2">
                    <input className="w-4 h-4 text-center" type="checkbox" />
                    <span>Save Details</span>
                  </div>
                </div>
              )}
              <div>
                <div className={`flex  flex-col gap-2 mt-3 pb-4`}>
                  {payMethod === "cod" && <p>Cash on delivery selected</p>}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleConfirmPayment}
                      className="u-btn text-center rounded-sm"
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="w-[450px] flex flex-col gap-3 text-[26px] items-center rounded-md py-10 h-auto dark:bg-gray-800 dark:text-gray-200 bg-white">
            <h1 className="font-semibold">Congratulations!🥳</h1>
            <p className="text-[0.6em]">Your order is successfully placed</p>
            <i
              className="fa-solid fa-circle-check text-[54px] animate-pulse text-[var(--baseColor)]"
              style={{ color: "#63E6BE;" }}
            ></i>
            <Link to="/store/all" className="hover:underline text-[0.5em]">
              Continue Shopping!
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Checkout);
