import React from "react";
import { Helmet } from "react-helmet";

type PropsType = {
  title: string;
  description: string;
};

const SEO: React.FC<PropsType> = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;
