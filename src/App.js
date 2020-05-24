import React from 'react';
import logo from './logo.svg';
import './App.css';

import ItemsList from './components/ItemsList';

class App extends React.Component {
  state = {
    items: [],
    value: ''
  };
  
  addItem = event => {
    event.preventDefault();
    
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  }

  deleteLastItem = event => {
    this.setState(prevState => ({ 
      items: this.state.items.slice(0, -1) 
    }));
  }

  inputIsEmpty = () => {
    return this.state.value === '';
  }

  noItemsFound = () => {
    return this.state.items.length === 0;
  }

  handleChange = event => {
    this.setState({ 
      value: event.target.value
    });
  }

  render() {
    const {items, value} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <input type="text"
                 placeholder="Enter New Item"
                 value={value}
                 onChange={this.handleChange} />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>Delete Last Item</button>

        <ItemsList items={items} />
      </div>
    );
  }
}

export default App;
