import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { device } from '../styles/media';

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
  padding: 8px 24px;
  background-color: #000;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    padding: 15px 28px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  color: #fff;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    font-size: 36px;
  }
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

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    font-size: 22px;
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  object-fit: cover;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    width: 68px;
    height: 68px;
  }
`;

export default Header;
