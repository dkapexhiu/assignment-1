import React from "react";
import { config } from "../../config";
import { HeaderLayout } from "./styles";

export const Header = () => (
  <HeaderLayout className="site-header">
    <h1 className="site-name">{config.siteMetadata.title}</h1>
    <p className="site-description">{config.siteMetadata.description}</p>
  </HeaderLayout>
);
