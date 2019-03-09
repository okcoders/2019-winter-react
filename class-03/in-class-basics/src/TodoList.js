import React from 'react';
import styled, { css } from 'styled-components';


const marginReset = css`
  margin: 0;
  padding: 0;
`;

const Heading = styled.h1`
  font-size: 1.5em;
  color: ${(props) => props.theme.headingBlack};
  ${marginReset}
  padding-bottom: .5em;
`;

const TodoInput = styled.input`
  padding: 6px;
  border: 1px solid ${(props) => props.theme.bodyBlack};
  border-radius: 3px;
  color: ${(props) => props.theme.headingBlack};
  &:focus {
    outline: none;
    border-color: red;
  }
`;

const TodosList = styled.ul`
  ${marginReset}
  list-style: none;
`;

const TodosListItem = styled.li`
  ${marginReset}
  padding: 6px 6px 12px;
  border-bottom: 1px solid ${(props) => props.theme.bodyBlack};
  color: ${(props) => props.theme.headingBlack};
`;

function TodoList(props) {

  return (
    <>
      <Heading>To Dos</Heading>
      <form>
        <TodoInput type="text" />
      </form>
      <TodosList>
        <TodosListItem>Learn React</TodosListItem>
        <TodosListItem>Build a thing</TodosListItem>
        <TodosListItem>???</TodosListItem>
        <TodosListItem>Profit</TodosListItem>
      </TodosList>
    </>
  )
}

export default TodoList;