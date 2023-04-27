import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

type Props = {
  children: JSX.Element;
};

function Protected({ children }: Props) {
  const { users } = useAppSelector(state => state.user);
  if (!users) {
    return <Navigate to='/' replace />;
  }

  return children;
}

export default Protected;
