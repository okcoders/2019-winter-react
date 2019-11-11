import React from 'react';
import {Button} from '@material-ui/core';

const OutlinedButton = (props) => {
  return (
    <Button variant="outlined" {...props}>{props.children}</Button>
  );
}

export default OutlinedButton;
