import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { MyFeature: [] };
  }

  handleClick() {
    import('./MyFeature').then(module => {
      console.info(module.default);
      this.setState({ MyFeature: [module.default()] });
    });
  }

  render() {
    const { MyFeature } = this.state;
    return (
      <div className={styles.app}>
        <h2>Hello, my name is herve </h2>
        <button onClick={() => this.handleClick()}>Test</button>
        {MyFeature}
      </div>
    );
  }
}

export default App;
