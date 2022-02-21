import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@aws-amplify/ui-react";

function InstructionLinks () {
  return (
    <Flex direction='column'>
      <Link to="/writingInstructions">Writing Instructions</Link>
      <Link to="/evalInstructions">Evaluation Instructions</Link>
    </Flex>
  )
}

export default InstructionLinks;