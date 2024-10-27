import React from "react";
import small_case from "../../assets/media/images/smallcaseLogo.png";
import streak from "../../assets/media/images/streakLogo.png";
import dito from "../../assets/media/images/dittoLogo.png";
import fund from "../../assets/media/images/zerodhaFundhouse.png";
import sensible from "../../assets/media/images/sensibullLogo.svg";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-3">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3  mt-3">
          <img src={small_case} />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src={streak} style={{width:"25%"}}/>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img src={dito} style={{width:"25%"}}/>
          <p className="text-small text-muted">Personalized advice on life</p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img src={fund} style={{width:"25%"}}/>
          <p className="text-small text-muted">Our asset management venture

</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src={small_case} />
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src={sensible} style={{width:"30%"}}/>
          <p className="text-small text-muted">Options trading platform that lets you
</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"0 auto"}}>Sign up now</button>
      </div>
    </div>
  );
}

export default Universe;
