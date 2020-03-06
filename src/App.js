import React, { Component } from 'react';
import Task from './Task';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        tasks: []
      }
    
  }

  componentDidMount() {
    
    console.log(localStorage.getItem('tasks'));
    // if(localStorage.getItem('tasks')) {
    //   this.setState(() => {
    //     return JSON.parse(localStorage.getItem('tasks'))
    //   })
    // }
  }

  toggleCompleted(index) {
    this.setState((state) => {
      if(state.tasks[index]) {
        return state.tasks[index].completed = !state.tasks[index].completed;
      }
    });
  }

  addTask(task) {
    this.setState((state) => {
      return state.tasks.push(task);
    });
  }

  delete(index) {
    this.setState((state) => {
      return state.tasks.splice(index);
    });
  }



  render() {

    localStorage.setItem('tasks', this.state);
    
    return (
      <div class="App">
        <div class="col-md-8 offset-md-2 p-0 mt-4 pt-4">
          <h2 class="text-white mt-4 pt-4">
            Tasks
            <div class="input-group col-md-6 float-right">
              <form onSubmit={(e) => {
                e.preventDefault();
                const taskInput = document.getElementById('taskInput');
                  const task = {
                    name: taskInput.value,
                    completed: false,
                    created: new Date()
                  }
                  this.addTask(task)
                  taskInput.value = '';
              }}>
                <input type="text" id="taskInput" class="form-control" placeholder="Add task" aria-label="Add task" />
              </form>
            </div>
          </h2>
          <table class="table table-dark">
            <tbody>
              {this.state.tasks.map((task, i) => {
                return (
                  <Task 
                    key={i}
                    task={task}
                    index={i}
                    toggleCompleted={(index) => {
                      this.toggleCompleted(index)
                    }}
                    delete={(index) => {
                      this.delete(index)
                    }}
                  />)
              })}
            </tbody>
          </table>
          
        </div>
      </div>
    );
  }
}



export default App;
