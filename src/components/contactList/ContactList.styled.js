import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const BookItem = styled.li`
  list-style: circle;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled(Button)({
  border: 0,
  marginBottom: 5,
  borderRadius: 3,
  color: 'white',
  height: 28,
  padding: '0 20px',
});