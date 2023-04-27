import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import Todos from '../components/Todos';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTask } from '../features/tasksSlice';

type Inputs = {
  task: string;
};

const TodoTasks = () => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector(state => state.tasks);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(tasks);

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
          placeholder='Add Your Daily Tasks'
          {...register('task', { required: 'Required' })}
          padding='12px 16px'
        />

        <Button
          title='Add'
          onClick={handleSubmit(onSubmit)}
          hoverColor='#000'
        />
      </Form>

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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  padding: 0 24px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #000;
  letter-spacing: 0px;
  text-align: center;
  text-transform: capitalize;
`;

export default TodoTasks;
