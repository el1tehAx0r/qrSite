/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      title
      color
      image
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      title
      color
      image
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      title
      color
      image
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateStage = /* GraphQL */ `
  subscription OnCreateStage {
    onCreateStage {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      performances {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateStage = /* GraphQL */ `
  subscription OnUpdateStage {
    onUpdateStage {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      performances {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteStage = /* GraphQL */ `
  subscription OnDeleteStage {
    onDeleteStage {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      performances {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreatePerformance = /* GraphQL */ `
  subscription OnCreatePerformance {
    onCreatePerformance {
      id
      performanceStageId
      productID
      performer
      imageUrl
      description
      time
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      stage {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdatePerformance = /* GraphQL */ `
  subscription OnUpdatePerformance {
    onUpdatePerformance {
      id
      performanceStageId
      productID
      performer
      imageUrl
      description
      time
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      stage {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeletePerformance = /* GraphQL */ `
  subscription OnDeletePerformance {
    onDeletePerformance {
      id
      performanceStageId
      productID
      performer
      imageUrl
      description
      time
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      stage {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
