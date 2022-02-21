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
<<<<<<< HEAD
      <Heading>Question Writing</Heading>
      <Text>  
         In this project, we are collecting questions to study machine understanding of English. Thank you for your help!
      </Text>
      <Text>

      </Text>
=======
      <Heading>Question Answering and Evaluation</Heading>
      <Text>  
      	TODO: FILL IN
	  </Text>
>>>>>>> ae199e6115aee69457b03b6ee5f94342fb955f17
      <Button onClick={close}>Close</Button>
    </div>
  )
}

export default WritingInstructions;
