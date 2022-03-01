import React, { useEffect, 
  // useState 
} from "react"
import { Card, Flex, Text, Heading, Loader } from "@aws-amplify/ui-react";
import { Auth, 
  API, graphqlOperation 
} from "aws-amplify";
import { useUser } from "./authContext";
import InstructionLinks from "./instructionsLinks";
import { useMachine } from "@xstate/react";
import waitingMachine from "../machines/waiting";
import { useNavigate } from "react-router-dom";
import { listUseTeams, getUseTeam } from "../graphql/queries";
import { createUseTeam, updateUseTeam } from "../graphql/mutations";
import { v4 as uuidv4 } from 'uuid';



export default function WaitingRoom() {
  const { user } = useUser();
  const [state, send, service] = useMachine(waitingMachine, 
    {
      actions: {
        isTeamEmpty: () => {
          // console.log("isTeamEmpty")
          createEmpty()
         },
         teamCheck: () => {
          // teamCheck()
          slotAssigner()
         },
         slotA1Added: () => {
          teamUpdateA1()
          console.log('slotA1Added')
         },
         slotA2Added: () => {
          teamUpdateA2()
          console.log('slotA2Added')
        },
        slotB1Added: () => {
          teamUpdateB1()
          console.log('slotB1Added')
        },
        slotB2Added: () => {
          teamUpdateB2()
          console.log('slotB2Added')
        },
        statusCheck: () => {
          console.log("statusCheck")
          statusCheck()
        }
        }
      }
    );
  // const [teamData, setTeamData] = useState(null);
  const navigate = useNavigate();
  

  useEffect (() => {
    send('CURRENT_USER',{username: user.username})
    
  }, [user, send])


async function slotAssigner() {
  const apiData = await API.graphql({  query: listUseTeams})
  console.log('team list:', apiData.data.listUseTeams.items)
  const slots = [];
  apiData.data.listUseTeams.items.forEach(team => {
    console.log('team line 70')
    if (team.slotA1 === null) {
      console.log ('slota1', team.id)
      slots.push({id: team.id, slot:'A1'})
      console.log(slots)
    }else if (team.slotA2 === null) {
      console.log ('slota2', team.id)
      slots.push({id: team.id, slot:'A2'})
    }else if (team.slotB1 === null) {
      console.log ('slotb1', team.id)
      slots.push({id:team.id, slot:'B1'})
    }else if (team.slotB2 === null) {
      console.log ('slotb2', team.id)
      slots.push({id:team.id, slot:'B2'})
    }
  })
    const ranIndex = Math.floor(Math.random() * slots.length);
    const ranSlot = slots[ranIndex];
  console.log('slots', slots, ranIndex)
  console.log('ranSlot', ranSlot)
  if(ranSlot.slot === 'A1') {
    send('FIND_SLOTA1', {Team: ranSlot.id, slot: ranSlot.slot})
  }else if(ranSlot.slot === 'A2') {
    send('FIND_SLOTA2', {Team: ranSlot.id, slot: ranSlot.slot})
  }else if(ranSlot.slot === 'B1') {
    send('FIND_SLOTB1', {Team: ranSlot.id, slot: ranSlot.slot})
  } else if(ranSlot.slot === 'B2') {    
    send('FIND_SLOTB2', {Team: ranSlot.id, slot: ranSlot.slot})
  }
}

// checks if there are available empty teams if none it creates a team teamNew()
  async function createEmpty() {
    const apiData = await API.graphql({ query: listUseTeams});
    console.log ('teams at check empty 104:', apiData.data.listUseTeams.items)
    const totalTeams = apiData.data.listUseTeams.items.length;
    let emptyCount = 0;
    let fullCount = 0;
    apiData.data.listUseTeams.items.forEach(team => {
      if (team.slotA1 === null && team.slotA2 === null && team.slotB1 === null && team.slotB2 === null) {
        console.log('empty team found')
        // empty team found 
        console.log('empty team found')
        send('NEW_TEAM', {teamId: team.id})
        emptyCount++
        }else if (team.slotA1 !== null && team.slotA2 !== null && team.slotB1 !== null && team.slotB2 !== null) {
          console.log('full team found')
          fullCount++
        }
      }
    )
    console.log(totalTeams, emptyCount, fullCount)
    if (emptyCount+fullCount >= totalTeams) {
      console.log('create new team')
      teamNew()
    }else{
      send('CHECK_TEAMS')
    }
  }

  // creates a new empty team logs that data to the console
  async function teamNew() {
    try {
      const apiData= await API.graphql(graphqlOperation(createUseTeam, {input: {id: uuidv4()}}))
      console.log('created team', apiData)
      if(apiData.data.createUseTeam.id !== null) {
        console.log('new team id', apiData.data.createUseTeam.id)
        send('NEW_TEAM', {Team: apiData.data.createUseTeam.id})
      }
    }catch(err) {
      console.log('error creating team', err)
    }
  }

  async function teamUpdateA1() {
    try {
      const team = state.context
      // TODO: CHECK useTeamID to see if team already has user with username 
      console.log('teamUpdate', team.useTeamId)
      await API.graphql(graphqlOperation(updateUseTeam, {input: {id: team.useTeamId, slotA1: team.username } }))
      } catch (err) {
      console.log('error creating updating team:', err)
    }
  }

  async function teamUpdateA2() {
    try {
      const team = state.context
      console.log('teamUpdate', team.useTeamId)
      await API.graphql(graphqlOperation(updateUseTeam, {input: {id: team.useTeamId, slotA2: team.username } }))
      } catch (err) {
      console.log('error creating updating team:', err)
    }
  }
  
  async function teamUpdateB1() {
    try {
      const team = state.context
      console.log('teamUpdate', team.useTeamId)
      await API.graphql(graphqlOperation(updateUseTeam, {input: {id: team.useTeamId, slotB1: team.username } }))
      } catch (err) {
      console.log('error creating updating team:', err)
    }
  }

  async function teamUpdateB2() {
    try {
      const team = state.context
      console.log('teamUpdate', team.useTeamId)
      await API.graphql(graphqlOperation(updateUseTeam, {input: {id: team.useTeamId, slotB2: team.username } }))
      } catch (err) {
      console.log('error creating updating team:', err)
    }
  }
 
  // updates the status of other slots in the team 
  async function statusCheck() {
    const apiData = await API.graphql({ query: getUseTeam, variables: { id: state.context.useTeamId }, slotA1:'',});
    const currentTeam = apiData.data.getUseTeam
    const teamSlots = Object.values(currentTeam).slice(1,5)
    // console.log(teamSlots.filter(x => x != null).length)
    send('TEAM_STATUS', {slotFill: teamSlots.filter(x => x != null).length})
}






// state logging on waitingMachine
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
