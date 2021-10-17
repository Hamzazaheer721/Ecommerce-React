import {
  FC, memo, Suspense, lazy
} from 'react'
import Loader from '../../components/loader'

const LazyView = lazy(() => import('./view'))

const LoginRoute: FC = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
))

export default LoginRoute
