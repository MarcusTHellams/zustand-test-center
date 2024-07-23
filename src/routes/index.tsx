import { createBrowserRouter } from 'react-router-dom';

import { MyTestCenter } from '@/createTestCenter';

import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/',
    element: <MyTestCenter />,
  },
]);
