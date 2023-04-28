import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logOut } from '../features/userSlice';
import Button from './Button';
import { device } from '../styles/media';

const LogoutPopUp = () => {
  const { users } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Title>{users?.name}</Title>
      <Button
        title='Logout'
        onClick={() => dispatch(logOut())}
        hoverColor='#000'
        padding='16px 22px 15px 22px'
        fontSize='32px'
      />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  z-index: 999;

  @media ${device.tablet} {
    width: 150px;
    height: 100px;
    align-items: flex-start;
  }

  @media ${device.laptopL} {
    width: 250px;
    height: 150px;
    padding: 16px;
    top: 98px;
  }

  @media ${device.desktop} {
    width: 300px;
    height: 200px;
  }
`;

const Title = styled.h1`
  font-size: 14px;
  color: #000;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.laptopL} {
    font-size: 22px;
  }
`;

export default LogoutPopUp;
