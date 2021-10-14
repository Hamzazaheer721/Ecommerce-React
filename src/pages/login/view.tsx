import { FC, memo } from 'react';
import LoginComponent from '../../components/login';

const ViewComponent: FC = memo((props) => (
  <LoginComponent {...props} />
))

export default ViewComponent;
