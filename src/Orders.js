import React from 'react';
import { Link } from "react-router-dom";

function Orders() {
    return (
        <Link to="/checkout">
        <div className="orders">
            <h1>Click here to see your order</h1>
        </div>
        </Link>
    )
}

export default Orders;