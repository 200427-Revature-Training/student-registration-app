import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './components/architecture/header-component/header.component';
import { ContentComponent } from './components/architecture/content-component/content.component';

/*
  In React all templates must have a single root tag
*/
function App() {
  return (
      <React.Fragment>
        <HeaderComponent />
        <ContentComponent />
      </React.Fragment>
  );
}

export default App;
