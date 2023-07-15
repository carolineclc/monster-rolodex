import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state ={

      monsters : [
        {
          name: 'Linda',
          id : '1dw'
        },
         {
          name: 'Frank',
          id : '1d'
        },
        {
          name: 'Jacky',
          id : '1sw'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
