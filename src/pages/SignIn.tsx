import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { AddPhotoSvg } from '../assets/svgs';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addUser } from '../features/userSlice';
import { useEffect } from 'react';

type Inputs = {
  name: string;
  file: FileList;
};

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(state => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    const file = data.file[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      dispatch(
        addUser({
          name: data.name,
          file: reader.result as string, // Store image as a base64 string
        })
      );
      navigate('/tasks');
    };
  };

  useEffect(() => {
    if (users) {
      navigate('/tasks');
    }
  }, [users, navigate]);

  return (
    <SignInContainer>
      <Wrapper>
        <Heading>Get Started</Heading>
        <AddPhoto>
          <Subtitle>add a photo</Subtitle>
          <PhotoButton htmlFor='file'>
            <img src={AddPhotoSvg} alt='Add Photo' />
          </PhotoButton>
          <Input
            id='file'
            type='file'
            {...register('file', {
              required: 'Required',
            })}
            error={errors.file && 'Please upload a photo'}
            padding='8px 12px'
          />
        </AddPhoto>

        <Form>
          <Label>fill in your name</Label>
          <Input
            type='text'
            {...register('name', {
              required: 'Required',
              minLength: 1,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder='Your Name'
            error={errors.name && 'Please enter a valid name'}
            padding='8px 12px'
          />
        </Form>

        <Button
          title='Sign In'
          hoverColor='#000'
          onClick={handleSubmit(onSubmit)}
        />
      </Wrapper>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px 32px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 4px;
  background-color: #fff;

  padding: 32px;
`;

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 14px;
  color: #000;
  letter-spacing: 0px;
  text-align: center;
`;

const AddPhoto = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

const Subtitle = styled.span`
  text-transform: lowercase;
  font-size: 12px;
  color: #000;
  letter-spacing: 0px;
  text-align: center;
`;

const Form = styled.form`
  margin-top: 32px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 32px;
`;

const Label = styled.label`
  text-transform: lowercase;
  font-size: 12px;
  color: #000;
  letter-spacing: 0px;
  text-align: center;
`;

const PhotoButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e6ebff;

  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export default SignIn;
