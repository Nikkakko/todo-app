import styled from 'styled-components';
import { TodoStarter } from '../assets/svgs';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useAppSelector } from '../app/hooks';

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
`;

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0px;
  text-align: center;

  max-width: 150px;
`;

export default Home;
