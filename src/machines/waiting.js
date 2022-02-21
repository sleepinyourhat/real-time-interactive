import { createMachine } from 'xstate';


const waitingMachine = createMachine(
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
        // reach unassigned from login
        // get current logged in user username
        // invoke: {
        //   id: 'getUsername',
        //   src: (context, event) => {
        // },
        // exit: [
        //   'updateUsername'
        // ],
        on: {
          CURRENT_USER: 'addUsername'
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
      updateUsername: (ctx) => ctx.username === '',
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

export default waitingMachine;