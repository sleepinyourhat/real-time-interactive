/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      password
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        password
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        password
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getText = /* GraphQL */ `
  query GetText($id: ID!) {
    getText(id: $id) {
      id
      items
      alias
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTexts = /* GraphQL */ `
  query SyncTexts(
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTexts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        items
        alias
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUseTeam = /* GraphQL */ `
  query GetUseTeam($id: ID!) {
    getUseTeam(id: $id) {
      id
      username
      teamAssignment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        username
        teamAssignment
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUseTeams = /* GraphQL */ `
  query SyncUseTeams(
    $filter: ModelUseTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUseTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        teamAssignment
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      textcID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        textcID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        answerOne
        answerTwo
        answerThree
        answerFour
        answerSelect
        textID
        textcID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProgress = /* GraphQL */ `
  query GetProgress($id: ID!) {
    getProgress(id: $id) {
      id
      status
      user
      textPosition
      run
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProgresses = /* GraphQL */ `
  query ListProgresses(
    $filter: ModelProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        user
        textPosition
        run
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProgresses = /* GraphQL */ `
  query SyncProgresses(
    $filter: ModelProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        status
        user
        textPosition
        run
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPairwises = /* GraphQL */ `
  query SyncPairwises(
    $filter: ModelPairwiseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPairwises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pairChoice
        reason
        textcacheID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTextCache = /* GraphQL */ `
  query GetTextCache($id: ID!) {
    getTextCache(id: $id) {
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
          textcID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Pairwises {
        items {
          id
          pairChoice
          reason
          textcacheID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        Questions {
          nextToken
          startedAt
        }
        Pairwises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTextCaches = /* GraphQL */ `
  query SyncTextCaches(
    $filter: ModelTextCacheFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTextCaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        item
        alias
        Questions {
          nextToken
          startedAt
        }
        Pairwises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
