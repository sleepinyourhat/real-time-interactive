import React, { useState, useEffect, useContext } from "react";
import { API } from "aws-amplify";
import { listQuestions } from "../graphql/queries";
import { Card, Heading, Text, Button, Flex } from "@aws-amplify/ui-react";
import PairwiseQuestion from "./pairwiseQuestion";
import { useActor } from '@xstate/react';
import {SequenceContext} from './sequenceContext';


function FeedbackEval() {
  const sequenceServices = useContext(SequenceContext);
  const [state] = useActor(sequenceServices.sequenceService)
  const { send } = sequenceServices.sequenceService;
  const [questions, setQuestions] = useState([])


  useEffect(() => {
    fetchQuestions();
  }, []);


  // TODO: limit question render based on team + text 

  // graphql query for question
  async function fetchQuestions() {
    const apiData = await API.graphql({ query: listQuestions, variables: {limit: 2}})
    setQuestions(apiData.data.listQuestions.items);
  }; 

  // function for onclick to next feedback
  function handleSubmit() {
    send('DONE_EVAL_F')
  }

  // TODO: add actual text not filler 
  return (
    <div>     
        <Card variation='outlined' width='100%'>
          <Flex direction='column'>
          <Heading>Feedback Pairwise</Heading>
          <Text>----I am a Eval feedback loop from the dark nether----</Text>
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
            <Text>----I am a Eval feedback loop from the dark nether----</Text>
            <Text>----I am a Eval feedback loop from the dark nether----</Text>
          <Button onClick={handleSubmit}>Done</Button>
          </Flex>
        </Card>

    </div>
    
  )
}

export default FeedbackEval;