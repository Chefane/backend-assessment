const createFeedback = {
    tags: ['Feedback'],
    description: 'allowing subscribers to share their feedback',
    operationId: 'createFeedback',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/createFeedbackBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'Feedback submitted successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '60564fcb544047cdc3844818',
                },
                subscriber_name: {
                  type: 'string',
                  example: 'David',
                },
                subscriber_email: {
                  type: 'string',
                  example: 'david@gmail.com',
                },
                feedback: {
                  type: 'string',
                  example: 'The overall system need to be improved',
                },
                feedback_date: {
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

  const createFeedbackBody = {
    type: 'object',
    properties: {
      subscriber_name: {
        type: 'string',
        example: 'David',
      },
      subscriber_email: {
        type: 'string',
        example: 'david@gmail.com',
      },
      feedback: {
        type: 'string',
        example: 'The overall system need to be improved',
      }
    },
};

export {createFeedback, createFeedbackBody};