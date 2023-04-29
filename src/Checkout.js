import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{basket, user }, dispatch] = useStateValue();

    return (
      <div className="checkout">
        <div className="checkoutLeft">
          <img
            className="checkoutAd"
            src="https://www.karobargain.com/wp-content/uploads/2020/03/amazonupc.png"
            alt=""
          />
          <div>
            <h3>{user?.email}</h3>

            <h2 className="checkoutTitle">Your shopping Cart</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}

            {/* checkoutProduct */}
            {/* checkoutProduct */}
            {/* checkoutProduct */}
            {/* checkoutProduct */}
            {/* checkoutProduct */}
          </div>
        </div>
        <div className="checkoutRight">
          <Subtotal />
        </div>
      </div>
    );
}

export default Checkout