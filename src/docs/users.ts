const createUser = {
    tags: ['Users'],
    description: 'Create a new user for login',
    operationId: 'createUser',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/createUserBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'Account created successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '60564fcb544047cdc3844818',
                },
                name: {
                  type: 'string',
                  example: 'Nosi Chefane',
                },
                email: {
                  type: 'string',
                  example: 'nosichefane@gmail.com',
                },
                password: {
                  type: 'string',
                  example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
                },
                access_token: {
                    type: 'string',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
                  },
                createdAt: {
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
  
  const createUserBody = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'Nosi Chefane',
      },
      email: {
        type: 'string',
        example: 'nosichefane@gmail.com',
      },
      password: {
        type: 'string',
        description: "unencrypted user's password",
        example: '!1234aWe1Ro3$#',
      }
    },
};

  const loginUser = {
    tags: ['Users'],
    description: 'Login the user to the system',
    operationId: 'LoginUser',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
        {
          email: 'email',
          description: 'email of the user',
          required: true,
          type: 'string',
        },
        {
            password: 'password',
            description: 'password of the user',
            required: true,
            type: 'string'
        }
      ],
    responses: {
      '200': {
        description: 'Login successful!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
            
                name: {
                  type: 'string',
                  example: 'Nosi Chefane',
                },
                access_token: {
                  type: 'string',
                  example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
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

const LoginUserBody = {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        example: 'nosichefane@gmail.com',
      },
      password: {
        type: 'string',
        description: "unencrypted user's password",
        example: '!1234aWe1Ro3$#',
      }
    },
};
  
  
  export { createUser, createUserBody, loginUser, LoginUserBody };