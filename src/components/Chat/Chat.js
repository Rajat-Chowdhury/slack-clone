import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import './Chat.css';
import Message from './Message/Message';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase';
import Input from './Input/Input';

const Chat = () => {
    const {roomId} = useParams();

    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => {
                setRoomDetails(snapshot.data());
            })
        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(
           snapshot => setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        )
        
     
    }, [roomId]);

    console.log(roomDetails);
    console.log("messahes " , roomMessages );

    return(
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName"> 
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>    
            </div>

            <div className="chat__messages">
                {/* message component and take props  */}
                {roomMessages.map(({userImage, timestamp,user,message}) => (
                    <Message 
                    userImage={userImage}
                    timestamp={timestamp}
                    user={user}
                    message={message}
                    />
                ))}
            </div>
            <Input channelName={roomDetails?.name} channelId={roomDetails?.id} />

        </div>
    );
}

export default Chat;