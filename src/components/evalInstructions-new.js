import React from "react";
import { Button, Text, Heading } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function EvalInstructions() {
  const navigate = useNavigate();
  // const location = useLocation();

  async function close() {
    navigate(-1);
  }

	// TODO: fix formatting errors 
  return(
    <div>
      <Heading>Question Writing</Heading>
      <Text>  
      	In this task, you will be given a passage, <b>you need to write a multiple-choice question</b> about the passage. In writing the questions and answer choices, 
		<ol>
  			<li>You must ensure that there is <b>a single correct answer for a question</b>, and you'll have to mark the correct answer choice</li>
  			<li>The questions you write <b>must be answerable based on the text in the passage</b>, they should not require specialized knowledge that isn't provided in the passage. For example, if you're given the passage: "<i>As a model, Marilyn Monroe straightened her curly brunette hair and dyed it blonde to make herself more employable</i>, you can't ask a question about her trademark red lipstick.</li>
  			<li>You shoudl assume that the <b>reader has general background knowledge</b>. For example, a reasonable reader knows that the text is implying that Monroe straightens the hair on her head, not on her arms.</li>
  			<li>You should also assume that the <b>reader can speculate about something that is not explicitly sstated in the text.</b> For example, a reader will be able to reason that since Monroe straightens her curly hair, it's likely that she was born with curly hair. However, you must ensure that the answer is unambiguous. For a question, <i>"What type of hair was Monroe born with?"</i>, you could provide these answer choices: <i>curly, straight, blonde, curly blonde</i>. Curly hair is unambiguously the correct answer.</li>
			<li>It <b>should not be easy to eliminate or guess the answer choices without reading the passage</b>. For example, if a question, <i>"Which city was Facebook launched in?"</i> has answer choices (a)<i>Cambridge</i>, (b)<i>US</i>, (c)<i>China</i>, (d)<i>Austrailia</i>, one can easily elimiate choices (b)-(d) since they are not cities and arrive at the correct answer (a) without reading the passage.</i>
			<li>Likewise, it <b>should also not be easy to eliminate answer choices without reading the question</b>: if only the correct answer choice from teh set of answer choices have relevance (or text overlap) to the information provided int he passage, one can easily guess the right answer choice without reading the question.</li>
		</ol>	
	 </Text>
	
	 <Heading>Guidelines for Writing Hard Questions</Heading>
	 <Text>
		The goal here is to be creative and write questions that <i>you</i> think are difficult, but that other people like you will still be able to answer if they're careful. Here are some guidelines:
		<ul>
			<li>Consider questions that ask about:
			<ul>
				<li>Characters' feelings and motivations</li>
				<li>Causes and consequences of described events</li>
				<li>Definition, properties, and process explained in a passage</li>
				<li>Summary and lesson of a passage</li>
				<li>Basic: arithemtic of numbers in a passage</li>
			</ul>
			</li>
			<li>Use words and phrases that don't appear in the passage</li>
			<li>Write questions that are answerable based only on the text in the passage</li>
			<li>Write examples that require a careful reading of the passage</li>
			<li>Provide "distracting" answer choices: options that seem plausible if someone didn't read the passage carefully.</li>
		</ul>	
	 </Text>

	 <Heading>Examples</Heading>
	 <Text>
     	What is the value to me of those eight minutes? I suppose the conventional answer is to divide my annual earned income by the number of minutes I spend working and so arrive at the income I could gain by having another minute at my disposal. In my case, this would be a difficult calculation. The time I spend "working" is not only the time I spend sitting at my word processor and writing these essays. It also includes all the time I spend musing about these essays, while in the shower, or on the bus, or trying to fall asleep, and I have no idea how much time that is in a year. Anyway, the eight minutes I don't spend in the kitchen will probably not be used to earn more income. It will probably be used to lie down listening to music.
	 </Text>

	 <Text>
		<b>Good Example</b>
		Question: What did the author think about calculating the value of their eight minutes?
		Answer options: 
		<ul>
			<li>A. It will be challenging since htey don't have an exact working time. (<b>correct</b>)</li>
			<li>B. It should include the time spent when working away from the word processor which they already kept a record of.</li>
			<li>C. It is important so that htey can earn more income</li>
			<li>D. It could help them find time to listen to music</li>
		</ul>
		<i>Explanation: This question is good in part because it rephrases the text in the passage. To answer the question, one needs to read the whole passage carefully since no single sentence in the passage answers the question. The answer options also create some difficulty since option (b) seems like a good candidate, however the author stated that htey did not measure the working time when they were sitting at the word processor.</i>
		
		<b>Bad Example</b>
		Question: Where does the author ususally work on their essays?
		Answer options: 
		<ul>
			<li>A. At home.</li>
			<li>B. At work.</li>
			<li>C. In the library.</li>
			<li>D. In an office with a word processor.</li>
		</ul>
		<i>Explanation: This question has ambiguous options, which is not appropriate here. The author might have a word processor at any of hte places that are given in the options.</i>
	 </Text>
      <Button onClick={close}>Close</Button>
    </div>
  )
}

export default EvalInstructions;
