import React, {useContext } from "react";
import { Card, Flex, Text, Heading, Button } from "@aws-amplify/ui-react";
import Progress from "./progess";
import InstructionLinks from "./instructionsLinks";
import {useActor} from '@xstate/react';
import {SequenceContext} from './sequenceContext'


// TODO: positioning using styling 
// TODO: countdown timer 
// TODO: Take A Brake
// TODO: teammates progress
function SideBar() {
	const sequenceServices = useContext(SequenceContext);
  const [state] = useActor(sequenceServices.sequenceService)
	
	return(
		<Flex direction="column" backgroundColor="#c4c4c4" >
			<Heading level={3} backgroundColor="#c4c4c4" textAlign="center" >Task Status: </Heading>
			<Flex direction="column" backgroundColor="ffffff">
				<Card variation="outlined" backgroundColor="ffffff"	>
					<Text>Your Progeress</Text>
					<Progress key='prog01'/>
					<Text>Teammates Progeress</Text>
					<Progress key='prog02'/>
				</Card>
				<Card variation="outlined" backgroundColor="ffffff" >
					<Text variation="primary">Completed</Text>
						<Text>{state.context.textCount}/8</Text> 
				</Card>
				<Card variation="outlined" backgroundColor="ffffff" >
					<Text variation="primary">Time Remaining</Text>
						<Text>1:00:00</Text>
				</Card>	
			</Flex>			
			<Heading level={3} backgroundColor="c4c4c4" textAlign="center">Instructions</Heading>
			<Card variation="outlined" backgroundColor="ffffff">
				<InstructionLinks/>
			</Card>
			<Heading level={3} backgroundColor="c4c4c4" textAlign="center">Navigate</Heading>
			<Card variation="outlined" backgroundColor="ffffff">
				<Flex direction="column">
					<Button backgroundColor="c4c4c4" >Take A Break</Button>
					<Button backgroundColor="c4c4c4" >Leave Task</Button>
				</Flex>
			</Card>
		</Flex>
	);
}

export default SideBar;
