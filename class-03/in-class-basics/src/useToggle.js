import { useState } from 'react';

export function useToggle() {
  const [checked, setCheck] = useState(false);

  function onClick() {
    setCheck(!checked);
  }

  return {
    checked,
    onClick
  }
}