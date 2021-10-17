import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'

const RouterComponent = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </div>
)
export default RouterComponent
