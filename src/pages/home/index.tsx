import { FC, lazy, Suspense } from 'react';
import Loader from '../../components/loader';

const LazyView = lazy(() => import('./view'))

const Home: FC<{}> = (props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
)

export default Home;
