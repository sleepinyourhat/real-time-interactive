import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TextMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UseTeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PairwiseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TextCacheMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Text {
  readonly id: string;
  readonly items?: string;
  readonly alias?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Text, TextMetaData>);
  static copyOf(source: Text, mutator: (draft: MutableModel<Text, TextMetaData>) => MutableModel<Text, TextMetaData> | void): Text;
}

export declare class UseTeam {
  readonly id: string;
  readonly slotA1?: string;
  readonly slotA2?: string;
  readonly slotB1?: string;
  readonly slotB2?: string;
  readonly isFull?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UseTeam, UseTeamMetaData>);
  static copyOf(source: UseTeam, mutator: (draft: MutableModel<UseTeam, UseTeamMetaData>) => MutableModel<UseTeam, UseTeamMetaData> | void): UseTeam;
}

export declare class Question {
  readonly id: string;
  readonly content?: string;
  readonly answerOne?: string;
  readonly answerTwo?: string;
  readonly answerThree?: string;
  readonly answerFour?: string;
  readonly answerSelect?: string;
  readonly textID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}

export declare class Pairwise {
  readonly id: string;
  readonly pairChoice?: string;
  readonly reason?: string;
  readonly textcacheID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Pairwise, PairwiseMetaData>);
  static copyOf(source: Pairwise, mutator: (draft: MutableModel<Pairwise, PairwiseMetaData>) => MutableModel<Pairwise, PairwiseMetaData> | void): Pairwise;
}

export declare class TextCache {
  readonly id: string;
  readonly item?: string;
  readonly alias?: string;
  readonly Questions?: (Question | null)[];
  readonly Pairwises?: (Pairwise | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TextCache, TextCacheMetaData>);
  static copyOf(source: TextCache, mutator: (draft: MutableModel<TextCache, TextCacheMetaData>) => MutableModel<TextCache, TextCacheMetaData> | void): TextCache;
}