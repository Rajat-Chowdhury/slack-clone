import React from 'react';

import "./Sidebar.css"
import SidebarOption from './SidebarOption/SidebarOption';

import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


const Sidebar = ( ) => {
    return(
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2> FC Barcelona </h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Lionel Messi
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        </div>
    )
}

export default Sidebar;