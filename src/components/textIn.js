import { useEffect, useState } from "react";
// import { useUser } from "./authContext";
import { API } from "aws-amplify";
import { listTexts } from "../graphql/queries";

export default function useTextIn() {
  // const { user } = useUser();
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    fetchTexts();
  }, []);



  // async function assignTeam() { 
  //   // assigning of the teams should happen before creating the TeamTexts 
  //   // team assignment needs to check if user has had a team assigned before
  //   //  

  // }
  // async function breakList() {
  //   const textsList = texts.slice(0, 20)
  //   console.log('list 20 :', textsList)
  // }
  
  async function fetchTexts() {
    const apiData = await API.graphql({ query: listTexts });
    setTexts(apiData.data.listTexts.items);
    // console.log('texts:', texts);
    // console.log('user:', user)
    // what needs to happen in here ?
    // injest 2O texts then uses a create mutation to copy those text to a TeamTexts model? 
  }
  return [texts];
}