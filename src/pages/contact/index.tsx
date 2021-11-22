import { FC, lazy, memo, Suspense } from 'react'
import Loader from '../../components/loader'
import ContactFormErrorProvider from '../../context/contactFormErrors.context'

const LazyView: FC = lazy(() => import('./view'))
const Contact = memo((props) => (
  <Suspense fallback={<Loader />}>
    <ContactFormErrorProvider>
      <LazyView {...props} />
    </ContactFormErrorProvider>
  </Suspense>
))

export default Contact
