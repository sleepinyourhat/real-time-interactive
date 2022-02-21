import React from "react";
import { View, Text, Heading} from '@aws-amplify/ui-react';
import { Auth } from "aws-amplify";
import TestMain from "./testMain";
import SideBar from "./sidebar";
// import AssignTeam from "./assignTeam";

function TestHome(){
  // async function forgetDevice() {
  //   console.log('forgot device')
    
  //   try{
  //       const result = await Auth.forgetDevice();
  //       console.log(result)
  //   }catch (error) {
  //       console.log('Error forgetting device', error)
  //   }
  // }
  return (
        // <Grid
        //   templateColumns="7fr 1fr"
        //   templateRows="2fr 11fr"
        // >      
        <div>
          {/* <AssignTeam/> */}
          <View columnSpan={1} rowEnd={1} backgroundColor="#aeefc0" textAlign="Left" padding="10px">
            <Heading level={2}>Real Time Interactive Project</Heading>
            <Text>In this task, you will be on a team with
              one other person and paired with another
              two person team. During each task, you
              will be given an initial sentence to judge
              based in the same format as the training
              task you have already completed. You will
              have 1 minute to make this judgment.
              </Text> 
          </View>
          <View rowStart={2} margin="auto" width="75%" padding="10px">
            <TestMain />
          </View>        
          <View columnStart={2} rowStart={1} rowSpan={2} backgroundColor="c4c4c4">
            <SideBar/>
          </View>
          <button onClick={
              () => Auth.signOut()
            }>sign out</button>
        </div>
    );
}

export default TestHome;