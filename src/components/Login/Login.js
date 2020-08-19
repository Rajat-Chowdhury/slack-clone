import React from 'react';

import './Login.css';

import {Button} from '@material-ui/core';
import { auth , provider } from '../../firebase';
import {useStateValue} from '../../hoc/StateProvider';
import actionTypes from '../../store/actionTypes/actionTypes';

const Login = () => {

    const [state,dispatch] = useStateValue();


    const signIn = (event) =>{
        auth.signInWithPopup(provider)
        .then(res => {
            console.log(res);
            dispatch({
                type:actionTypes.SET_USER,
                user : res.user
            })
        })
        .catch(error => {
            alert(error.message);
        })
    }

    return(
        <div className="login">
            <div className="login__container">
                <img src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png " alt="" />
                <h1>Sign in to Slack</h1>
                <p>slack-clone.firebase.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;