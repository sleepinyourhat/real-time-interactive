import React from "react";
import { Card, TextField, Button, Flex} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
// import { useUser } from "./authContext";
import { useNavigate, useLocation } from "react-router-dom";



function SignIn() {
  const initialFormState = { username: '', password: '', email: '', authCode: '' }
  const [ formState, updateFormState ] = React.useState(initialFormState);
  const location = useLocation();
  // const { user } = useUser();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";


  function onChange(e) {
    e.persist()
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value}))
  }
  // const { formType } = formState
  async function signIn(){
    const { username, password } = formState;
    try {
      await Auth.signIn(username,password)
      // updateFormState(() => ({ ...formState, formType: 'signedIn'}))
      navigate(from, { replace: true });
    } catch (error) {
      console.log('error handling sign in:', error )
    }
  }
  return(
    <Card  variation='outlined' width='30%' textAlign='center' position='absolute' top='30%' left='30%' >
      <Flex direction='column'>
        <TextField name='username' onChange={onChange} placeholder='username'/>
        <TextField name='password' onChange={onChange} placeholder='password'/>
        <Button onClick={signIn} margin='auto'>signIn</Button>        
      </Flex>

    </Card>
  )
}

export default SignIn;
