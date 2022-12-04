const createStory = {
    tags: ['Stories'],
    description: 'add a story for subscribers',
    operationId: 'createStory',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/createStoryBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'Story created successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '60564fcb544047cdc3844818',
                },
                publisher_name: {
                  type: 'string',
                  example: 'Nosi Chefane',
                },
                author_name: {
                  type: 'string',
                  example: 'John Doe',
                },
                story: {
                  type: 'string',
                  example: 'story to be published',
                },
                publish_date: {
                  type: 'string',
                  example: 'Wed 08 Nov 2022',
                  },
    
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
  };

  const createStoryBody = {
    type: 'object',
    properties: {
      publisher_name: {
        type: 'string',
        example: 'Nosi Chefane',
      },
      author_name: {
        type: 'string',
        example: 'John Doe',
      },
      story: {
        type: 'string',
        example: 'story Info',
      }
    },
};

const userNotFound = {
    description: 'Resource not found',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'User with id: "71675fcb655047cdc4955929" not found',
            },
          },
        },
      },
    },
  };

  const internalServerError = {
    description: 'Internal Server Error',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Internal Server Error',
            },
          },
        },
      },
    },
  };

  const updateStory = {
    tags: ['Stories'],
    description: 'Update a story',
    operationId: 'updateStory',
    parameters: [
      {
        name: '_id',
        in: 'path',
        description: 'Story ID',
        required: true,
        type: 'string',
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/updateStoryBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '200': {
        description: 'Stroy updated  successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: createStoryBody,
            },
          },
        },
      },
      '404': userNotFound,
      '500': internalServerError,
    },
  };

  const updateStoryBody = {
    type: 'object',
    properties: {
      story: {
        type: 'string',
        example: 'updated published story',
      }
    },
  };

export {createStory, createStoryBody, updateStoryBody,internalServerError, userNotFound, updateStory };