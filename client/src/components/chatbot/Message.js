import React from "react";
import "./Message.css";
// import classNames from "classnames";

const Message = (props) => {
  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="card-panel  first">
        <div className="row valign-wrapper">
            <div className={`${props.speaks === "user" ? "user" : "bot"}`}>
              <span className="black-text">{props.text}</span>
            </div>
          </div>
        </div>
      </div>

 



  );
};

export default Message;
