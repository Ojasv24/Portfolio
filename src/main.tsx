import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

// Enable CSS theme transitions only after initial paint is done,
// so the browser doesn't waste time computing transitions on first render
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.documentElement.classList.add('theme-ready');
  });
});
