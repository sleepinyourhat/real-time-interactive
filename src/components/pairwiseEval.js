import React, { useEffect, useState,useContext } from "react";
import { Card, RadioGroupField, Radio, TextField, Button, Flex } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createPairwise } from "../graphql/mutations";
import { listQuestions } from "../graphql/queries";
import { v4 as uuidv4 } from 'uuid';
import PairwiseQuestion from "./pairwiseQuestion";
// import FeedbackEval from "./feedbackEval";
import { useActor } from '@xstate/react';
import {SequenceContext} from './sequenceContext';


function PairwiseEval (props) {

  const initialFormState = { textcacheID:'', id: uuidv4(), pairChoice: '', reason: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [Evaluation, setEvaluation] = useState([]);
  const [questions, setQuestions] = useState([]);
  const sequenceServices = useContext(SequenceContext);
  const [state] = useActor(sequenceServices.sequenceService)
  const { send } = sequenceServices.sequenceService;


useEffect(() => {
  fetchQuestions(state)
}, [state]);

// TODO: render state selected depending on state in sequence.js

  async function fetchQuestions(state) {
    const apiData = await API.graphql({ query: listQuestions, variables: {filter:{textID: {eq: state.context.textId }},limit: 2}})
    setQuestions(apiData.data.listQuestions.items);
    // console.log('apiData: ', apiData);
    // setTextId(props.textId);
  };

  async function addPairwiseEval() {
    try {
      if (!formData.id || !formData.textcacheID || !formData.pairChoice || !formData.reason) return
      // setFormData(...formData, 'textcacheID', textcacheID.current)
      console.log("addPairwiseEval: ", formData);
      const evaluation = { ...formData };
      setEvaluation([...Evaluation, evaluation])
      setFormData(initialFormState)
      await API.graphql(graphqlOperation(createPairwise, {input: evaluation}))
      console.log ('created pairwise', evaluation)
      send('SUBMIT_PAIR')
      } catch (err) {
      console.log('error creating evaluation:', err)
    }
  }

  return (
    <div>
    {/* {renderState === 'pairwise' && ( */}
      <Card variation="outlined" width='100%' >
        <Flex direction="column">
        <div width='90%'>
          <Flex direction='row'>
            {questions.map((question) => 
              <PairwiseQuestion 
                key={question.id}
                question={question}
              />
            )}            
          </Flex>
        </div>
      <RadioGroupField
        onChange={e => setFormData({ ...formData, 'pairChoice': e.target.value, 'textcacheID': state.context.textId})}
        value={formData.pairChoice}
        label='pairChoice'
      >
        {/* going directly to pairwise Table - change value if doesn't work  */}
          <Radio
            value='One'
          > group one etc...
          </Radio>
          <Radio
            value='Two'
          > group two etc...
          </Radio>
      </RadioGroupField>
      <TextField
              onChange={e => setFormData({ ...formData, 'reason': e.target.value})}
              placeholder="reason"
      />
    <Button width="100px" onClick={addPairwiseEval}>submit</Button>
    </Flex>
   </Card>
   {/* )}
   {renderState === 'feedback' && (
     <FeedbackEval />
   )} */}
    </div>
  );
}

export default PairwiseEval;