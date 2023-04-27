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
        <DoneBg>
          <Image src={DoneIcon} alt='Done' onClick={handleDone} />
        </DoneBg>
        <DeleteBG>
          <Image src={DeleteIcon} alt='Delete' onClick={handleDelete} />
        </DeleteBG>
      </Icons>
    </Container>
  );
};

const Container = styled.div<{
  isCompleted: boolean;
}>`
  background-color: #000;
  &:first-of-type {
    margin-top: 32px;
  }
  margin-top: 16px;
  opacity: ${({ isCompleted }) => (isCompleted ? '7%' : '1')};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const DoneBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 37px;
  height: 37px;
  right: 37px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-radius: 4px;
  &:hover {
    background-color: #5efc8d;
  }
`;

const DeleteBG = styled(DoneBg)`
  right: 0px;
  &:hover {
    background-color: #fc5e5e;
  }
`;

export default Todos;
