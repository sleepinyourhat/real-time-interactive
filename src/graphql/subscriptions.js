/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateText = /* GraphQL */ `
  subscription OnCreateText {
    onCreateText {
      id
      items
      alias
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateText = /* GraphQL */ `
  subscription OnUpdateText {
    onUpdateText {
      id
      items
      alias
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteText = /* GraphQL */ `
  subscription OnDeleteText {
    onDeleteText {
      id
      items
      alias
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUseTeam = /* GraphQL */ `
  subscription OnCreateUseTeam {
    onCreateUseTeam {
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
export const onUpdateUseTeam = /* GraphQL */ `
  subscription OnUpdateUseTeam {
    onUpdateUseTeam {
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
export const onDeleteUseTeam = /* GraphQL */ `
  subscription OnDeleteUseTeam {
    onDeleteUseTeam {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreatePairwise = /* GraphQL */ `
  subscription OnCreatePairwise {
    onCreatePairwise {
      id
      pairChoice
      reason
      textcacheID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePairwise = /* GraphQL */ `
  subscription OnUpdatePairwise {
    onUpdatePairwise {
      id
      pairChoice
      reason
      textcacheID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePairwise = /* GraphQL */ `
  subscription OnDeletePairwise {
    onDeletePairwise {
      id
      pairChoice
      reason
      textcacheID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTextCache = /* GraphQL */ `
  subscription OnCreateTextCache {
    onCreateTextCache {
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
export const onUpdateTextCache = /* GraphQL */ `
  subscription OnUpdateTextCache {
    onUpdateTextCache {
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
export const onDeleteTextCache = /* GraphQL */ `
  subscription OnDeleteTextCache {
    onDeleteTextCache {
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
