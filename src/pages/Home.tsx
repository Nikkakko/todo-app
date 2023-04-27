import styled from 'styled-components';
import { TodoStarter } from '../assets/svgs';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useAppSelector } from '../app/hooks';
import { device } from '../styles/media';

const Home = () => {
  const navigate = useNavigate();
  const { users } = useAppSelector(state => state.user);

  const handleGetStarted = () => {
    if (users) {
      navigate('/tasks');
      return;
    }
    navigate('/signin');
  };

  return (
    <HomeContainer>
      <Wrapper>
        <img src={TodoStarter} alt='Todo Starter' />
        <Heading>Keep Track of Daily Tasks in Life</Heading>
        <Button
          title='Get Started'
          onClick={handleGetStarted}
          hoverColor='#ffffff'
          padding='16px 58px 15px 59px'
        />
      </Wrapper>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 32px;

  img {
    width: 40px;
  }

  padding: 74px 32px 160px 32px;

  @media ${device.tablet} {
    img {
      width: 80px;
    }
  }

  @media ${device.laptopL} {
    padding: 90.3px 0px 0px 0px;
    gap: 46px;

    img {
      width: 90.36px;
    }

    button {
      margin-top: 149px;
    }
  }
`;

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0px;
  text-align: center;

  max-width: 150px;

  @media ${device.tablet} {
    max-width: 300px;

    font-size: 18px;
  }

  @media ${device.laptopL} {
    max-width: 100%;
    font-size: 54px;
  }
`;

export default Home;
