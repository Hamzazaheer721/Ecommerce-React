import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Welcome from '../pages/welcome';

const RouterComponent = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </div>
)
export default RouterComponent
