import React, { Component } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Habits from "./components/Habits";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // 할 일
    // state의 habits 배열을 가지고 온다
    let habits = [...this.state.habits];
    // habits 배열에서 해당 habit의 인덱스값을 가지고 온다.
    let index = habits.indexOf(habit);
    // 해당 habit의 count 값 변경
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    let habits = [...this.state.habits];
    let index = habits.indexOf(habit);
    if (habits[index].count > 0) {
      habits[index].count--;
    }
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    //할 일
    //state의 habits 배열 가지고 온다.
    let habits = [...this.state.habits];
    //{ id: 1, name: "Reading", count: 0 }
    //habit의 id값 만들기.
    const id = new Date().getTime();
    //input에서 전달받은 name으로 habit 객체를 만든다.
    let habit = { id: id, name: name, count: 0 };
    //habit 객체를 habits 배열에 추가한다.
    habits.push(habit);
    //state를 업데이트 한다.
    this.setState({ habits });

    // const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
    // this.setState({ habits });
  };

  handleReset = () => {
    //  this.setState({ habits: [] });
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar habits={this.state.habits.filter((item) => item.count > 0)} />
        <AddForm handleAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button className="habits-reset" onClick={this.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
