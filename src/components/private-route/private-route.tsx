import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

const PrivateRoute = ({
  authorizationStatus,
  children,
}: PrivateRouteProps): JSX.Element => {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <div>Loading...</div>;
  }

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} replace />;
  }

  return children;
};

export default PrivateRoute;
