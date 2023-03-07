import React from "react";
import "./SignatureFooter.css";
// import ninjalogo from "../public/ninjalogo.png";

function SignatureFooter(props) {
  return (
    <div className="signature-footer-container">
      <a
        href="https://100ninjas.dev/"
        target="_blank"
        rel="noreferrer"
        className="signature-footer-link"
      >
        {/* <img src={props.ninjalogo} alt="100ninjas Logo" className="signature-footer-logo" /> */}
      </a>
      <p className="signature-footer-text color-change-5x">
        BUILT BY{" "}
        <a
          href="https://100ninjas.dev/"
          target="_blank"
          rel="noreferrer"
          className="signature-footer-link"
        >
          <i className="fas fa-link fa-sm"></i>100NINJAS.DEV
        </a>
      </p>
    </div>
  );
}

export default SignatureFooter;
