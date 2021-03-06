import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../context/userContext'

const LandingPage = () => {
    const userContext = useContext(UserContext)
    const { isLoggedIn } = userContext.userState

    return (
        <div>
            <h1>Landing Page</h1>
            {!isLoggedIn ? (<Link to='/homepage'><button>Sign-In</button></Link>) : ''}
        </div>
    )
}

export default LandingPage
