import { Navigate, useRoutes } from 'react-router-dom';
import { ProtectedRoute } from './utils/ProtectedRoute';

import LoginOrRegister from './pages/LoginOrRegister';
import MainPage from './pages/MainPage';
import PartnerPage from './pages/PartnerPage';

const Routes = () => {
  const route = useRoutes([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      ),
    },
    { path: 'partner', element: <PartnerPage /> },
    {
      path: 'register',
      element: <LoginOrRegister />,
    },
  ]);

  return route;
};

export default Routes;
