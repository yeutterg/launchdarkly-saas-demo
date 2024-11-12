# LaunchDarkly Demo: Dental Office React App

This is a simple React app that demonstrates how to use LaunchDarkly feature flags to toggle a feature on and off. The feature in this example is an AI chatbot, powered by OpenAI, that can answer questions about dentistry.

## Setup

1. Clone the repo
2. Install Node.js and npm
3. Run `npm install` to install the dependencies
4. Duplicate `.env.sample` and rename it `.env.local`
5. Within LaunchDarkly, create a new feature flag with the key `chatbotEnabled`, then add the Client-side ID to the `.env.local` file. The Client-side ID can be found in the LaunchDarkly dashboard > Project Settings > Environent > click ... next to Production > Client-side ID
6. (Optional) Go to https://platform.openai.com/api-keys and create an API key. Add your OpenAI API key to the `.env.local` file. You will need to add some funds to your OpenAI account to use the API.
7. Run `npm run dev` to start the development server
8. Open the app in your browser at the localhost URL provided in the terminal
9. Interact with the app and chatbot. Use the LaunchDarkly flag to instantly toggle the chatbot on and off.
