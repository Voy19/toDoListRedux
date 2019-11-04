import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ToDoAdd = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-around;
  align-items: center;
`;

const ToDoAddInput = styled.input`
  width: 70%;
  height: 40px;
  padding-left: 10px;
  border-radius: 20px;
`;

const ToDoAddButton = styled.button`
  cursor: pointer;
  width: 20%;
  border: none;
  border-radius: 20px;
  height: 40px;

  &:hover {
    background-color: green;
    transition: 0.4s ease;
    font-weight: 900;
  }
`;

class ToDoAddNewList extends React.Component {
  maxId = 100;

  addNewItem = value => {
    if (value === "") {
      return null;
    } else {
      const newList = {
        text: value,
        important: false,
        active: true,
        id: this.maxId++
      };
      this.props.addNewItem(newList);
    }
  };

  onChangeInput = event => {
    this.props.onChangeInput(event.target.value);
  };

  onHandleInput = () => {
    this.props.onHandleInput();
  };

  render() {
    const { navigation } = this.props.store;
    return (
      <ToDoAdd>
        <ToDoAddInput
          type="text"
          value={navigation.addValue}
          onChange={this.onChangeInput}
        />
        <ToDoAddButton
          onClick={() => {
            this.addNewItem(navigation.addValue);
            this.onHandleInput();
          }}
        >
          add
        </ToDoAddButton>
      </ToDoAdd>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    addNewItem: value => {
      dispatch({ type: "ADD_ITEM", payload: value });
    },
    onHandleInput: () => {
      dispatch({ type: "CLEAR_ADD_INPUT" });
    },
    onChangeInput: value => {
      dispatch({ type: "CHANGE_ADD_INPUT", payload: value });
    }
  })
)(ToDoAddNewList);
