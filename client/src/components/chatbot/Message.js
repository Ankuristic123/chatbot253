import React from 'react';
import "./Message.css";


const Message = (props) => {
    return (

        <div className="col s10 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                     {props.speaks==='bot' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-small waves-effect waves-light red">{props.speaks}</a>
                        {/* <img src="images/bot icon.jpg" alt=""></img> */}
                    </div>
                    }  
                    <div className="col s10">

                      <span className="black-text">
                        {props.text}
                      </span>
                    </div>
                     {props.speaks==='user' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-small waves-effect waves-light red">{props.speaks}</a>
                        <img src="images/user icon.jpg" alt=""></img>
                    </div>
                    } 
                </div>
            </div>
        </div>

    );
};

export default Message;