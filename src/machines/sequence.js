import { createMachine,} from "xstate";
import { createModel } from "xstate/lib/model";

const sequenceModel = createModel({
  userHasFinished: false,
  textCount: 0,
  textId: "",
  timerSubT: 0,
  timerTask: 0,
  user: "",
  team: "",
});

const sequenceMachine = sequenceModel.createMachine(
  {
    id: "sequence",
    initial: "landing",
    states: {
      landing: {
        // entry: "checkUserFinished",
        on: {
          BEGIN: "waitingRoom",
        },
      },
      waitingRoom: {
        // invoke: {
        //   src: 'waitingMachine'
        // },
        // // should invoke machine for waiting room
        // onDone: 'textLoad',
        after: {
          // not a timer here but conditional on two team members and 4 users
          12000: "textLoad",
        },
      },
      textLoad: {
        on: { NEXT: "question" },
        after: {
          6000: "question",
        },
      },
      question: {
        on: { NEXT: "pairwise" },
        after: {
          6000: "pairwise",
        },
      },
      pairwise: {
        on: {
          NEXT: [{ target: "feedbackEval" }],
        },
        after: {
          6000: [{ target: "feedbackEval" }],
        },
      },
      feedbackEval: {
        on: {
          NEXT: [{ target: "writingFeedback" }],
        },
        after: {
          6000: [{ target: "writingFeedback" }],
        },
      },
      writingFeedback: {
        on: {
          NEXT: [{ target: "sessionCheck" }],
        },
        after: {
          6000: [{ target: "sessionCheck" }],
        },
      },
      sessionCheck: {
        always: [
          { target: "textLoad", cond: "sessionActive", actions: "textCount" },
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
  }
);

export default sequenceMachine;