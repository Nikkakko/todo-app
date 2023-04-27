import React from 'react';
import styled from 'styled-components';

const TodoTasks = () => {
  return (
    <Container>
      <Title>Add Your Daily Tasks</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export default TodoTasks;
