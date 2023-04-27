import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Not Found</h1>
      <Button title='Go to Home Page' onClick={() => navigate('/')}>
        Home Page
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  flex-direction: column;
  color: #fff;
`;

export default NotFound;
