import { FC, lazy, memo, Suspense } from 'react'
import Loader from '../../components/loader'

const LazyView = lazy(() => import('./view'))

const StoreSettingsRoute: FC = memo(() => (
  <>
    <Suspense fallback={<Loader />}>
      <LazyView />
    </Suspense>
  </>
))

export default StoreSettingsRoute
