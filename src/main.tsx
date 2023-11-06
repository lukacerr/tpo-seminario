import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/joy/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PocketbaseWrapper from './pocketbase.config';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <PocketbaseWrapper>
          <App />
        </PocketbaseWrapper>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
