import React from 'react';
import { idText } from 'typescript';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

async function injectTheScript3() {
  let queryOptions = { active: true, currentWindow: true };

  let [tab] = await chrome.tabs.query(queryOptions);

  chrome.storage.sync.set({ currentURL: tab.url });

  chrome.runtime.reload();
  await chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    files: ['contentScript.bundle.js'],
  });
}

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={injectTheScript3}>Hello</button>
      </header>
    </div>
  );
};

export default Popup;
