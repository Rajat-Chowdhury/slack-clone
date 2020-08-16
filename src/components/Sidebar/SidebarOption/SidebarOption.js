import React from 'react';

import './SidebarOption.css';

const SidebarOption = (props) => {
    return(
        <div className="sidebarOption">
            <h2>{props.title}</h2>
            {props.Icon && <props.Icon className="sideOption__icon " />}
        </div>
    )
}

export default SidebarOption;
