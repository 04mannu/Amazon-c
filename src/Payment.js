import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from "./StateProvider";

function Payment() {

    const pay = ()=>{
        alert("payment done, your order is placed");
    }
  const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className="payment">
            <div className="paymentContainer">
                <h1>
                    Checkout ( 
                        <Link to="/checkout">{basket?.length} items</Link> 
                    ) 
                </h1>

                {/* payment section delivery adress */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>delivery</h3>
                    </div>
                
                </div>
                {/* payment section review Items */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Review items delivery</h3>
                    </div>
                    <div className="paymentItems">
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment section payment method */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>payment method</h3>
                        <div className="paymentDetails">
                        <button onClick={pay}>pay</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;