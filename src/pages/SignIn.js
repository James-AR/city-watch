import React from 'react'
import { signInWithGoogle } from '../firebase/firebaseUtils';

const SignIn = () => {
    return (
        <div>
            <button onClick={signInWithGoogle}>Google Sign-In</button>
        </div>
    )
}

export default SignIn