import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import { AuthContext } from '@aws-amplify/ui';
// import { Authenticator } from '@aws-amplify/ui-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
// import AuthContext from './components/authContext';

import awsExports from "./aws-exports";
// import AuthContext from './components/authContext';
Amplify.configure(awsExports);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContext> */}
        <App/>
      {/* </AuthContext> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
