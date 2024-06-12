import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DocumentationPage from './components/DocumentationPage';
import './App.css';  // Importing the CSS file

const App = () => {
  return (
    <div>
      <header>
        <h1>CitizenDocs</h1>
      </header>
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/documentation/:username" component={DocumentationPage} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;
