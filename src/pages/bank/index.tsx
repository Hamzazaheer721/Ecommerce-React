import { FC, memo, lazy, Suspense } from 'react'
import Loader from '../../components/loader'

const LazyView: FC = lazy(() => import('./view'))

const Bank = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
))

export default Bank
