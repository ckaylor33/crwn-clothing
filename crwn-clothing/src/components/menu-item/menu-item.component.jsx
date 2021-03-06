import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

// {same as writing props.title, but here we pull the title value off of //
// our props and set to the title value inside of the function to be used //
// whenever we want}
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
