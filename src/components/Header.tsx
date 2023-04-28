import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { device } from '../styles/media';
import LogoutPopUp from './LogoutPopUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { users } = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState<boolean>(false);

  return (
    <Container>
      <Title
        onClick={() => {
          navigate('/');
        }}
      >
        Todo
      </Title>
      <UserInfo>
        <UserName>{users?.name}</UserName>
        <UserImage
          src={users?.file as string}
          alt='User'
          onClick={() => setShowLogout(!showLogout)}
        />
      </UserInfo>
      {showLogout && <LogoutPopUp />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
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
    cursor: pointer;
  }

  @media ${device.laptopL} {
    font-size: 36px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${device.tablet} {
    gap: 12px;
  }

  @media ${device.laptopL} {
    gap: 20px;
  }
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
    cursor: pointer;
  }

  @media ${device.laptopL} {
    width: 68px;
    height: 68px;
  }
`;

export default Header;
