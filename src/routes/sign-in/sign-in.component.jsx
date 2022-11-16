import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js'


export default function SignIn(){

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);
    };


    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
}