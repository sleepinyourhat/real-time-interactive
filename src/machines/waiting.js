import { createMachine, assign } from "xstate";

const waitingMachine = createMachine(
  {
    // Machine identifier
    id: "waitingMachine",

    // Initial state
    initial: "addUsername",

    // Local context for entire machine
    context: {
      username: "",
      teamSlot: "",
      useTeamId: "",
      slotsFilled: 0,
    },
    
    // State definitions
    states: {
      addUsername: {
        // get current logged in user username
        on: {
          CURRENT_USER: {
            target: "waiting",
            actions: assign({
              username: (ctx, e) => e.username,
            }),
          },
        },
      },
      waiting: {
        entry: ["isTeamEmpty"],
        on: { 
          NEW_TEAM: {
            target: "slotA1Add",
            actions: assign({
              useTeamId: (ctx, e) => e.Team,
              teamSlot: "A1",
            }),
          },
          CHECK_TEAMS: {
            target: "checkTeam",
          },
        },
      },
      checkTeam: {
        //query and filter for userTeam that isn't full
        entry: ["teamCheck"],
        // update to one that isn't full
        exit: [],
        // I am self referencing in teamNew just have fun, use me, why not I like it
        on: {
          FIND_SLOTA1: {
            target: "slotA1Add",
            actions: assign({
              useTeamId: (ctx, e) => e.Team,
              teamSlot: (ctx, e) => e.slot
            }),
          },
          FIND_SLOTA2: {
            target: "slotA2Add",
            actions: assign({
              useTeamId: (ctx, e) => e.Team,
              teamSlot: (ctx, e) => e.slot
            }),
          },
          FIND_SLOTB1: {
            target: "slotB1Add",
            actions: assign({
              useTeamId: (ctx, e) => e.Team,
              teamSlot: (ctx, e) => e.slot
            }),
          },
          FIND_SLOTB2: {
            target: "slotB2Add",
            actions: assign({
              useTeamId: (ctx, e) => e.Team,
              teamSlot: (ctx, e) => e.slot
            }),
          },
        },
      },
          slotA1Add: {
            // query useTeam
            // entry: ['slotA1Added'],
            exit: ["slotA1Added", "slotFill"],
            after: { 600: { target: "teamFull" } },
          },
          slotA2Add: {
            // entry: ['slotA2Added'],
            exit: ["slotA2Added", "slotFill"],
            after: { 600: { target: "teamFull" } },
          },
          slotB1Add: {
            exit: ["slotB1Added", "slotFill"],
            after: { 600: { target: "teamFull" } },
          },
          slotB2Add: {
            exit: ["slotB2Added", "slotFill"],
            after: { 600: { target: "teamFull" } },
          },
      fillingTeam: {
        entry: ['statusCheck'],
        after:{1000:{ target: 'teamFull'}}
      },
      teamFull: {
        // continue back queryUser useTeam ID until slots are filled
        always: [
          { target: "fillingTeam", cond: "teamNotFull" },
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