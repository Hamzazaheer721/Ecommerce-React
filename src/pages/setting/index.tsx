import { FC, lazy, memo, Suspense } from 'react'
import Loader from '../../components/loader'

const LazyView = lazy(() => import('./view'))

const RegisterRoute: FC = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
))

export default RegisterRoute
