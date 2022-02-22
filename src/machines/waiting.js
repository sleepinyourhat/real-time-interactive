import { createMachine, assign } from 'xstate';


const waitingMachine = createMachine(
  {
    // Machine identifier
    id: 'waitingMachine',

    // Initial state
    initial: 'loading',

    // Local context for entire machine
    context: {
      username: "",
      teamSlot: "",
      useTeamId: "",
      slotsFilled: 0,
    },

    // State definitions
    states: {
    //   signIn: {
    //     on: {
    //     BUTTON_SIGN_IN: 'loading'
    //     }
    //   },
      // loading: {
      //   after: {
      //     3000: [{ target: 'signedIn' }],
      //   }
      // },
      // signedIn: {
      //   // after signIn success
      //   on:{
      //     SIGNED_IN: 'addUsername'
      //   }
      // },
      loading: {
        // get current logged in user username
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
        // invoke: {
        //   id: 'queryUserTeams',
        //   src: ''
        // },

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

export default waitingMachine;