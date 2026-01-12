
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Could not find root element '#root'.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("App Crash during render:", error);
    rootElement.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#022c22; color:white; font-family:sans-serif; text-align:center; padding:20px;">
        <h1 style="color:#a3e635;">Mount Huayhuash is Loading...</h1>
        <p>The mountain trail is being prepared. Please refresh the page.</p>
        <button onclick="window.location.reload()" style="padding:10px 20px; background:#a3e635; color:#022c22; border:none; border-radius:10px; font-weight:bold; cursor:pointer;">Retry Connection</button>
      </div>
    `;
  }
}
