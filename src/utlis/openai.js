import OpenAI from 'openai';
import { API_OPTIONS, OPENAI_KEY } from './constants';

console.log(API_OPTIONS)

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

// const response = await openai.responses.create({
//   model: 'gpt-4o',
//   instructions: 'You are a coding assistant that talks like a pirate',
//   input: 'Are semicolons optional in JavaScript?',
// });


// console.log(response.output_text);

// const completion = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       { role: 'developer', content: 'Talk like a pirate.' },
//       { role: 'user', content: 'Are semicolons optional in JavaScript?' },
//     ],
//   });
  
//   console.log(completion.choices[0].message.content);

export default openai;
