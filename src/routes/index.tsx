import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';

const RouterComponent = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </div>
)
export default RouterComponent
