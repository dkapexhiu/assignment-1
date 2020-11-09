import React from "react";
import { FooterLayout } from "./styles";

export const Footer = () => (
  <FooterLayout className="site-footer">
    <p className="site-info">
      &copy; {new Date().getFullYear()}
    </p>
    <p>
    </p>
  </FooterLayout>
);
