import { Navigate } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import { useTypeSelector } from '../hooks/redux';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  // const user = useTypeSelector((state) => state.tokenReducer.token);
  const user = '123';

  if (!user) {
    return <Navigate to="/register" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
} as InferProps<Props>;
