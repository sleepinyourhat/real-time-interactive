import React, { createContext } from 'react';
import {useInterpret}  from '@xstate/react';
import sequenceMachine  from '../machines/sequence';


export const SequenceContext = createContext(
  // Typed this way to avoid TS errors,
  // looks odd I know
  {});


export const SequenceProvider = (props) => {
    const sequenceService = useInterpret(sequenceMachine);
    return (React.createElement(SequenceContext.Provider, { value: { sequenceService } }, props.children));
};


// export const SequenceContext = createContext({});

// export const sequenceStateProvider = (props) => { 
//   const sequenceService = useInterpret(sequenceMachine);
//   return (
//     <SequenceContext.Provider value={{ sequenceService }}>
//       {props.children}
//     </SequenceContext.Provider>
//   );
// };