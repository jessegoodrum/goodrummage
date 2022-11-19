
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';
import './authentication.styles.scss'

export default function Authentication(){

    return(
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}