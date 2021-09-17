
import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import UserContext from './contexts/UserContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Kelompok 41',
      },
      withHomePage: false,
    };
  }

  render() {
    console.log('app render', this.state);

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
                ...this.state.user,
              },
              setter: (newValue) => {
                this.setState((current) => {
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
              {this.state.withHomePage ? <HomePage /> : null}
              <button
                onClick={() => {
                  this.setState((current) => ({
                    ...current,
                    withHomePage: !current.withHomePage,
                  }));
                }}
              >
                {this.state.withHomePage ? 'Hilangkan' : 'Tampilkan'} HomePage
              </button>
            </>
          </UserContext.Provider>
        </header>
      </div>
    );
  }
}

export default App;
