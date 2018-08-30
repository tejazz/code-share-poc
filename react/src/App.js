import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { fetchTasks, addTask, deleteTask } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: ''
    };
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  handleTask = (e) => {
    this.setState({
      currentTask: e.target.value
    });
  };

  deleteTask(id) {
    this.props.deleteTask(id);
  }

  submitTask() {
    let newTask = {
      id: new Date().getTime(),
      value: this.state.currentTask
    };

    this.props.addTask(newTask);

    this.setState({
      currentTask: ''
    });
  };

  renderTasks = (item) => {
    return (
      <div key={item.id} className='listItem'>
        <p>
          {item.value}
          <button className='deleteBtn' onClick={() => this.deleteTask(item.id)}>DELETE</button>
        </p>
      </div>
    );
  }

  render() {
    console.log(this.state);

    return (
      <div>
        Code Sharing POC
        <br />
        <input type='text' placeholder='Enter task to be added' className='inputTab' onChange={this.handleTask} value={this.state.currentTask} />
        <button className='addBtn' onClick={() => this.submitTask()}>ADD</button>
        {/* render task list here */}
        {(!this.props.tasks) ? (<div>Fetching tasks...</div>) : ((this.props.tasks.length === 0) ? (<div>No tasks available</div>) : this.props.tasks.map((item) => this.renderTasks(item)))}
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks
  };
}

export default connect(mapStateToProps, { fetchTasks, addTask, deleteTask })(App);