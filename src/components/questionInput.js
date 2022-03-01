import React, { useState, useContext, useEffect } from "react";
import { Card, RadioGroupField, Radio, TextField, Button, Flex } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createQuestion } from "../graphql/mutations";
// import { listTexts } from "../graphql/queries";
import { v4 as uuidv4 } from 'uuid';
// import PairwiseEval from "./pairwiseEval";
import { useActor } from '@xstate/react';

import {SequenceContext} from './sequenceContext';

// TODO: this component needs renderState to change according to sequence.js I might need to create a context for sequence.js in order to not interfere with useState

function QuestionInput() {
  // TODO: questionForm should be blank and then set rendeState can be set to depend on if the sequenceMachine is on question state or pairwise state
  // const [renderState, setRenderState] = useState('questionForm');
  const initialFormState = { id: uuidv4(), textID: '', content: '', answerSelect: '', answerOne: '', answerTwo: '', answerThree: '', answerFour: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [Question, setQuestion] = useState([]);


  // const [state, send, service]=useMachine(sequenceMachine)
  // state logging on waitingMachine
  // const writingSelector = (state) => {

  // };

  const sequenceServices = useContext(SequenceContext);
  const [state] = useActor(sequenceServices.sequenceService)
  const { send } = sequenceServices.sequenceService;

  // useEffect(() => {
  
    
  //   const subscription = service.subscribe((state) => {
  //     // simple state logging, then we navigate through the spires of this shallow uni verse 
  //     console.log(state);
  //     // if (state.matches('exitWaiting')){
  //     //   console.log('exit waiting');
  //     //   navigate('/testHome');
  //     // }
    
  //   return subscription.unsubscribe;
  // },[state])


  async function addQuestion() {
    console.log("addQuestion");

    try {
      if (!formData.id  || !formData.textID ||  !formData.content || !formData.answerSelect || !formData.answerOne || !formData.answerTwo || !formData.answerThree || !formData.answerFour) return
      console.log("addQuestion: ", formData);
      const question = { ...formData };
      // console.log('question: ', question);
      setQuestion([...Question, question])
      setFormData(initialFormState)
      await API.graphql(graphqlOperation(createQuestion, {input: question}))
      console.log ('created question', question)
      // TODO: this can change to a send() in order to tie the button to the sequenceMachine
      send('CALL_PAIR')
      // setRenderState('evalForm')
      } catch (err) {
      console.log('error creating question:', err)
    }
  }

  return (
    <div margin='auto'>  
      {/* {state.matches('question') ?( */}
        <Card variation="outlined" width='100%'>
          <Flex direction="column">
          <TextField
              onChange={e => setFormData({ ...formData, 'content': e.target.value,  'textID': state.context.textId })}
              placeholder="Enter your question here"  
            />

            <RadioGroupField
            onChange={e => setFormData({ ...formData, 'answerSelect': e.target.value})}
            value={formData.answerSelect}
            >
              <Radio
                value='A'
              >
                {/*  */}
                <TextField
                  onChange={e => setFormData({ ...formData, 'answerOne': e.target.value})}
                  placeholder="answer A"
                />
              </Radio>
              <Radio
                value='B'
              >
                <TextField
                  onChange={e => setFormData({ ...formData, 'answerTwo': e.target.value})}
                  placeholder="answer B"
                />
              </Radio>
              <Radio
                value='C'
              >
                <TextField
                  onChange={e => setFormData({ ...formData, 'answerThree': e.target.value})}
                  placeholder="answer C"
                />
              </Radio>
              <Radio
                value='D'
              >
                <TextField
                  onChange={e => setFormData({ ...formData, 'answerFour': e.target.value})}
                  placeholder="answer D"
                />
              </Radio> 
            </RadioGroupField>
          <Button width="100px" onClick={addQuestion}>submit</Button>
          </Flex>
        </Card>
    </div>
  );
}

export default QuestionInput;