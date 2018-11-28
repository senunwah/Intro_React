import React from "react";
import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    todos: [
      "Wake Up from the Bed",
      "Brush my teeth",
      "Have my Bath",
      "Eat some food"
    ]
  };

  updateTodoList = todo => {
    let todolist = [...this.state.todos];
    todolist.push(todo);

    this.setState({
      todos: todolist
    });
  };

  deleteFromTodos = index => {
    // alert(index)
    let updatedTodo = this.state.todos.filter((item, i) => {
      return i !== index;
    });

    this.setState({
      todos: updatedTodo
    });
  };

  render() {
    return (
      <div>
        <List todolist={this.state.todos} deleteTodo={this.deleteFromTodos} />
        <Form update={this.updateTodoList} />
      </div>
    );
  }
}

export default App;
