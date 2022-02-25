import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listQuestions } from "../graphql/queries";
import { Card, Heading, Text, Button } from "@aws-amplify/ui-react";
import WritingFeedback from "./writingFeedback";
import PairwiseQuestion from "./pairwiseQuestion";


function FeedbackEval() {
  const [renderState, setRenderState] = useState('feedbackEval');
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    fetchQuestions();
  }, []);
  // graphql query for pairwise

  // graphql query for question
  async function fetchQuestions() {
    const apiData = await API.graphql({ query: listQuestions, variables: {limit: 2}})
    setQuestions(apiData.data.listQuestions.items);
    console.log('apiData: ', apiData);
  }; 

  // pairwise processing function

  // function for onclick to next feedback
  function handleSubmit() {
    setRenderState('writingFeedback');

  }

  return (
    <div>     
      {renderState === 'feedbackEval' && (
        //         {/* 
        // 2 questions render 
        // related pairwise eval is processed and output renders here 
        // */}
        <Card variation='outlined'>
          <Heading>Feedback Pairwise</Heading>
          <Text>----I am a Eval feedback loop from the dark nether----</Text>
            <div>
              {questions.map((question) => 
                <PairwiseQuestion 
                  key={question.id}
                  question={question}
                />
              )}
            </div>
            <Text>----I am a Eval feedback loop from the dark nether----</Text>
            <Text>----I am a Eval feedback loop from the dark nether----</Text>
          <Button onClick={handleSubmit}>Done</Button>
        </Card>
      )}
        {renderState === 'writingFeedback' && (
          <WritingFeedback/>
        )}
    </div>
    
  )
}

export default FeedbackEval;