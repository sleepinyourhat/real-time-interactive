import React, { useState, useEffect, useContext } from "react";
import { API } from "aws-amplify";
import { Card, Heading, Text, Button, Flex } from "@aws-amplify/ui-react";
import { listQuestions } from "../graphql/queries";
import PairwiseQuestion from "./pairwiseQuestion";
// import QuestionInput from "./questionInput";
import { useActor } from '@xstate/react';
import {SequenceContext} from './sequenceContext';

function WritingFeedback() {
  // const [renderState, setRenderState] = useState('writingFeedback');
  const [questions, setQuestions] = useState([]);
  const sequenceServices = useContext(SequenceContext);
  const [state] = useActor(sequenceServices.sequenceService)
  const { send } = sequenceServices.sequenceService;

  useEffect(() => {
    fetchQuestions();
  }, []);
  // graphql query for pairwise
  // graphql query for question 
    async function fetchQuestions() {
      const apiData = await API.graphql({ query: listQuestions, variables: {limit: 2}})
      setQuestions(apiData.data.listQuestions.items);
      // console.log('apiData: ', apiData);
    };
  // pairwise processing function

  // function for onclick to next feedback
  function handleSubmit() {
    // setRenderState('homeRender');
    send('DONE_WRITE_F')
  }

// TODO: sequence.js moniters button and switches renderState
  return (
    <div>     

        <Card variation='outlined' width='100%'>
          <Flex direction='column'>
          <Heading>Writing Feedback</Heading>
          <Text>----I am a writing feedback loop from the dark nether----</Text>
            <div>
              <Flex direction='row'> 
                {questions.map((question) => 
                  <PairwiseQuestion 
                    key={question.id}
                    question={question}
                  />
                  )}              
              </Flex>

            </div>
            <Text>----I am a writing feedback loop from the dark nether----</Text>
            <Text>----I am a writing feedback loop from the dark nether----</Text>
          <Button onClick={handleSubmit}>Done</Button>
          </Flex>
        </Card>
    </div>
    
  )
}

export default WritingFeedback;