import React from "react";

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div >
            <p>
              <a
                href={learnMore} style={{textDecoration:"none"}}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
