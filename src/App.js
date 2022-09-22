import React, { Component } from "react";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Выучить основы React", completed: true },
      { id: "id-2", text: "Разобраться с React Router", completed: false },
      { id: "id-3", text: "Пережить Redux", completed: false },
      { id: "id-4", text: "Попробовать React Hooks", completed: false },
    ],
  };
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
  toggleComleted = (todoId) => {
    console.log(todoId);

    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  formSubmitHandler = (data) => {
    console.log(data);
  };

  // handleNameChange = (event) => {
  //   console.log("event.target.value", event.target.value);
  //   console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleTagChange = (event) => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const complitedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    console.log(complitedTodos);
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        {/* <h1>Состояние компонента</h1> */}
        {/* <Counter initialValue={undefined} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {complitedTodos}</p>
        </div>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleComleted}
        />
      </>
    );
  }
}

export default App;
