import React, { Component } from 'react';
import Greeting from "./Greeting";

const AppGreeting = ({ greeting, onSetGreeting }) => {

  const onChange = ({ target: { value } }) => onSetGreeting(value);

  return (
    <div>
      <h1>{greeting}</h1>

      <div>
        <label>
          Set greeting here: 
          <input onChange={onChange} />
        </label>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <div>
          Greeting with render callback
          <Greeting render={AppGreeting}/>
        </div>
      
        <br/>
        <div>
          Greeting with children
          <Greeting>
            <AppGreeting />
          </Greeting>
        </div>
      </div>
    );
  }
}

export default App;
