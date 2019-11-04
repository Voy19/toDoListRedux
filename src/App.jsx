import React from "react";
import styled from "styled-components";
import ToDoHeader from "./components/ToDoHeader";
import ToggleButtons from "./components/ToggleButtons";
import ToDoList from "./components/ToDoList";
import ToDoAddNewList from "./components/ToDoAddNewList";
import "./App.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ToDoWrapper = styled.div`
  width: 500px;
  background-color: #000;
`;

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <ToDoWrapper>
            <ToDoHeader />
            <ToggleButtons />
            <ToDoList />
            <ToDoAddNewList />
          </ToDoWrapper>
        </Container>
      </div>
    );
  }
}
