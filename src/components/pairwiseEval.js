import React, { useEffect, useState } from "react";
import { Card, RadioGroupField, Radio, TextField, Button } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createPairwise } from "../graphql/mutations";
import { listQuestions } from "../graphql/queries";
import { v4 as uuidv4 } from 'uuid';
import PairwiseQuestion from "./pairwiseQuestion";
import FeedbackEval from "./feedbackEval";


function PairwiseEval (props) {

  const initialFormState = { textcacheID:'', id: uuidv4(), pairChoice: '', reason: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [Evaluation, setEvaluation] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const [textId, setTextId] = useState('');
  // const [userId , setUserId] = useState([]);
  const [renderState, setRenderState] = useState('pairwise');
// useEffect(() => {
//   setFormData({ ...formData, textcacheID: props.textID });
// }, [props, formData]);

useEffect(() => {
  fetchQuestions()
}, []);


  async function fetchQuestions() {
    const apiData = await API.graphql({ query: listQuestions, variables: {limit: 2}})
    setQuestions(apiData.data.listQuestions.items);
    // console.log('apiData: ', apiData);
    // setTextId(props.textId);
  };

  async function addPairwiseEval() {

    try {
      if (!formData.id || !formData.textcacheID || !formData.pairChoice || !formData.reason) return
      console.log("addPairwiseEval: ", formData);
      const evaluation = { ...formData };
      setEvaluation([...Evaluation, evaluation])
      setFormData(initialFormState)
      await API.graphql(graphqlOperation(createPairwise, {input: evaluation}))
      console.log ('created pairwise', evaluation)
      setRenderState('feedback')
      // fetchUser()
      } catch (err) {
      console.log('error creating evaluation:', err)
    }
  }

  return (
    <div>
    {renderState === 'pairwise' && (
      <Card variation="outlined" >
        <div>
          {questions.map((question) => 
            <PairwiseQuestion 
              key={question.id}
              question={question}
            />
          )}
        </div>
      <RadioGroupField
        onChange={e => setFormData({ ...formData, 'pairChoice': e.target.value, 'textcacheID': props.textId.textID })}
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
   </Card>)}
   {renderState === 'feedback' && (
     <FeedbackEval />
   )}
    </div>
  );
}

export default PairwiseEval;