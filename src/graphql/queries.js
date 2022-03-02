/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getText = /* GraphQL */ `
  query GetText($id: ID!) {
    getText(id: $id) {
      id
      items
      alias
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const listTexts = /* GraphQL */ `
  query ListTexts(
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items
        alias
        viewed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUseTeam = /* GraphQL */ `
  query GetUseTeam($id: ID!) {
    getUseTeam(id: $id) {
      id
      slotA1
      slotA2
      slotB1
      slotB2
      createdAt
      updatedAt
    }
  }
`;
export const listUseTeams = /* GraphQL */ `
  query ListUseTeams(
    $filter: ModelUseTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUseTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slotA1
        slotA2
        slotB1
        slotB2
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      content
      answerOne
      answerTwo
      answerThree
      answerFour
      answerSelect
      textID
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        answerOne
        answerTwo
        answerThree
        answerFour
        answerSelect
        textID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPairwise = /* GraphQL */ `
  query GetPairwise($id: ID!) {
    getPairwise(id: $id) {
      id
      pairChoice
      reason
      textcacheID
      createdAt
      updatedAt
    }
  }
`;
export const listPairwises = /* GraphQL */ `
  query ListPairwises(
    $filter: ModelPairwiseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPairwises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pairChoice
        reason
        textcacheID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTextCache = /* GraphQL */ `
  query GetTextCache($id: ID!) {
    getTextCache(id: $id) {
      id
      item
      alias
      teamId
      Questions {
        items {
          id
          content
          answerOne
          answerTwo
          answerThree
          answerFour
          answerSelect
          textID
          createdAt
          updatedAt
        }
        nextToken
      }
      Pairwises {
        items {
          id
          pairChoice
          reason
          textcacheID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTextCaches = /* GraphQL */ `
  query ListTextCaches(
    $filter: ModelTextCacheFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTextCaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        item
        alias
        teamId
        Questions {
          nextToken
        }
        Pairwises {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
