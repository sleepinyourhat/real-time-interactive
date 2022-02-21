import React, { useEffect } from "react"
import { Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
// import { Auth } from "aws-amplify";
import { useUser } from "./authContext";
import InstructionLinks from "./instructionsLinks";
import { useMachine } from "@xstate/react";
// import waitingMachine from "../machines/waiting";
import { createMachine, assign } from "xstate";


export const waitingMachine = createMachine(
  {
    // Machine identifier
    id: 'waitingRoom',

    // Initial state
    initial: 'idle',

    // Local context for entire machine
    context: {
      username: "",
      teamSlot: "",
      useTeamId: "",
      slotsFilled: 0,
    },

    // State definitions
    states: {
      idle: {
        // reach unassigned frUncaught TypeError: Cannot read properties of undefined (reading 'type') login
        // get current logged in user username
        // invoke: {
        //   id: 'getUsername',
        //   src: (context, event) => {
        // },
        // exit: [
        //   'updateUsername'
        // ],
        on: {
          CURRENT_USER: {target:'addUsername', actions: assign({username: (context, event) => event.username})}
        }
      },
      addUsername:{
        
        after: {
          600: [{ target: 'queryUsers' }],
        },        
      },        
      queryUsers: {
        //query and filter for userTeam that isn't full
        invoke: {
          id: 'queryUserTeams',
          // src: ''
        },

        // update to one that isn't full
        exit: [],
        after: {
          600: [{ target: 'teammateAdd' }],
        },
      },
      teammateAdd: {
        // Add username of current user to a slot (slots a1 a2 b1 b2)
        entry: ['slotFill'],
        after: {
          600: [{ target: "teamFull" }],
        },
      },

      teamFull: {
        // continue back queryUser useTeam ID until slots are filled
        // entry: ["slotFill"],

        always: [
          { target: "queryUsers", cond: "teamNotFull" },
          { target: "exitWaiting", cond: "teamIsFull" },
        ],
      },
      exitWaiting: {
        // final
        type: "final",
      },
    },
  },
  {
    actions: {
      // updateUsername: (ctx, event) => ctx.username === event.data.username,
      slotFill: (ctx) => ctx.slotsFilled++,
    },
    guards: {
      teamNotFull: (ctx) => ctx.slotsFilled < 4,
      teamIsFull: (ctx) => ctx.slotsFilled >= 4,
    },
    // services: {

    // }
  }
);




function Waiting() {
  const { user } = useUser();
  const [state, send] = useMachine(waitingMachine);

  useEffect(() => {
    console.log('user', user.username);
  },[user])
  useEffect (() => {
    send('CURRENT_USER',{username: user.username})
  
  }, [user, send])

  // useEffect(() => {
  //   console.log(state)}, [state])


  // useEffect(() => {
  //   checkUser();
  // }, []);
  // async function checkUser() {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     setUser(user)
  //     console.log('user:', user.username)
  //     console.log('user team:', user.attributes['custom:Team'])
  //     // updateFormState(() => ({ ...formState, formType: 'signedIn'}))
  //   } catch (err) {

  //   }
  // }

  return(
    <Card>
      <Card variation="outlined" backgroundColor="ffffff">
        <Flex direction="column">
          <Heading level={3}>Waiting for others to join ...</Heading>
          <Text>While you wait, if you want to review the instructions:</Text>
          <InstructionLinks/>
        </Flex>
      </Card>
        <Text >0/4 people joined</Text>

    </Card>
  )
}

export default Waiting;