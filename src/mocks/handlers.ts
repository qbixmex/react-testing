import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/users',
    (request, response, context) => {
      return response(context.status(200), context.json([
        { 
          id: 'abc-123',
          name: 'Stan Lee'
        },
        { 
          id: 'cde-567',
          name: 'Elon Musk'
        },
        { 
          id: 'fgh-789',
          name: 'Mark Suckerberg'
        },
      ]));
    }
  ),
];