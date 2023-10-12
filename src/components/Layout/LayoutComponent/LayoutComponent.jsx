import { ToastContainer } from 'react-toastify'
import BreadCrumbs from '@/components/BreadCrumbs'
import Header from '@/components/Layout/Header'
import Footer from '../Footer'
import Portal from '@/HOC/Portal'
import CookieComponent from '@/components/CookieComponent/CookieComponent'
import ReduxProvider from '@/store/ReduxProvider'
// import SnackbarWrapper from '@/components/SnackbarWrapper/SnackbarWrapper'

export default function LayoutComponent({ children }) {
  return (
    <ReduxProvider>
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
      {/* <SnackbarWrapper /> */}
      {children}
      <Footer />
      <Portal>
        <CookieComponent />
      </Portal>
    </ReduxProvider>
  )
}
