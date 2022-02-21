// import React, { createContext } from 'react';
// import { useInterpret } from '@xstate/react';
// import { sequenceMachine } from '../machines/sequenceMachine';

// export const SequenceContext = createContext({});

// export const sequenceStateProvider = (props) => { 
//   const sequenceService = useInterpret(sequenceMachine);
//   return (
//     <SequenceContext.Provider value={{ sequenceService }}>
//       {props.children}
//     </SequenceContext.Provider>
//   );
// };