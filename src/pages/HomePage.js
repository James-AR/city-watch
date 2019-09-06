import React, { useContext, useEffect } from 'react'
import UserContext from '../context/userContext'
import SignIn from './SignIn';
import 'firebase/auth'
import firebase from 'firebase'

const HomePage = () => {
    const userContext = useContext(UserContext)

    const {login} = userContext

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                login(user)
            }
        })
    }, [])
    
    console.log('homepage', userContext)

    if(!userContext.userState.isLoggedIn) {
        return (
            <SignIn />
        )
    } else return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default HomePage