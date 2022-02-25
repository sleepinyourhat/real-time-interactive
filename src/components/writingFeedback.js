import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Card, Heading, Text, Button } from "@aws-amplify/ui-react";
import { listQuestions } from "../graphql/queries";
import PairwiseQuestion from "./pairwiseQuestion";
import QuestionInput from "./questionInput";

function WritingFeedback() {
  const [renderState, setRenderState] = useState('writingFeedback');
  const [questions, setQuestions] = useState([]);
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
    setRenderState('homeRender');
  }


  return (
    <div>     
      {renderState === 'writingFeedback' && (
        //         {/* 
        // 2 questions render 
        // related pairwise eval is processed and output renders here 
        // */}
        <Card variation='outlined'>
          <Heading>Writing Feedback</Heading>
          <Text>----I am a writing feedback loop from the dark nether----</Text>
            <div>
            {questions.map((question) => 
              <PairwiseQuestion 
                key={question.id}
                question={question}
              />
              )}
            </div>
            <Text>----I am a writing feedback loop from the dark nether----</Text>
            <Text>----I am a writing feedback loop from the dark nether----</Text>
          <Button onClick={handleSubmit}>Done</Button>
        </Card>
      )}
        {renderState === 'homeRender' && (
          <QuestionInput />
        )}
    </div>
    
  )
}

export default WritingFeedback;