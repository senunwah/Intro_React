import React from "react";
import "./styles.css";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todolist.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => this.props.deleteTodo(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
