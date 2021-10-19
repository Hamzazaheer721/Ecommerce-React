import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from '../pages/register/components/register'
import getStarted from '../pages/getStarted'
import Home from '../pages/home'
import Login from '../pages/login'

const RouterComponent = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/get-started" component={getStarted} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  </div>
)
export default RouterComponent
