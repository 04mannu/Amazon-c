import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://cdn.andnowuknow.com/mainStoryImage/amazon_newstore_111119.png?2elFDH.NARL3RqUKy0Nq2e.e1THgJeWI"
          alt=""
        />

        <div className="homeRow">
          <Product
            id="22233366"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="19.99"
            image="https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"
          />
          <Product
            id="22233344"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)
            Powered by your KitchenAid Stand Mixer, fits all household KitchenAid Stand Mixers"
            price="49.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
          />
        </div>

        <div className="homeRow">
          <Product
            id="22233355"
            title="Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band"
            price="150.45"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1594259786000"
          />
          <Product
            id="22233333"
            title="Bose Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-in, Black
Visit the Bose Store"
            price="299.00"
            image="https://images-na.ssl-images-amazon.com/images/I/81NI0UFz4zL._AC_SL1500_.jpg"
          />
          <Product
            id="22233322"
            title="Samsung Galaxy S20 FE G780F 128GB Dual Sim GSM Unlocked Android Smart Phone - International Version - Cloud Lavender"
            price="569.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71KPQP6MYxL._AC_SX679_.jpg"
          />
        </div>
        <div className="homeRow">
          <Product
            id="22233311"
            title="VIZIO 40-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming (V405-H19)"
            price="800.49"
            image="https://images-na.ssl-images-amazon.com/images/I/81NCnG8UvYL._AC_SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default home;