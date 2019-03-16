import React from 'react';
import { Input, List } from 'antd';
import styled from 'styled-components';

const TodoInput = styled(Input)`
  font-size: 2em;
  padding: 32px;
`;

const Card = styled.div`
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const FlexCard = styled(Card)`
  display: flex;
`

function TodoList(props) {

  const data = [
    'Learn React',
    'Build a thing',
    '???',
    'Profit'
  ]

  return (
    <FlexCard>
      <h1>To Dos</h1>
      <form>
        <TodoInput type="text" />
      </form>
      <List
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </FlexCard>
  )
}

export default TodoList;