import React from "react";
import { Link } from "react-router-dom";
const MoreItem = (props) => {
  return (
    <div style={{ paddingTop: "5px" }}>
      <div key={props.to}>
        <Link to={props.to} className="moreLink">
          <div>
            {props.icon !== undefined ? (
              props.icon
            ) : (
              <span style={{ padding: "10px", fontSize: "18px" }}>
                {props.iconText}
              </span>
            )}
            <span style={{ padding: "10px" }}>{props.text}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MoreItem;
