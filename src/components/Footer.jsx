import React from "react";

function Footer() {
  return (
    <footer className="site-footer bg-purple-200">
      <div className="container">
        <div className="flex flex-row">
          <div className="w-[1000px] px-4">
            <h6 className="font-semibold text-xl">NaiReview</h6>
            <p className="text-justify">
              We aim to make grocery shopping convenient, enjoyable, and
              affordable for everyone. Whether you're cooking a family dinner,
              stocking up on essentials, or looking for that special ingredient
              for your favorite recipe, we've got you covered.
            </p>
          </div>
          
          <div className="px-4 col-6 col-md-3">
            <h6 className="font-semibold">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="places">Photos</a>
              </li>
              <li>
                <a href="videos">Videos</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 col-sm-6 col-12 pr-[180px] pt-3">
            <ul className="social-icons">
              <li>
                <a className="instagram" href="https://www.instagram.com/shann_carrie/">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://www.linkedin.com/in/shanelle-omondi/">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;