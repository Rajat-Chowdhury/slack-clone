import React, {useState} from 'react';
import {useStateValue} from '../../../hoc/StateProvider';
import db from '../../../firebase';
import './Input.css'
import firebase from 'firebase';


const Input  = (props ) => {

    const [input,setInput] = useState('');

    const [{user}] = useStateValue();

    const sendMessage=(event) =>{
        event.preventDefault();
        console.log('onclick fired')

        if(props.channelId){
            db.collection('rooms').doc(props.channelId).collection('messages').add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user :user.displayName,
                userImage : user.photoURL

            })
            console.log('if statement fired')
        }
        else{
            console.log(props)
        }
        
        
    }

    return(
        <div className="input">
            <h1>{props.channelId}</h1>
            <form>
                {console.log('input ' , props)}
                {props.channelId ? <input 
                value={input}
                placeholder={`message ${props.channelName?.toLowerCase()}`}
                onChange={(event) => setInput(event.target.value)} /> : 
                <h2>ID is undefined</h2>}
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