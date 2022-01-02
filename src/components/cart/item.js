import React, { useEffect, useState } from "react";
import "./cart.css";
// import productdata from '../../constant'
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import axios from "axios";

function Pitem({ productdata }) {
  // const item=JSON.parse(localStorage.getItem("data") || "[]");
  const [price, setprice] = useState(0);

  useEffect(() => {
    const total = productdata
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);

    setprice(total);
  }, [productdata.length]);

  const Submit = () => {
    alert("All Data is imported succesfully!!!");
    axios.post("https://janam.free.beeceptor.com", {
      data: productdata,
    });
  };
  return (
    <div className="c-item-div">
      {price > 0 ? (
        <>
          <div className="product-div">
            {productdata.map((data) => (
              <div key={data.id + data.name} className="c-cell">

                  <div style={{display: 'flex',alignItems:'center',justifyContent: 'space-around',}}>
              <div>
                  <RiArrowDownSLine size="40" color="gray" />
               </div> 

                <div className="c-product-img">
                  <img src={data.image} alt="" />
                </div>
                <div className="c-product-detail">
                  <h2>{data.name}</h2>
                  <h4 style={{ marginLeft: 20, marginTop: 23 }}>
                    ${data.price} (ex.tax)
                  </h4>
                </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 100,
                    font: 45,
                  }}
                >
                  <AiOutlineDelete size="40" color="gray" />
                </div>



              </div>
            ))}
          </div>

          <div className="bottom-div">
            <div className="total-price">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>SubTotal</p>
                <p> ${price}</p>
              </div>
            </div>
            <div className="pay" onClick={Submit}>
              <div>
                <h3 style={{ color: "white" }}>
                  Pay <br></br>
                  Item {productdata.length}
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ color: "white" }}>
                  ${price} <MdOutlineArrowForwardIos />
                  <MdOutlineArrowForwardIos />
                </h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
}

export default Pitem;
