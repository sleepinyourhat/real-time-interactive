import { useEffect, useState } from "react";
// import { useUser } from "./authContext";
import { API, graphqlOperation } from "aws-amplify";
import { createUseTeam } from "../graphql/mutations";
// import { Machine } from "Xstate";
// import { useMachine } from "@xstate/react";
import { listUseTeams } from "../graphql/queries";
import {v4 as uuidv4} from 'uuid';
// const teamMachine = Machine({
//   initial: "empty",
//   state: {
//   }
// });

function AssignTeam () { 
  // const { user } = useUser();
  // const [ team, setTeam ] = useState([]);
  // const [ userTeam, setUserTeam ] =useState([]);
  const [ Teammate, setTeammate ] = useState([]);
  const initialFormState = { id: uuidv4, teamAssignment: 'B' }
  const [formData, setFormData] = useState(initialFormState);
  // const [current, send] = useMachine(teamMachine)

  // useEffect(() => {
  //   //  console.log("username", user.username)
  //   addTeammate()
  // }, );

  useEffect(() => {
    listUserTeam()
  }, [] );

  async function listUserTeam() {
    const apiData = await API.graphql({ 
      query: listUseTeams, 
      variables: {
        limit: 4 ,
        // filter: { teamAssignment: {eq: 'A'}}
      }})
      console.log('user team list:', apiData.data.listUseTeams.items)
  }
  // async function listUserTeamB() {
  //   const apiData = await API.graphql({ 
  //     query: listUseTeams, 
  //     variables: {
  //       limit: 4 ,
  //       filter: { teamAssignment: {eq: 'B'}}
  //     if ( ) {addTeammate()}
  //     }})
  // }
  async function addTeammate() {
    try {
      // if(user.username !== null) return
      const teammate = { ...formData }
      setTeammate(...Teammate, teammate)
      await API.graphql(graphqlOperation(createUseTeam, {input: teammate }))
      setFormData(initialFormState)
      console.log('teammate added ', teammate)
    }catch (err) {
      console.log("error:", err);
    }
  }
  return (
    <div><button onClick={addTeammate}>add teammate</button></div>
  )
}

export default AssignTeam;