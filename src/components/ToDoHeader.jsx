import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #f0f0f0;
`;

const InputSearch = styled.input`
  width: 80%;
  height: 40px;
  background-color: #000;
  border-radius: 20px;
  box-sizing: border-box;
  padding-left: 10px;
  color: #fff;
`;

class ToDoHeader extends React.Component {
  onSearchList = event => {
    this.props.onSearchList(event.target.value);
  };

  render() {
    return (
      <Header>
        <InputSearch type="text" onChange={e => this.onSearchList(e)} />
      </Header>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onSearchList: value => {
      dispatch({ type: "SEARCH_ITEM", payload: value });
    }
  })
)(ToDoHeader);
