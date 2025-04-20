import React from "react";

import "./componentCss/footer.css"


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-cont">
        <div className="footer-top">
          <div className="footer-column">
            <h4>Get started</h4>
            <a href="#">Sign in</a>
            <a href="#">Contact sales</a>
          </div>
          <div className="footer-column">
            <h4>Fund Managers</h4>
            <a href="#">Rolling Funds®</a>
            <a href="#">Venture Funds</a>
            <a href="#">Syndicates</a>
            <a href="#">Networked banking</a>
            <a href="#">Scout Funds</a>
            <a href="#">AngelList vs. Carta</a>
            <a href="#">Fin (Beta)</a>
          </div>
          <div className="footer-column">
            <h4>Pricing + Returns</h4>
            <a href="#">Pricing</a>
            <a href="#">Fund Cost Calculator</a>
            <a href="#">VC Fund Performance Calculator</a>
            <a href="#">RUV Calculator</a>
          </div>
          <div className="footer-column">
            <h4>Startups + Investors</h4>
            <a href="#">Roll Up Vehicles®</a>
            <a href="#">Demo Day Funds</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Partnerships</a>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Education Center</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Form CRS</a>
          </div>
        </div>

        </div>
        
  
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Disclosures</a>
            <a href="#">Cookie Settings</a>
            <span>© AL Advisors Management Inc.</span>
          </div>
          <div className="footer-socials">
            <button> <img src="https://www.svgrepo.com/show/506656/facebook.svg" alt="" /> </button>
            <button> <img src="https://www.svgrepo.com/show/512419/linkedin-161.svg" alt="" /> </button>
            <button> <img src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="" /> </button>
          </div>
        </div>
  
        <div className="footer-disclaimer">
          <p><strong>Disclaimer:</strong> The information contained herein is provided for informational and discussion purposes only and is not intended to be a recommendation for any investment, service, product, or other advice of any kind...</p>
          <p>Quotes included in these materials related to AngelList's services should not be construed in any way as an endorsement...</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;