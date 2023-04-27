import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <RootLayoutContainer>
      <Outlet />
    </RootLayoutContainer>
  );
};

const RootLayoutContainer = styled.div``;

export default RootLayout;
