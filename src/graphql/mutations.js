/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createText = /* GraphQL */ `
  mutation CreateText(
    $input: CreateTextInput!
    $condition: ModelTextConditionInput
  ) {
    createText(input: $input, condition: $condition) {
      id
      items
      alias
      createdAt
      updatedAt
    }
  }
`;
export const updateText = /* GraphQL */ `
  mutation UpdateText(
    $input: UpdateTextInput!
    $condition: ModelTextConditionInput
  ) {
    updateText(input: $input, condition: $condition) {
      id
      items
      alias
      createdAt
      updatedAt
    }
  }
`;
export const deleteText = /* GraphQL */ `
  mutation DeleteText(
    $input: DeleteTextInput!
    $condition: ModelTextConditionInput
  ) {
    deleteText(input: $input, condition: $condition) {
      id
      items
      alias
      createdAt
      updatedAt
    }
  }
`;
export const createUseTeam = /* GraphQL */ `
  mutation CreateUseTeam(
    $input: CreateUseTeamInput!
    $condition: ModelUseTeamConditionInput
  ) {
    createUseTeam(input: $input, condition: $condition) {
      id
      slotA1
      slotA2
      slotB1
      slotB2
      isFull
      createdAt
      updatedAt
    }
  }
`;
export const updateUseTeam = /* GraphQL */ `
  mutation UpdateUseTeam(
    $input: UpdateUseTeamInput!
    $condition: ModelUseTeamConditionInput
  ) {
    updateUseTeam(input: $input, condition: $condition) {
      id
      slotA1
      slotA2
      slotB1
      slotB2
      isFull
      createdAt
      updatedAt
    }
  }
`;
export const deleteUseTeam = /* GraphQL */ `
  mutation DeleteUseTeam(
    $input: DeleteUseTeamInput!
    $condition: ModelUseTeamConditionInput
  ) {
    deleteUseTeam(input: $input, condition: $condition) {
      id
      slotA1
      slotA2
      slotB1
      slotB2
      isFull
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createPairwise = /* GraphQL */ `
  mutation CreatePairwise(
    $input: CreatePairwiseInput!
    $condition: ModelPairwiseConditionInput
  ) {
    createPairwise(input: $input, condition: $condition) {
      id
      pairChoice
      reason
      textcacheID
      createdAt
      updatedAt
    }
  }
`;
export const updatePairwise = /* GraphQL */ `
  mutation UpdatePairwise(
    $input: UpdatePairwiseInput!
    $condition: ModelPairwiseConditionInput
  ) {
    updatePairwise(input: $input, condition: $condition) {
      id
      pairChoice
      reason
      textcacheID
      createdAt
      updatedAt
    }
  }
`;
export const deletePairwise = /* GraphQL */ `
  mutation DeletePairwise(
    $input: DeletePairwiseInput!
    $condition: ModelPairwiseConditionInput
  ) {
    deletePairwise(input: $input, condition: $condition) {
      id
      pairChoice
      reason
      textcacheID
      createdAt
      updatedAt
    }
  }
`;
export const createTextCache = /* GraphQL */ `
  mutation CreateTextCache(
    $input: CreateTextCacheInput!
    $condition: ModelTextCacheConditionInput
  ) {
    createTextCache(input: $input, condition: $condition) {
      id
      item
      alias
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
export const updateTextCache = /* GraphQL */ `
  mutation UpdateTextCache(
    $input: UpdateTextCacheInput!
    $condition: ModelTextCacheConditionInput
  ) {
    updateTextCache(input: $input, condition: $condition) {
      id
      item
      alias
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
export const deleteTextCache = /* GraphQL */ `
  mutation DeleteTextCache(
    $input: DeleteTextCacheInput!
    $condition: ModelTextCacheConditionInput
  ) {
    deleteTextCache(input: $input, condition: $condition) {
      id
      item
      alias
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
