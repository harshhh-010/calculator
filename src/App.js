import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calculator from './components/Calculator';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
