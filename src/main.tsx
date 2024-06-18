import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider, AppProvider } from '@/providers';

import App from './App';
import './globals.css';

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppProvider>
        <ThemeProvider defaultTheme="system" storageKey="space-ui-kit-theme">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
