import { FC, lazy, memo, Suspense } from 'react'
import Loader from '../../components/loader'

const LazyView: FC = lazy(() => import('./view'))

const businessProfile = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
))

export default businessProfile
