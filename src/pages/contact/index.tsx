import { FC, lazy, memo, Suspense } from 'react'
import Loader from '../../components/loader'

const LazyView: FC = lazy(() => import('./view'))
const Contact = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
))

export default Contact
