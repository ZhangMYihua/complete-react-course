import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkTo, history }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(linkTo)}>
    <div
      className="backgroundContainer"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
