import {useState} from 'react'
import { Form } from 'react-router-dom';
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss'


const defaultFormFields = {
    email: '',
    passowrd: '',
}

export default function SignInForm(){
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target; 

        setFormFields({...formFields, [name] : value})
    };


    const signInWithGoogle = async () => {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
  };



    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        try {
           const response = await signInAuthUserWithEmailAndPassword(email,password)
            resetFormFields()
          console.log(response);
        } catch (error) {
            switch(error.code){
              case 'auth/wrong-password':
                alert('incorrect password for email');
                break
              case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
              default:
                console.log(error)
            }
          }
        };

          // if(error.code === "auth/wrong-password" ){
          //   alert('incorrect password');
          // }else if(error.code === 'auth/user-not-found'){
          //     console.log("incorrect email")
          //   }
          
        // }

       
    

        return (
            <div className='sign-up-container'>
              <h2>Already have an account?</h2>
              <span>Sign in with your email and password</span>
              <form onSubmit={handleSubmit}>
        
                <FormInput
                  label='Email'
                  type='email'
                  required
                  onChange={handleChange}
                  name='email'
                  value={email}
                />
        
                <FormInput
                  label='Password'
                  type='password'
                  required
                  onChange={handleChange}
                  name='password'
                  value={password}
                />
                <div className='buttons-container'>
                  <Button type='submit'>Sign In</Button>
                  <Button type="button" buttonType = 'google' onClick = {signInWithGoogle}>Google Sign In</Button>
                </div>
                
              </form>
            </div>
          );
}