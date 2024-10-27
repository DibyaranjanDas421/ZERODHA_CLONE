import React from "react";
import GooglePlay from "../../assets/media/images/googlePlayBadge.svg";
import AppleStore from "../../assets/media/images/appstoreBadge.svg";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  trydemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container mt-5">
      <div className="row  ">
        <div className="col-6">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div style={{display:"flex"}}>
          <p><a href={trydemo} style={{textDecoration:"none"}}>Try demo<i class="fa-solid fa-arrow-right"></i></a></p>  
          <p><a href={learnMore}  style={{marginLeft:"50px",textDecoration:"none"}}> Learn more<i class="fa-solid fa-arrow-right"></i></a></p> 
          </div>
          <div className="mt-3">
          <a href={googlePlay}><img src={GooglePlay} alt="Google Play Badge" /></a>
          <a href={appStore} style={{marginLeft:"50px"}}><img src={AppleStore} alt="Apple Store Badge" /></a>
          </div>
       
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection; // Make sure this line is present
