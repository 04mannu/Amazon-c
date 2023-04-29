import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ image, id, price, rating, title }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //   remove the item from basket
    dispatch ({
        type: "REMOVE_FROM_BASKET",
        id: id,
    })
  }



  return (
    <div className="chekoutProduct">
      <img className="checkoutProductImage" src={image} alt="" />

      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;