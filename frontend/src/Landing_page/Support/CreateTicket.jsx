import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2  text-muted " style={{ fontWeight: "350" }}>
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 p-3 mt-2 ">
          <h4 className="fs-4" style={{ fontWeight: "400" }}>
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </h4>
          <a href="" className="link-spacing">Getting</a>
          <a href="" className="link-spacing">started</a>
          <a href="" className="link-spacing">Online</a>
          <a href="" className="link-spacing">Offline</a>
          <a href="" className="link-spacing">Charges</a>
          <a href="" className="link-spacing">Company, Partnership and HUF</a>
          <a href="" className="link-spacing">Non Resident Indian (NRI)</a>
        </div>
        <div className="col-4 p-3 mt-2 ">
          <h4 className="fs-4" style={{ fontWeight: "400" }}>
          <i class="fa-solid fa-user"></i> Your Zerodha Account
          </h4>
          <a href="" className="link-spacing">Login credentials</a>
          <a href="" className="link-spacing">Your Profile</a>
          <a href="" className="link-spacing">Account modification and segment addition</a>
          <a href="" className="link-spacing">CMR & DP ID</a>
          <a href="" className="link-spacing">Nomination</a>
          <a href="" className="link-spacing">Transfer and conversion of shares</a>
        </div>
        <div className="col-4 p-3 mt-2 ">
          <h4 className="fs-4" style={{ fontWeight: "400" }}>
            <i className="fa-solid fa-chart-simple"></i> Trading and Markets
          </h4>
          <a href="" className="link-spacing">Getting</a>
          <a href="" className="link-spacing">started</a>
          <a href="" className="link-spacing">Online</a>
          <a href="" className="link-spacing">Offline</a>
          <a href="" className="link-spacing">Charges</a>
          <a href="" className="link-spacing">Company, Partnership and HUF</a>
          <a href="" className="link-spacing">Non Resident Indian (NRI)</a>
        </div>
        <div className="col-4   mb-5">
          <h4 className="fs-4" style={{ fontWeight: "400" }}>
           <i class="fa-solid fa-credit-card"></i>  Funds
          </h4>
        
          <a href="" className="link-spacing">Fund withdrawal</a>
          <a href="" className="link-spacing">Adding funds</a>
          <a href="" className="link-spacing">Adding bank accounts</a>
          <a href="" className="link-spacing">eMandates</a>
         
        </div>
        <div className="col-4   mb-5">
          <h4 className="fs-4" style={{ fontWeight: "400" }}>
          <i class="fa-solid fa-window-restore"></i> Console
          </h4>
          <a href="" className="link-spacing">IPO</a>
          <a href="" className="link-spacing">Portfolio</a>
          <a href="" className="link-spacing">Funds statement</a>
          <a href="" className="link-spacing">Profile</a>
          <a href="" className="link-spacing">Reports</a>
          <a href="" className="link-spacing">Referral program</a>
          
        </div>
        <div className="col-4   mb-5">
          <h4 className="fs-4" style={{ fontWeight: "400" }}>
          <i class="fa-solid fa-coins"></i> Coin
          </h4>
          <a href="" className="link-spacing">Understanding mutual funds and Coin</a>
          <a href="" className="link-spacing">Coin app</a>
          <a href="" className="link-spacing">Coin web</a>
          <a href="" className="link-spacing">Transactions and reports</a>
          <a href="" className="link-spacing">National Pension Scheme (NPS)</a>
          
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
