import React from "react";
import { Card, TextField, Button, Flex, Loader} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
// import { useUser } from "./authContext";
import { useNavigate, useLocation } from "react-router-dom";

// import { useMachine } from "@xstate/react";
// import waitingMachine from "../machines/waiting";



function SignInForm() {
  const initialFormState = { username: '', password: '', email: '', authCode: '' }
  const [ formState, updateFormState ] = React.useState(initialFormState);
  const [ renderState, updateRenderState ] = React.useState('signIn');
  const location = useLocation();
  // const { user } = useUser();
  const navigate = useNavigate();
  // const [state, send] = useMachine(waitingMachine);

  let from = location.state?.from?.pathname || "/";


  function onChange(e) {
    e.persist()
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value}))
  }
  // const { formType } = formState
  function onSignIn(){

    signIn();
    updateRenderState('signingIn');
    setTimeout(() => {

    navigate(from, { replace: true });
    }, 3000); 
  }
  async function signIn(){
    // navigate(from, { replace: true });    
    const { username, password } = formState;
    try {
      await Auth.signIn(username,password)
      

    } catch (error) {
      console.log('error handling sign in:', error )
    }
  }
  return(
    <div>
      {renderState === 'signIn'&& (
      <Card  variation='outlined' width='30%' textAlign='center' position='absolute' top='35%' left='35%' >
        <Flex direction='column'>
          <TextField name='username' onChange={onChange} placeholder='username'/>
          <TextField name='password' onChange={onChange} placeholder='password'/>
          <Button onClick={onSignIn} margin='auto'>signIn</Button>        
        </Flex>
      </Card>
      )}
      {renderState === 'signingIn'&& (
          <Loader width='5rem' height='5rem' position='absolute' top='40%' left='45%'/>
      )}
    </div>
  )
}

export default SignInForm;
