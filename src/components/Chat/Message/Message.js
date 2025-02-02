import React from 'react';

import './Message.css';

const Message = (props ) => {
    return(
        <div className="message">
            <img src={props.userImage} alt={props.user} />
            <div className="message__info" >
                <h4>
                    {props.user} 
                    <span className="message__timestamp">
                        {new Date(props.timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                    <p>
                        {props.message}
                    </p>
            </div>
        </div>
    )
}

export default Message