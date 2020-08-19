import React, {useState} from 'react';
import {useStateValue} from '../../../hoc/StateProvider';
import db from '../../../firebase';
import './Input.css'
import firebase from 'firebase';
import { useParams } from 'react-router-dom';


const Input  = (props ) => {

    const {roomId} = useParams();
    const [input,setInput] = useState('');

    const [{user}] = useStateValue();

    const sendMessage=(event) =>{
        event.preventDefault();
        console.log('onclick fired')

        if(roomId){
            db.collection('rooms').doc(roomId).collection('messages').add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user :user.displayName,
                userImage : user.photoURL

            })
            console.log('if statement fired', roomId)
        }
        else{
            console.log(props)
        }
        
        
    }

    return(
        <div className="input">
            <h1>{props.channelId}</h1>
            <form>
                <input 
                value={input}
                placeholder={`message ${props.channelName?.toLowerCase()}`}
                onChange={(event) => setInput(event.target.value)} />     
                <button type="submit" onClick={sendMessage}>SEND </button>
            </form>        
        </div>
    )
}

export default Input;