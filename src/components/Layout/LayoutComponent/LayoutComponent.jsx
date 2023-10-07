// import { ToastContainer } from 'react-toastify'
// import ReduxProvider from '@/store/ReduxProvider'
// import { NotFoundProvider } from '@/contexts/NotFoundContext/NotFoundContext'
import { ToastContainer } from 'react-toastify'
import BreadCrumbs from '@/components/BreadCrumbs'
import Header from '@/components/Layout/Header'
import Footer from '../Footer'
import Portal from '@/HOC/Portal'
import CookieComponent from '@/components/CookieComponent/CookieComponent'
// import ReduxProvider from '@/store/ReduxProvider'
// import CookieComponent from '@/components/CookieComponent/CookieComponent'
// import Portal from '@/HOC/Portal'
// import Footer from '../Footer'
// import BreadCrumbs from '@/components/BreadCrumbs'

export default function LayoutComponent({ children }) {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <ToastContainer
        position='bottom-right'
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {children}

      <Footer />
      <Portal>
        <CookieComponent />
      </Portal>
    </>
  )
}
