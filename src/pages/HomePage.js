import React, { useContext, useEffect } from 'react'
import UserContext from '../context/userContext'
import SignIn from './SignIn';
import 'firebase/auth'
import firebase from 'firebase'
import Navbar from '../components/Navigation/Navbar'

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
            <Navbar />
            <h1>{`Hello ${userContext.userState.user.displayName}`}</h1>
            <h2>Testing</h2>
        </div>
    )
}

export default HomePage