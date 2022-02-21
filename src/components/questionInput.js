import React, { useState } from "react";
import { Card, RadioGroupField, Radio, TextField, Button } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createQuestion } from "../graphql/mutations";
// import { listTexts } from "../graphql/queries";
import { v4 as uuidv4 } from 'uuid';
import PairwiseEval from "./pairwiseEval";


// const initialFormState = { id: uuidv4(), textID: '', content: '', answerSelect: '', answerOne: '', answerTwo: '', answerThree: '', answerFour: '' };

function QuestionInput(props) {

  const [renderState, setRenderState] = useState('questionForm');
  const initialFormState = { id: uuidv4(), textID: '', content: '', answerSelect: '', answerOne: '', answerTwo: '', answerThree: '', answerFour: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [Question, setQuestion] = useState([]);


  // console.log('textID: ', textID);
  // const [userId , setUserId] = useState('');

  // useEffect(() => {
  //   setFormData({ ...formData, textID: textID });
  // } ,[formData, textID, props.textID]);


  // async function fetchText() {
  //   const apiData = await API.graphql({ query: listTexts})
  //   console.log('apiData: ', apiData);  
  // };


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
      setRenderState('evalForm')
      } catch (err) {
      console.log('error creating question:', err)
    }
  }

  // function callPairwise() {
  //   return (
  //     <PairwiseEval />
  //   )
  // }

  return (
    <div>  

    {renderState === 'questionForm' && (
      <Card variation="outlined" >
        <TextField
            onChange={e => setFormData({ ...formData, 'content': e.target.value,  'textID': props.textID })}
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
      </Card>)}

      {renderState === 'evalForm' && (
        <PairwiseEval textId={props} /> )}

    </div>
  );
}

export default QuestionInput;