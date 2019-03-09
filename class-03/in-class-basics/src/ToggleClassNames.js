import React from 'react';
import { useToggle } from './useToggle';

function Toggle() {

  const toggle = useToggle();

  return (
    <label>
      <input type="checkbox" {...toggle} />
      {toggle.checked ? 'I\'m on' : 'I\'m off'}
    </label>
  );
}

export default Toggle;