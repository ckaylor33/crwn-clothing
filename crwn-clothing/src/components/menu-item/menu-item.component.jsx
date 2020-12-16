import React from "react";
import "./menu-item.styles.scss";

// {same as writing props.title, but here we pull the title value off of //
// our props and set to the title value inside of the function to be used //
// whenever we want}
const MenuItem = ({ title, imageUrl }) => (
  <div style={{ backgroundImage: `url(${imageUrl})` }} className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
