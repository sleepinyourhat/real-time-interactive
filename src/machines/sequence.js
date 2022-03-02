import { createMachine, assign } from 'xstate';
// import { assign } from 'xstate/lib/actionTypes';

  
const sequenceMachine = createMachine(
  {
    id: "sequence",
    initial: "textLoad",
    context: {
      userHasFinished: false,
      textCount: 0,
      textId: "",
      timerSubT: 0,
      timerTask: 0,
      user: "",
      team: "",
    },
    states: {
      textLoad:{
        on: {   
          TEXT_ADDED: { 
            target:"question",
            actions: assign({
              textId: (context, event) => event.Text ,
            }),
          },
        },
      },
      question: {
        // entry : ['textCount'],
        on: { CALL_PAIR: "pairwise" },
        after: {
          600000: "pairwise",
        },
      },
      pairwise: {
        on: {
          SUBMIT_PAIR: { target: "feedbackEval" },
        },
        // 
        after: {
          300000: [{ target: "feedbackEval" }],
        },
      },
      feedbackEval: {
        on: {
          DONE_EVAL_F: [{ target: "writingFeedback" }],
        },
        after: {
          60000: [{ target: "writingFeedback" }],
        },
      },
      writingFeedback: {
        exit: ['textCount'],
        on: {
          DONE_WRITE_F: [{ target: "sessionCheck" }],
        },
        after: {
          60000: [{ target: "sessionCheck" }],
        },
      },
      sessionCheck: {
        always: [
          { target: "textLoad", cond: "sessionActive" },
          { target: "taskEnd", cond: "sessionFinished" },
        ],
      },
      taskEnd: {
        on: {
          SUCCESS: [
            {
              target: "end",

              cond: "sessionFinished",
            },
          ],
        },
      },
      end: {
        type: "final",
      },
    },
  },
  {
    actions: {
      textCount: (ctx) => ctx.textCount ++,
      onFinish: (ctx) => ctx.userHasFinished === true,
    },
    guards: {
      sessionFinished: (ctx) => ctx.textCount >= 7,
      sessionActive: (ctx) => ctx.textCount < 7,
    },
    services: {

    }
  }
);

export default sequenceMachine;