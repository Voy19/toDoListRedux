import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ToDoNotList = styled.p`
  text-align: center;
  padding: 20px 0;
`;

const ToDoListLi = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50px;
  color: #fff;
  list-style: none;
  border-bottom: 1px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ToDoListText = styled.span`
  padding-left: 2%;
  width: 74%;
  color: green;
  font-weight: ${props => (props.important ? 900 : null)};
  text-decoration: ${props => (props.done ? "line-through" : "none")};
  font-size: ${props => (props.important ? "20px" : "16px")};
`;

const ToDoListTextSpan = styled.span`
  color: red;
`;

const ToDoListButtons = styled.div`
  display: flex;
  padding-right: 2%;
  width: 25%;
`;

const ToDoListImportant = styled.div`
  color: #000;
  height: 25px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(28, 175, 28, 0.466);
  border-radius: 10px 0px 0 10px;

  &:hover {
    background-color: rgba(28, 202, 28, 0.705);
  }
`;

const ToDoListDelete = styled(ToDoListImportant)`
  background-color: rgba(150, 4, 4, 0.726);
  border-radius: 0 10px 10px 0;

  &:hover {
    background-color: rgba(173, 25, 25, 0.918);
  }
`;

const NothingFound = styled(ToDoNotList)``;

class ToDoList extends React.Component {
  onDeleteItem = (event, id) => {
    event.stopPropagation();
    const { toDoList } = this.props.store;
    const index = toDoList.findIndex(item => item.id === id);
    this.props.onDeleteItem(index);
  };

  onImportantItem = (event, id) => {
    event.stopPropagation();
    const { toDoList } = this.props.store;
    const index = toDoList.findIndex(item => item.id === id);
    this.props.onImportantItem(index);
  };

  onDoneItem = id => {
    const { toDoList } = this.props.store;
    const index = toDoList.findIndex(item => item.id === id);
    this.props.onDoneItem(index);
  };

  render() {
    const { toDoList, navigation } = this.props.store;

    const activeMenu = () => {
      let res = [];
      switch (navigation.activeButton) {
        case "active":
          res = toDoList.filter(item => item.active === true);
          break;
        case "done":
          res = toDoList.filter(item => item.active === false);
          break;
        default:
          res = toDoList;
      }
      return res;
    };

    const filterSearch = activeMenu().filter(
      item =>
        item.text.toLowerCase().indexOf(navigation.inputSearch.toLowerCase()) >
        -1
    );

    return (
      <div className="to-do-list">
        <ul>
          {activeMenu().length ? (
            <>
              {filterSearch.length ? (
                filterSearch.map(item => {
                  return (
                    <ToDoListLi
                      key={item.id}
                      important={item.important ? 1 : 0}
                      onClick={e => {
                        this.onDoneItem(item.id);
                      }}
                    >
                      <ToDoListText
                        important={item.important ? 1 : 0}
                        done={item.active ? 0 : 1}
                      >
                        <ToDoListTextSpan>{item.text}</ToDoListTextSpan>
                      </ToDoListText>
                      <ToDoListButtons>
                        <ToDoListImportant
                          onClick={e => this.onImportantItem(e, item.id)}
                        >
                          !
                        </ToDoListImportant>
                        <ToDoListDelete
                          onClick={e => this.onDeleteItem(e, item.id)}
                        >
                          delete
                        </ToDoListDelete>
                      </ToDoListButtons>
                    </ToDoListLi>
                  );
                })
              ) : (
                <NothingFound>Nothing Found</NothingFound>
              )}
            </>
          ) : (
            <ToDoNotList>Add something...</ToDoNotList>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onDeleteItem: value => {
      dispatch({ type: "REMOVE_ITEM", payload: value });
    },
    onImportantItem: value => {
      dispatch({ type: "IMPORTANT_ITEM", payload: value });
    },
    onDoneItem: value => {
      dispatch({ type: "DONE_ITEM", payload: value });
    }
  })
)(ToDoList);
