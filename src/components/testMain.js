import React, { useEffect, useState, useContext } from "react";
import { API } from "aws-amplify";
import { listTextCaches } from "../graphql/queries";
import { Flex, Card, Heading, Text } from "@aws-amplify/ui-react";
import QuestionInput from "./questionInput";
import PairwiseEval from "./pairwiseEval";
import FeedbackEval from "./feedbackEval";
import WritingFeedback from "./writingFeedback";
import { useActor } from '@xstate/react';
import {SequenceContext} from './sequenceContext';



function TestMain() {
    const [Item, setItem] = useState('');
    const [textID, setTextID] = useState('');
    const sequenceServices = useContext(SequenceContext);
    const [state ] = useActor(sequenceServices.sequenceService)
    const { send } = sequenceServices.sequenceService;
    

    useEffect(() => {
      fetchTestItems();
    },[]);

    useEffect(()=> {
      const Text = textID
      if (Text.length !== 0) {
        send({type:'TEXT_ADDED', Text:Text}) 
      }

    },[send, textID])

    useEffect(() => {
      console.log('state of sequence:',state)
    
    },[state])    

  // TODO: when sequence.js get item index to call depending on team slot and state.matches('evalfeedback') && state.matches('pairwise')

    async function fetchTestItems() {
      const apiData = await API.graphql({ query: listTextCaches });
      // change number here in state machine to change which renders
      setItem(apiData.data.listTextCaches.items[0]);
      setTextID(apiData.data.listTextCaches.items[0].id);
    }
return (    
    <Flex direction="column">
      
              <Card variation="outlined" width='100%' key={textID}>

                <Heading level={3}>Text</Heading>
                <Text>{Item.item}</Text>
              </Card>
            {state.matches('question') ? (
                <QuestionInput  />
              ): state.matches('pairwise') ?(
                <PairwiseEval />
              ): state.matches('feedbackEval') ? (
                <FeedbackEval/>
              ): state.matches('writingFeedback') ? (
                <WritingFeedback/>
              ):
              null}
            {/* <QuestionInput  textID={textID} /> */}
    </Flex>
     )
}

export default TestMain;