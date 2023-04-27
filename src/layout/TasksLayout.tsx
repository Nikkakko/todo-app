import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const TasksLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffff;
  width: 100%;
  min-height: 100vh;
`;

export default TasksLayout;
