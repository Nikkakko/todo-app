import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { Home, NotFound, SignIn } from './pages';
import { TodoTasks } from './pages';
import TasksLayout from './layout/TasksLayout';
import Protected from './components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/tasks' element={<TasksLayout />}>
        <Route
          index
          element={
            <Protected>
              <TodoTasks />
            </Protected>
          }
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
