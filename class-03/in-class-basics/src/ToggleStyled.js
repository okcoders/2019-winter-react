import React from 'react';
import { useToggle } from './useToggle';
import styled from 'styled-components';

const ToggleContainer = styled.label`
  border: 3px solid ${props => props.checked ? 'cornflowerblue' : 'chocolate'};
  padding: 24px;
  color: #222;
  box-sizing: border-box;
`;

function Toggle() {

  const toggle = useToggle();

  return (
    <ToggleContainer checked={toggle.checked}>
      <input type="checkbox" {...toggle} />
      {toggle.checked ? 'I\'m on' : 'I\'m off'}
    </ToggleContainer>
  );
}

export default Toggle;