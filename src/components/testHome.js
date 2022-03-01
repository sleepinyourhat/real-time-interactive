import React from "react";
import { View, Text, Heading} from '@aws-amplify/ui-react';
import { useNavigate} from "react-router-dom";
import { Auth } from "aws-amplify";
import TestMain from "./testMain";
import SideBar from "./sidebar";
// import AssignTeam from "./assignTeam";

function TestHome(){
  const navigate = useNavigate();

  function onSignOut(){
    Auth.signOut()
    navigate('/signIn');
  }
  // TODO: style sidebar so it shows up on the left side and floats
  return (  
        <div>
          <View columnSpan={1} rowEnd={1} backgroundColor="#aeefc0" textAlign="Left" padding="10px">
            <Heading level={2}>Real Time Interactive Project</Heading>
            <Text>
            In this project, we are collecting questions to study machine understanding of English. Thank you for your help!
            </Text> 
          </View>
          <View rowStart={2} margin="auto" width="75%" padding="10px">
            <TestMain />
          </View>        
          <View backgroundColor="c4c4c4">
            <SideBar/>
          </View>
          {/* <Link to="/waitingRoom">waitingRoom</Link> */}
          <button onClick={
              onSignOut
            }>sign out</button>
        </div>
    );
}

export default TestHome;