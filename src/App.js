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
          // return <div key={i}>{task.name} {task.completed}</div>
          return <Task key={i} name={task.name} completed={task.completed} task={task} />
        })}
      </div>
    );
  }
}





// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
