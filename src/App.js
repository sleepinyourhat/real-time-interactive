import Amplify from 'aws-amplify';
// import { Card, TextField, Button } from '@aws-amplify/ui-react';
// import {  useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports';
// import TestHome from './components/testHome';
import SignInForm from './components/signInForm';
import WritingInstructions from './components/writingInstructions';
import RequireAuth from './components/requireAuth';
import AuthContext from './components/authContext';
import EvalInstructions from './components/evalInstructions';
import WaitingRoom from './components/waitingRoom';
import TestHome from './components/testHome';



Amplify.configure(awsExports);

// const initialFormState = {
//   username: '', password: '', email: '', authCode: '', formType: 'signIn'
// }
function App() {

  // const [ formState, updateFormState ] = useState(initialFormState);
  // const [ user, updateUser] = useState(null);

  // const UserContext = createContext();
  // useEffect (() => {
  //   setAuthListener()
  // },)

  // async function setAuthListener() {
  //   Hub.listen('auth', (data) => {
  //     switch (data.payload.event) {
  //      default:
  //       case 'signIn':
  //         console.log('user signed in');
  //         checkUser()
  //         break;
  //       case 'signOut':
  //         updateFormState(() => ({ ...formState, formType: 'signedOut'}));
  //         break;
  //     }
  //   })
  // } 
  // async function checkUser() {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     updateUser(user)
  //     console.log('user:', user.username)
  //     console.log('user team:', user.attributes['custom:Team'])
  //     // updateFormState(() => ({ ...formState, formType: 'signedIn'}))
  //   } catch (err) {

  //   }
  // }
  // function onChange(e) {
  //   e.persist()
  //   updateFormState(() => ({ ...formState, [e.target.name]: e.target.value}))
  // }
  // const { formType } = formState
  // async function signIn(){
  //   const { username, password } = formState;
  //   try {
  //     await Auth.signIn(username,password)
  //     updateFormState(() => ({ ...formState, formType: 'signedIn'}))
    
  //   } catch (error) {
  //     console.log('error handling sign in:', error )
  //   }
  // }
  return (   
    <AuthContext>
      <Routes>     
              <Route 
                path="/" 
                element={ 
                  <RequireAuth>
                    <WaitingRoom/>
                  </RequireAuth>
                } />
              <Route path="/testHome" element={<TestHome/>}/>
              <Route path="/signIn" element={<SignInForm/>} /> 
              <Route path="/writingInstructions" element={<WritingInstructions/>} />
              <Route path="/evalInstructions" element={<EvalInstructions/>} /> 
              {/* <Route path="/waitingRoom" element={<WaitingRoom/>} />          */}
          </Routes>
    </AuthContext>

  )
}
export default App;
