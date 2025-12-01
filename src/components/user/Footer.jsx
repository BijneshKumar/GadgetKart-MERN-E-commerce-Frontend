import React from "react";
import { FaFacebook, FaInstagram,FaLinkedin,FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-md-4">
            <h4 className="fw-bold">GadgetKart</h4>
            <p className="small text-secondary">
              Your one-stop shop for the latest gadgets, smart devices, and
              accessories. Bringing innovation and technology closer to you at
              unbeatable prices.
            </p>
          </div>

          {/* About Links */}
          <div className="col-md-2">
            <h6 className="fw-semibold text-uppercase mb-3">About</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-secondary text-decoration-none hover-link">About Us</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Careers</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Blog</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Press</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3">
            <h6 className="fw-semibold text-uppercase mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Help Center</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Shipping & Returns</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-3">
            <h6 className="fw-semibold text-uppercase mb-3">Follow Us</h6>
            <div className="d-flex gap-3 fs-4">
              <a href="https://github.com/BijneshKumar" target="_blank" className="text-light"><FaGithub/></a>
              <a href="https://www.linkedin.com/in/Bijnesh-kumar10/" target="_blank" className="text-light"><FaLinkedin /></a>
              <a href="https://www.facebook.com/bijnesh.kumar.9849" target="_blank" className="text-light"><FaFacebook /></a>
              <a href="https://www.instagram.com/bijnesh.kumar.9849/" target="_blank" className="text-light"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Footer Bottom */}
        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} GadgetKart. All rights reserved.
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
