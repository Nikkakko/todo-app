import { FC } from 'react';
import styled from 'styled-components';
import { TasksState } from '../types';
import { DeleteIcon, DoneIcon } from '../assets/svgs';
import { useAppDispatch } from '../app/hooks';
import { removeTodo, setTodoStatus } from '../features/tasksSlice';

interface TodosProps {
  task: TasksState;
  IsCompleted: boolean;
}

const Todos: FC<TodosProps> = ({ task, IsCompleted }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeTodo({ id: task.id }));
  };

  const handleDone = () => {
    dispatch(setTodoStatus({ id: task.id }));
  };
  return (
    <Container isCompleted={IsCompleted}>
      <TasTitle>{task.title}</TasTitle>
      <Icons>
        <Done src={DoneIcon} alt='Done' onClick={handleDone} />
        <Delete src={DeleteIcon} alt='Delete' onClick={handleDelete} />
      </Icons>
    </Container>
  );
};

const Container = styled.div<{
  isCompleted: boolean;
}>`
  background-color: #000;
  opacity: ${({ isCompleted }) => (isCompleted ? '0.5' : '1')};
  margin-top: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TasTitle = styled.p`
  font-size: 14px;
  color: #fff;
  letter-spacing: 0px;
  text-align: center;
  text-transform: capitalize;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Done = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #5efc8d;
  }
`;

const Delete = styled.img``;

export default Todos;
