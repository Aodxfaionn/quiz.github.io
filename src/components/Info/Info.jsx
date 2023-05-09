import React, { useState } from "react";
import "./info.css";

const Info = ({choosecategory, score}) => {
  return <div className="info">
<div className="info__category">Category: {choosecategory}</div>
<div className="info__score">Score: {score}</div>
  </div>;
};

export default Info;
