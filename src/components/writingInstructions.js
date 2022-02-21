import React from "react";
import { Button, Text, Heading } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function WritingInstructions() {
  const navigate = useNavigate();
  // const location = useLocation();

  async function close() {
    navigate(-1);
  }
  return(
    <div>
      <Heading>Writing Instructions</Heading>
      <Text>  
        In this task, which should take approximately two hours, you will be given four sets of tasks. Each set will contain a writing task, an evaluation task, and two feedback tasks. The instructions for each sub task is given below. You may leave the workflow at any time.  However, every time you leave it will count as documented in the instructions to the project. If you have any questions, please email The first task in every set is the writing task. In this task, you are given a text. Please take the time to read the text.  After you read the text, you will be asked to write a question and answer pair, similar to ones you could find on a standard reading comprehension test. 
      </Text>
      <Button onClick={close}>Close</Button>
    </div>
  )
}

export default WritingInstructions;