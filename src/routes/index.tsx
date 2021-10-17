import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'

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
