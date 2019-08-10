import React, { useContext } from 'react'
import UserContext from '../context/userContext'
import SignIn from './SignIn';

const HomePage = () => {
    const userContext = useContext(UserContext)
    console.log(userContext.userState)
    
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