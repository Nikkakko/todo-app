import styled from 'styled-components';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import Todos from '../components/Tasks';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTask } from '../features/tasksSlice';
import { device } from '../styles/media';

type Inputs = {
  task: string;
};

const TodoPage = () => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector(state => state.tasks);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    dispatch(addTask({ title: data.task }));
    // clear input field
    reset();
  };

  return (
    <Container>
      <Title>Add Your Daily Tasks</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          placeholder='my task'
          {...register('task', { required: 'Required' })}
          padding='12px 16px'
          paddingL='23px 0 22px 24px '
        />
        <Button
          title='Add'
          onClick={handleSubmit(onSubmit)}
          hoverColor='#000'
          padding='16px 22px 15px 22px'
          fontSize='32px'
        />
      </Form>
      <Error>
        {errors.task && errors.task.type === 'required' && 'Please add a task'}
      </Error>
      {!tasks.length && (
        <Title style={{ marginTop: '32px' }}>No Tasks Added</Title>
      )}

      {tasks.map(task => (
        <Todos key={task.id} task={task} IsCompleted={task.IsCompleted} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  padding: 0 24px;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  width: 100%;

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.laptopL} {
    width: 595px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  color: #000;
  letter-spacing: 0px;
  text-align: center;
  text-transform: capitalize;

  @media ${device.laptopL} {
    font-size: 42px;
  }
`;

const Error = styled.p`
  font-size: 14px;
  color: #ff0000;
  letter-spacing: 0px;
  text-align: center;
  text-transform: capitalize;
  margin-top: 8px;
`;

export default TodoPage;
