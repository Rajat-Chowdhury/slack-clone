import React from 'react';

import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../../../firebase';

const SidebarOption = (props) => {

    const history = useHistory();

    const selectChannel = () => {
        if(props.id){
            history.push(`/room/${props.id}`)
        }
        else{
            history.push(props.title);
        } 
    };

    const addChannel = () => {
        const channelName = prompt('Please enter a channel name');
        if(channelName){
            db.collection('rooms').add({
                name: channelName
            })
        }
    };

    return(
        <div 
        className="sidebarOption"
        onClick={props.addChannelOption ? addChannel : selectChannel}>
            {props.Icon && <props.Icon className="sidebarOption__icon" />}
            {props.Icon ? (<h3>{props.title}</h3>) 
            : (
            <h3 className="sidebarOption__channel">
                <span className="sidebarOption__hash"># {props.title}</span>
            </h3>
            )}
        </div>
    )
}

export default SidebarOption;
