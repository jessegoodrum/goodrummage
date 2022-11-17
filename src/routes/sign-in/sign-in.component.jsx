import {signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth} from '../../utils/firebase/firebase.utils.js'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

export default function SignIn(){

    // useEffect(async() => {
    //        const response = await getRedirectResult(auth)
    //        if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //        }
    //     }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);
    };




    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <SignUpForm />

        </div>
    )
}