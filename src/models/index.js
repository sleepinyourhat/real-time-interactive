// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Team = {
  "A": "A",
  "B": "B"
};

const Status = {
  "ONLINE": "ONLINE",
  "OFFLINE": "OFFLINE"
};

const { User, Text, UseTeam, Question, Progress, Pairwise, TextCache } = initSchema(schema);

export {
  User,
  Text,
  UseTeam,
  Question,
  Progress,
  Pairwise,
  TextCache,
  Team,
  Status
};