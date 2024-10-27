import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="  " id="supportWrapper">
        <h4 className="mt-5">Support Portal</h4>
        <a href=""  className="mt-5">Track tickets</a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 p-5">
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input placeholder="Eg:how do i activate F&O,why my order is getting rejected" /> <br/>
          <a href="" >Track account opening</a>
          <a href="" className="link_sp"> Track segment activation</a>
          <a href="" className="link_sp"> Intraday margins</a>
          <a href="" className="link_sp">Kite user manual</a>
        </div>
        <div className="col-6 p-5 ">
          <h1>Featured</h1>
           <ol>
            <li> <a href="">Current Buybacks - August 2024</a></li>
            <li><a href="">Offer for sale (OFS) - August 2024</a></li>
           </ol>
         
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
