import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Join from './component/Join';
import Task from './component/Task';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Task />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
