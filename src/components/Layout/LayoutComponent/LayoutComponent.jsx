import { ToastContainer } from 'react-toastify'
import dynamic from 'next/dynamic'
import StyledComponentsRegistry from '@/app/[locale]/registry'
import Header from '@/components/Layout/Header'
import GlobalStyle from '@/styles/globalStyles'
import ReduxProvider from '@/store/ReduxProvider'
import { NotFoundProvider } from '@/contexts/NotFoundContext/NotFoundContext'

export const DynamicBreadCrumbs = dynamic(
  () => import('@/components/BreadCrumbs').then((res) => res.default),
  {
    ssr: false,
  }
)
export const DynamicFooter = dynamic(
  () => import('@/components/Layout/Footer').then((res) => res.default),
  {
    ssr: false,
  }
)

export default function LayoutComponent({ children }) {
  return (
    <ReduxProvider>
      <NotFoundProvider>
        <StyledComponentsRegistry>
          <GlobalStyle />
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
          <Header />
          <DynamicBreadCrumbs />

          {children}

          <DynamicFooter />
        </StyledComponentsRegistry>
      </NotFoundProvider>
    </ReduxProvider>
  )
}
