import React from "react";
import { Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
import InstructionLinks from "./instructionsLinks";


function Waiting() {
  return(
    <Card>
      <Card variation="outlined" backgroundColor="ffffff">
        <Flex direction="column">
          <Heading level={3}>Waiting for others to join ...</Heading>
          <Text>While you wait, if you want to review the instructions:</Text>
          <InstructionLinks/>
        </Flex>
      </Card>
        <Text >2/4 people joined</Text>

    </Card>
  )
}

export default Waiting;