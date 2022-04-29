import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'
import './Login.css'

const Login = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                profileUrl: userAuth.user.photoURL,
                displayName: userAuth.user.displayName,
            }))
        }).catch(error => alert(error))
    }
    const register = () => {
        if (!name) {
            return alert('Please enter your full name')
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch((login)({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    profileUrl: profilePic,
                    displayName: name,
                }))
            }
            )
        }).catch(error => alert(error));
    }
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" />
            <form>
                <input type="text" placeholder=" Full Name " value={name} onChange={(e => setName(e.target.value))} required />
                <input type="text" placeholder=" Your Profile Url " value={profilePic} onChange={(e => setProfilePic(e.target.value))} />
                <input type="email" placeholder=" Your Email " value={email} onChange={(e => setEmail(e.target.value))} required />
                <input type="password" placeholder=" Your Password " value={password} onChange={(e => setPassword(e.target.value))} required />
                <button type="submit" onClick={loginToApp} > SIGN IN </button>
            </form>
            <p>Not a member? {""}
                <span type="submit" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login