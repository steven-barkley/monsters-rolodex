import { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Local state

  constructor() {
    super();
    //this.state is always a json object
    //object has { key : value} pairs
    this.state = {
      monsters: [],
    };
    console.log( 'constructor' )
  }

  //Where do I get the list? 
  //How do I get the list?

  // React give use a method to update State
  // this.setState()

  // example of setState function - this.setState(() => {}, () => {}) second is a callback and only run after the first is applied
  componentDidMount() {
    console.log( 'component did mount' );
    fetch( 'https://jsonplaceholder.typicode.com/users' )
      .then( response => response.json() )
      .then( ( users ) => this.setState( () => {
        return { monsters: users }
      },
        () => {
          console.log( this.state );
        }
      ) );
  }


  render() {
    console.log( 'render' );
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={ ( event ) => {

          console.log( event.target.value );
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monsters.filter( ( monster ) => {
            return monster.name.toLocaleLowerCase().includes( event.target.value );

          } );

          this.setState( () => {
            return { monsters: filteredMonsters }
          } )
        } } />
        { this.state.monsters.map( ( monster ) => {
          return <div key={ monster.id }>
            <h1>{ monster.name }</h1>
          </div>
        } )
        }
      </div>
    );
  }

};

export default App;
