import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // useState hook to maintain the count state
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <div style={styles.counter}>
        <button style={styles.button} onClick={decrement}>-</button>
        <span style={styles.count}>{count}</span>
        <button style={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    fontSize: '1.5rem',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  count: {
    fontSize: '2rem',
    margin: '0 20px',
  },
};

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
