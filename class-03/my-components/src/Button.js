import styled from 'styled-components';

function getBackgroundColor(props) {

  const { use, theme } = props;

  if (use && theme[use]) {
    return theme[use];
  }

  return '#222';
}

const Button = styled.button`
  color: white;
  padding: 12px 8px;
  border: none;
  background-color: ${props => getBackgroundColor(props)};
  border-radius: 3px;
`;

export default Button;