import React from "react";

class Form extends React.Component {
  state = {
    todo: ""
  };

  onInputChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  updateTodos = event => {
    event.preventDefault();
    if (this.state.todo != "") {
      this.props.update(this.state.todo.trim);
      this.setState({
        todo: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.updateTodos}>
        <input value={this.state.todo} onChange={this.onInputChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
