// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Text, UseTeam, Question, Pairwise, TextCache } = initSchema(schema);

export {
  Text,
  UseTeam,
  Question,
  Pairwise,
  TextCache
};