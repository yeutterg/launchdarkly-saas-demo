# LaunchDarkly Demo: Dental Office React App

This is a simple React app that demonstrates how to use LaunchDarkly feature flags to toggle a feature on and off. The feature in this example is an AI chatbot, powered by OpenAI, that can answer questions about dentistry.

This is just a demo app with only a frontend. If you deploy this app to production, you will leak your OpenAI API Key and LaunchDarkly Client-side ID to anyone with browser access to the app. So please only use this app for demo purposes in a local environment.

LaunchDarkly is initialized in `src/main.tsx`. The LaunchDarkly feature flag is implemented in `src/components/Layout.tsx`. The call to OpenAI is implemented in `src/components/Chatbot.tsx`.

A demo video is available [here](https://www.youtube.com/watch?v=Eh1wAMaeYZY).

## Prerequisites

- [Node.js and npm installed locally](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- A [LaunchDarkly account](https://launchdarkly.com/)
- (Optional)An [OpenAI Platform account](https://platform.openai.com/api-keys)

## Setup

1. Clone the repo
2. [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. In a terminal window, `cd` to the directory of the cloned repo, then run `npm install` to install the dependencies
4. Duplicate `.env.sample` and rename it `.env.local`
5. Within LaunchDarkly, create a new feature flag within your Test environment with the key `chatbotEnabled`, then add the Client-side ID to the `.env.local` file. The Client-side ID can be found in the LaunchDarkly dashboargit statusd > click ... next to Test > Client-side ID
6. (Optional) Go to https://platform.openai.com/api-keys and create an API key. Add your OpenAI API key to the `.env.local` file. You will need to add some funds to your OpenAI account to use the API
7. Run `npm run dev` to start the development server
8. Open the app in your browser at the localhost URL provided in the terminal
9. Interact with the app and chatbot. Use the LaunchDarkly feature flag to instantly toggle the chatbot on and off

## Triggering a feature flag update

In addition to toggling the feature flag on and off in the LaunchDarkly dashboard, you can also trigger a feature flag update via a webhook if you are on the LaunchDarkly Enterprise plan.

Follow the steps in [this LaunchDarkly guide](https://docs.launchdarkly.com/home/releases/triggers-create) to set up a trigger webhook for your feature flag.