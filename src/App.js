import { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Local state

  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Linda', id: '12e1231e' },
        { name: 'Frank', id: '2343421s' },
        { name: 'Jacky', id: '23023493' },
        { name: 'Steven', id: '23904302' }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map( ( monster ) => {
            return <h1 key={ monster.id }>{ monster.name }</h1>
          } )
        }
      </div>
    );
  }

};

export default App;
