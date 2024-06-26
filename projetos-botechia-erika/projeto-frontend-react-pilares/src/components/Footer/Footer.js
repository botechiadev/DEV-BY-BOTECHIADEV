import React from "react";
import { FooterContainer } from "./styled.Footer";

export function Footer() {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#title" className="social-link">
            <i className="fas fa-arrow-up"></i>
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}
