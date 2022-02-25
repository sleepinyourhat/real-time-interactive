import { Card, Heading, RadioGroupField, Text, Radio } from "@aws-amplify/ui-react";
import React from "react";

function PairwiseQuestion(props) {
    // console.log("props: ", props.question);
  return (
    <Card variation="outlined">
      <Heading>
        QA Pair {props.question.id}
      </Heading>
      <Text>{props.question.question}</Text>
      <RadioGroupField value={props.question.answerSelect} isReadOnly>
        <Radio  value="A">
          {props.question.answerOne}
        </Radio>
        <Radio value="B">
          {props.question.answerTwo}
        </Radio>
        <Radio value="C">
          label={props.question.answerThree}
        </Radio>
        <Radio value="D">
          label={props.question.answerFour}
        </Radio>
      </RadioGroupField>
    </Card>
    );
}

export default PairwiseQuestion;