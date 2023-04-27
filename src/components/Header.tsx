import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';

const Header = () => {
  const { users } = useAppSelector(state => state.user);

  return (
    <Container>
      <Title>Todo</Title>
      <UserInfo>
        <UserName>{users?.name}</UserName>
        <UserImage src={users?.file as string} alt='User' />
      </UserInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 12px 24px;
  background-color: #000;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #fff;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserName = styled.span`
  font-size: 14px;
  color: #fff;
  letter-spacing: 0px;
  text-align: center;
  text-transform: capitalize;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  object-fit: cover;
`;

export default Header;
