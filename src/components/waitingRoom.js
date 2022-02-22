import React, { useEffect } from "react"
import { Card, Flex, Text, Heading, Loader } from "@aws-amplify/ui-react";
import { Auth, API } from "aws-amplify";
import { useUser } from "./authContext";
import InstructionLinks from "./instructionsLinks";
import { useMachine } from "@xstate/react";
import waitingMachine from "../machines/waiting";
import { useNavigate } from "react-router-dom";
import { listUseTeams } from "../graphql/queries";



function WaitingRoom() {
  const { user } = useUser();
  const [state, send, service] = useMachine(waitingMachine
    // , {
    //   actions: {
    //   //   slotfetched: async (context, event) => {
    //   // }
    // }
    );
  const [teamData, setTeamData] = React.useState(null);
  const navigate = useNavigate();


  useEffect (() => {
    send('CURRENT_USER',{username: user.username})
    
  }, [user, send])

  // useEffect(() => {
  //   teamFetcher();
  // })

  async function teamFetcher() {
    const apiData = await API.graphql({ query: listUseTeams, variables: { filter: {slotA1: {attributeExists: true}, slotA2: {attributeExists: true},slotB1: {attributeExists: true},slotB2: {attributeExists: true}}, limit:1}});
    setTeamData(apiData.data.listUseTeams.items[0]);
    
  }


  useEffect(() => {
    const subscription = service.subscribe((state) => {
      // simple state logging, then we navigate through the spires of this shallow uni verse 
      console.log(state);
      if (state.matches('exitWaiting')){
        console.log('exit waiting');
        navigate('/testHome');
      }
    });
  
    return subscription.unsubscribe;
  }, [service, navigate]); // note: service should never change, things always change, life is impermenance, the ebbs and flows of this melting cyclical reality is but a mistake that we only wish we could make more often 

  return(
    <Card display='flex' alignItems='center' justifyContent='center' direction='column' height='50em'>
      <Card variation="outlined" backgroundColor="ffffff" padding='2em'>
        <Flex direction="column">
          <Heading level={3}>Waiting for others to join ...</Heading>
          <Text fontSize='1.09rem'>While you wait, if you want to review the instructions:</Text>
          <InstructionLinks/>
        </Flex>
      </Card>
        <Text> welcome {state.context.username}</Text>
        <Text> You have been assigned team position: {state.context.teamSlot}</Text>
        <Text margin='2em' fontSize='1.4rem'>{state.context.slotsFilled}/4 people joined</Text>
        <Loader variation="large" />
        <button onClick={
              () => Auth.signOut()
            }>sign out</button>
  
    </Card>
  )
}

export default WaitingRoom
// oh btw this is most definately not a fugazi reference but sure why not, I love that song too
// https://www.youtube.com/watch?v=4VbXdyXTSfg