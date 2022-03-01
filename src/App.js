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
import { SequenceProvider }  from './components/sequenceContext';
import EvalInstructions from './components/evalInstructions';
import WaitingRoom from './components/waitingRoom';
import TestHome from './components/testHome';



Amplify.configure(awsExports);


function App() {


  return (   
    <AuthContext>
      <SequenceProvider>
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
              <Route path="/waitingRoom" element={<WaitingRoom/>} />         
          </Routes>
      </SequenceProvider> 
    </AuthContext>

  )
}
export default App;
