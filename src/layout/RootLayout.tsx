import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <RootLayoutContainer>
      <Outlet />
    </RootLayoutContainer>
  );
};

const RootLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export default RootLayout;
