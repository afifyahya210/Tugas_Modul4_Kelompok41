import './App.css';
import React, { useState } from 'react';
import UserContext from './contexts/UserContext';
import HomePageFunctional from './components/HomePageFunctional';

function AppFunctional() {
  const [appState, setAppState] = useState({
    user: {
      name: 'Kelompok 41',
    },
    withHomePage: false,
  });

  console.log('app functional render', appState);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        <UserContext.Provider
          value={{
            value: {
              ...appState.user,
            },
            setter: (newValue) => {
              setAppState((current) => {
                console.log('current state', current);
                console.log('new value', newValue);

                return {
                  ...current,
                  user: newValue,
                };
              });
            },
          }}
        >
          <>
            {appState.withHomePage ? <HomePageFunctional /> : null}
            <button
              onClick={() => {
                setAppState((current) => ({
                  ...current,
                  withHomePage: !current.withHomePage,
                }));
              }}
            >
              {appState.withHomePage ? 'Hilangkan' : 'Tampilkan'} HomePage
            </button>
          </>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default AppFunctional;
