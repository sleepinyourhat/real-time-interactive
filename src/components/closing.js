import React from "react";
import { Card, Button, Flex, Text, Heading } from "@aws-amplify/ui-react";


function Closing() {
  return(
    <Card>
      <Card variation="outlined" backgroundColor="ffffff">
        <Flex direction="column">
          <Heading level={3}>Task Summary</Heading>
          <Text>Base rate earned:</Text>
          <Text>Bonus earned:</Text>
        </Flex>
      </Card>
        <Text >Thank you so much for your work on this project!</Text>
        <Button>Leave</Button>
    </Card>
  )
}

export default Closing;