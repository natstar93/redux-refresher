import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './modules/counterReducer';
import CounterContainer from './modules/CounterContainer';
import './App.css';

let store = createStore(counterReducer, { number: 0 });
let state = store.getState();
console.log('state', state);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        />
      </Provider>
    );
  }
}

export default App;
