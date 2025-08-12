/*function Header() {
    return (
    <header>
        <h1>Gestor de Tareas</h1>
        <p>Bienvenido a tu aplicación de tareas en React 2025</p>
    </header>
    );
  }
export default Header;*/


import React, { Component } from 'react';
class TaskCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedTasks: 0
    };
  }
  handleIncrement = () => {
    this.setState({ completedTasks: this.state.completedTasks + 1 });
  };
  render() {
    return (
      <div>
        <h2>Tareas Completadas: {this.state.completedTasks}</h2>
        <button onClick={this.handleIncrement}>Marcar Tarea como Completada</button>
      </div>
    );
  }
}
export default TaskCounter;