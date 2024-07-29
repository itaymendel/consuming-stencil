import React from 'react';
import '@frontend/stencil.examples.my-stencil-comp';
import logo from './logo.svg';
import './App.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-stencil-comp': MyStencilCompProps
    }
  }
}

interface MyStencilCompProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  first?: string,
  middle?: string,
  last?: string
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Bit component <my-stencil-comp first="First" middle=", middle" last=", last"></my-stencil-comp>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
