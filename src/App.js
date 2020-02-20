import React, { Component } from 'react';
import Task from './Task';


class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        tasks: [
          {
            name: "Dishes",
            completed: false,
            created: new Date()
          },
          {
            name: "Feed the Dog",
            completed: true,
            created: new Date()
          }
        ]
      }

  }

  render() {

    
    return (
      <div className="App">
        {this.state.tasks.map((task, i) => {
          return <Task key={i} task={task} />
        })}
      </div>
    );
  }
}



export default App;
