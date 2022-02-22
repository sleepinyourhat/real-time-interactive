import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listTextCaches } from "../graphql/queries";
import { Flex, Card, Heading, Text } from "@aws-amplify/ui-react";
import QuestionInput from "./questionInput";
// import useTextIn from "./textIn";


function TestMain() {
    const [Item, setItem] = useState('');
    const [textID, setTextID] = useState('');
    // const  textIn= useTextIn();
    // console.log('textIn: ', textIn);
    useEffect(() => {
      fetchTestItems();
    },[]);

  // TODO: when sequence.js get item index to call depending on team slot and state.matches('evalfeedback') && state.matches('pairwise')

    async function fetchTestItems() {
      const apiData = await API.graphql({ query: listTextCaches });
      // change number here in state machine to change which renders
      setItem(apiData.data.listTextCaches.items[0]);
      setTextID(apiData.data.listTextCaches.items[0].id);
      console.log('apiData: ', apiData);
      // console.log('item: ', Item);
    }
return (    
    <Flex direction="column">
      
              <Card variation="outlined" width='100%' key={textID}>

                <Heading level={3}>Text</Heading>
                <Text>{Item.item}</Text>
              </Card>
            <QuestionInput  textID={textID} />
    </Flex>
     )
}

export default TestMain;