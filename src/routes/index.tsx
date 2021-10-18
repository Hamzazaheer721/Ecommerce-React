import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import getStarted from '../pages/getStarted'
import Home from '../pages/home'
import Login from '../pages/login'

const RouterComponent = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/get-started"
          component={getStarted}
        />
      </Switch>
    </Router>
  </div>
)
export default RouterComponent
