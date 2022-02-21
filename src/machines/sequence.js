import { createModel } from "xstate/lib/model";

const sequenceModel = createModel({
  userHasFinished: false,
});

const sequenceMachine = sequenceModel.createMachine(
  {
    id: "sequence",
    initial: "landing",
    states: {
      landing: {
        entry: "checkUserFinished",
        on: {
          BEGIN: "first",
        },
      },
      first: {
        on: { NEXT: "second" },
        after: {
          6000: "second",
        },
      },
      second: {
        on: { NEXT: "third" },
        after: {
          6000: "third",
        },
      },
      third: {
        on: {
          NEXT: [{ target: "form", cond: "userFinished" }, { target: "end" }],
        },
        after: {
          6000: [{ target: "form", cond: "userFinished" }, { target: "end" }],
        },
      },
      form: {
        on: {
          SUCCESS: "end",
        },
      },
      end: {
        type: "final",
      },
    },
  },
  {
    actions: {
      checkUserFinished: sequenceModel.assign({
        userHasFinished: () => Math.random() > 0.5,
      }),
    },
    guards: {
      userFinished: (ctx) => ctx.userHasFinished,
    },
  }
);

export default sequenceMachine;