import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import '@fontsource/inter';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import PocketbaseWrapper from './pocketbase.config.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <PocketbaseWrapper>
        <App />
      </PocketbaseWrapper>
    </CssVarsProvider>
  </React.StrictMode>
);
