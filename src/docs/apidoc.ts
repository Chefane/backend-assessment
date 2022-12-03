import { createUser, createUserBody, loginUser, LoginUserBody } from "./users";
import {createStory, createStoryBody} from "./story";
import { createFeedback, createFeedbackBody } from "./feedback";

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'Backend Assessment API - Documentation',
      description: 'API that will be used by Minority Africa on their proposed plaform',
      termsOfService: 'https://minorityafrica.org/',
      contact: {
        name: 'Nosi Chefane',
        email: 'nosichefane@gmail.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Local Server',
      },
      {
        url: 'https://backend-assessment.onrender.com',
        description: 'Production Server',
      },
    ],
    tags: [
      {
        name: 'Stories',
      },
      {
        name: 'Users',
      },
      {
        name: 'Subscriber Feedback',
      }
    ],

    paths: {
        '/users': {
          post: createUser,
        },
        '/session': {
            post: loginUser,
          },
          '/share-story': {
            post: createStory
          },
          '/feedback': {
            post: createFeedback
          }
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
        schemas: {
          createUserBody,
          LoginUserBody,
          createStoryBody,
          createFeedbackBody
        },
      },
  };
  
  export { apiDocumentation };