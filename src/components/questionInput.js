import React, { useState, useContext } from "react";
import { Card, RadioGroupField, Radio, TextField, Button, Flex } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createQuestion } from "../graphql/mutations";
import { v4 as uuidv4 } from 'uuid';
import { useActor } from '@xstate/react';
import {SequenceContext} from './sequenceContext';


function QuestionInput() {
  const initialFormState = { id: uuidv4(), textID: '', content: '', answerSelect: '', answerOne: '', answerTwo: '', answerThree: '', answerFour: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [Question, setQuestion] = useState([]);
  const sequenceServices = useContext(SequenceContext);
  const [state] = useActor(sequenceServices.sequenceService)
  const { send } = sequenceServices.sequenceService;

  async function addQuestion() {
    console.log("addQuestion");

    try {
      if (!formData.id  || !formData.textID ||  !formData.content || !formData.answerSelect || !formData.answerOne || !formData.answerTwo || !formData.answerThree || !formData.answerFour) return
      console.log("addQuestion: ", formData);
      const question = { ...formData };
      setQuestion([...Question, question])
      setFormData(initialFormState)
      await API.graphql(graphqlOperation(createQuestion, {input: question}))
      console.log ('created question', question)
      send('CALL_PAIR')
      } catch (err) {
      console.log('error creating question:', err)
    }
  }

  return (
    <div margin='auto'>  
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