import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ToDoToggle = styled.div`
  display: flex;
  height: 50px;
`;

const ToggleButton = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  align-items: center;
  height: 50px;
  width: 50%;
  background-color: ${props => (props.active ? "orange" : null)};
  font-weight: ${props => (props.active ? "900" : null)};
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    background-color: orange;
    transition: 0.4s ease;
    font-weight: 900;
  }
`;

class ToggleButtons extends React.Component {
  onHandleButton = value => {
    this.props.onHandleButton(value);
  };

  render() {
    const { navigation } = this.props.store;
    return (
      <ToDoToggle>
        <ToggleButton
          active={navigation.activeButton === "all" ? 1 : 0}
          onClick={() => this.onHandleButton("all")}
        >
          All
        </ToggleButton>
        <ToggleButton
          active={navigation.activeButton === "active" ? 1 : 0}
          onClick={() => this.onHandleButton("active")}
        >
          Active
        </ToggleButton>
        <ToggleButton
          active={navigation.activeButton === "done" ? 1 : 0}
          onClick={() => this.onHandleButton("done")}
        >
          Done
        </ToggleButton>
      </ToDoToggle>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onHandleButton: value => {
      dispatch({ type: "CHANGE_BUTTON", payload: value });
    }
  })
)(ToggleButtons);
