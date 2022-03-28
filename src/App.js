import React from 'react';
import AppRouter from './routes/AppRouter';
import './app-style.css';

function App() {

  document.body.style = 'background: #f0f0f6';

  return (
    <main className="container-app">
      <AppRouter />
    </main>
  );
}

export default App;
