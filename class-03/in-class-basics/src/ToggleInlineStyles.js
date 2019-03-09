import React from 'react';
import { useToggle } from './useToggle';

function Toggle() {

  const toggle = useToggle();

  const styles = {
    border: `3px solid ${toggle.checked ? 'cornflowerblue' : 'chocolate'}`,
    padding: '24px',
    color: '#222',
    boxSizing: 'border-box',
  }

  return (
    <label style={styles}>
      <input type="checkbox" {...toggle} />
      {toggle.checked ? 'I\'m on' : 'I\'m off'}
    </label>
  );
}

export default Toggle;