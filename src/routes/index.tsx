import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from '../pages/register/components/register'
import getStarted from '../pages/getStarted'
import Home from '../pages/home'
import Login from '../pages/login'
import ActivationCode from '../pages/activationCode'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/get-started" component={getStarted} />
      <Route exact path="/register/customer" component={Register} />
      <Route exact path="/register/company" component={Register} />
      <Route exact path="/activation-code" component={ActivationCode} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
    </Switch>
  </Router>
)
export default RouterComponent
