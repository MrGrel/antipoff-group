import { Navigate } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  const user = '123';

  if (!user) {
    return <Navigate to="/register" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
} as InferProps<Props>;
