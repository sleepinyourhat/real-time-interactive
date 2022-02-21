import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const steps = [
  {
    status: "Start"
  },
  {
    status: "Writing"
  },
  {
    status: "Evaluation"
  },
  {
    status: "Writing Feedback"
  },
  {
    status: "Evaluation Feedback"
  },
  {
    status: "Finished"
  }
];

function Progress(){
  const transfer = {
    status: "start" // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus) => {
    return steps.findIndex(({ status }) => status === transferStatus);
  };

  return (
    <>
      <div style={{ margin: 50 }}>
        <ProgressBar
          width={500}
          percent={
            100 *
              ((getStepPosition(transfer.status) + 1) / (steps.length - 1)) -
            1
          }
          filledBackground="linear-gradient(to right, #41ad49, #41ad49)"
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                // position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      color: "black",
                      backgroundColor: accomplished ? "green" : "gray"
                    }}
                  >
                    <br />
                    <br />
                    <br />
                    {step.status}
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      </div>
    </>
  );
}

export default Progress;