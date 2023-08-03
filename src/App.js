import React from 'react';
import useTheme from './UseTheme.hook.js';
import './style.css';

export default function App() {
  const [pageTheme, togglePageTheme] = useTheme();
  const pageStyle = pageTheme === 'light'? {
    backgroundColor: 'white',
    color: 'black'
  }:
  {
    backgroundColor: 'black',
    color: 'white'
  }
  return (
    <div style={pageStyle}>
      <h1>Click on toggle to toggle theme b/w Dark & Light</h1>
      <button onClick={togglePageTheme}>Click to Toggle</button>
    </div>
  );
}
