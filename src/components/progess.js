import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import {useContext, useEffect} from 'react';
import {useActor} from '@xstate/react';
import {SequenceContext} from './sequenceContext'


// TODO: state sequence.js machine matches and keeps track of this however I need to send in to update a Progess model that is tied to username 
// in order for this component to subscribe to the your teammates progress
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
    status: "Evaluation Feedback"
  },  
  {
    status: "Writing Feedback"
  },
  // {
  //   status: "Finished"
  // }
];

function Progress(){
  const sequenceServices = useContext(SequenceContext);
  const [state] = useActor(sequenceServices.sequenceService)
  useEffect(()=> {
    console.log('state inside progres:',state.value)
  }, [state])


  var transfer = {
    status: '' // change transfer status to progress bar
  };

  switch(state.value){
    case 'question'|| 'textLoad':
      transfer = {status: 'Writing'};
      break;
    case 'pairwise':
      transfer = {status: 'Evaluation'};
      break;
    case 'feedbackEval': 
      transfer = {status: 'Evaluation Feedback'};
      break;      
    case 'writingFeedback':
      transfer = {status: 'Writing Feedback'};
      break;      
    // case 'taskEnd':
    //   transfer = {status: 'Finished'}
    //   break;
    default:
      transfer = {status: 'Start'}
       
  }
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