import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

(async () => {
  // Initialize the LaunchDarkly provider
  const LDProvider = await asyncWithLDProvider({
    clientSideID: import.meta.env.VITE_LD_CLIENT_ID || '', // Use the Vite environment variable
    context: {
      kind: 'user',
      key: 'example-user-key', // Unique user key
      name: 'Sandy', // Optional user name
    },
  });

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
  );
})();