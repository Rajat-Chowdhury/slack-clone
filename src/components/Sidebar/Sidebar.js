import React,{useState, useEffect} from 'react';

import "./Sidebar.css"
import SidebarOption from './SidebarOption/SidebarOption';
import db from '../../firebase';

import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useStateValue} from '../../hoc/StateProvider';

const Sidebar = ( ) => {

    const [{user}] = useStateValue();
    const [channels,setChannels] = useState([]);

    useEffect(() => {
        //runs once when the component loads if 2nd arg is empty,
        //or runs everytime the variable in 2nd arg changes

        //on snapshot is fired up every time the data inside the db commection rooms is changed
        db.collection('rooms').onSnapshot(snapshot=>(
            setChannels(
                //the documents inside a firestore is returned as a doc so to access it we have to go to the room and then target doc with .doc
                snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        name:doc.data().name
                    }
                ))
            )
         ))
    }, [])

    return(
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2> FC Barcelona </h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
        

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption 
            title="Youtube"/>
            <SidebarOption 
            Icon={InboxIcon} 
            title="Mentions & Reactions" />
            <SidebarOption 
            Icon={DraftsIcon} 
            title="Saved Items"/>
            <SidebarOption 
            Icon={BookmarkBorderIcon} title="Channels"/>
            <SidebarOption Icon={PeopleAltIcon} 
            title="People & User groups"/>
            <SidebarOption 
            Icon={AppsIcon} 
            title="Apps"/>
            <SidebarOption 
            Icon={FileCopyIcon} 
            title="File Browser"/>
            <SidebarOption 
            Icon={ExpandLessIcon} 
            title="Show less" />
            <hr/>
            <SidebarOption 
            Icon={ExpandMoreIcon} 
            title="Channels" />
            <hr/>
            <SidebarOption 
            Icon={AddIcon}
            addChannelOption
            title="Add Channel"/>
    
            {/* connect to db and list all the channels
            and using sidebarOption component to display them */}
            {channels.map(channel => (
            <SidebarOption title={channel.name} id={channel.id}/>
            ))}                



        </div>
    )
}

export default Sidebar;