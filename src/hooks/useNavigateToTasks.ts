import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
type User = {
  name: string;
  file: File | FileList | string;
};

type Users = User | null;

type NavigateType = ReturnType<typeof useNavigate>;

function useNavigateToTasks(users: Users, navigate: NavigateType) {
  useEffect(() => {
    if (users) {
      navigate('/tasks');
    }
  }, [users, navigate]);
}

export default useNavigateToTasks;
