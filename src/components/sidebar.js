import React from "react";
import { Card, Flex, Text, Heading, Button } from "@aws-amplify/ui-react";

import Progress from "./progess";
import InstructionLinks from "./instructionsLinks";
// import { useUser } from "./authContext";


function SideBar() {
	// const { user} = useUser();
	// console.log('user: ', user);
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
						<Text>1/8</Text> 
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
