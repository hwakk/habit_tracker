import React, { PureComponent } from "react";

class AddForm extends PureComponent {
  onAdd = () => {
    //input 값을 알아온다.
    let input = document.querySelector("#idHabit");
    //input 값을 props로 전달받은 함수에 보낸다.
    this.props.handleAdd(input.value);
    input.value = "";
  };

  //Todo
  onEnter = (e) => {
    if (e.keyCode === 13) {
      this.onAdd();
    }
  };

  render() {
    return (
      <div>
        <input
          className="add-input"
          id="idHabit"
          type="text"
          placeholder="Habit"
          onKeyUp={this.onEnter}
        />
        <button className="add-button" onClick={this.onAdd}>
          Add
        </button>
      </div>
    );
  }
}

// class AddForm extends Component {
//   inputRef = React.createRef();

//   onSubmit = event => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     this.inputRef.current.value = '';
//   }

//   render() {
//     return (
//       <form className="add-form" onSubmit={this.onSubmit}>
//         <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }

export default AddForm;
