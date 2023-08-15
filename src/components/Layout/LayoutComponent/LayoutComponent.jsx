import StyledComponentsRegistry from '@/app/registry'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import GlobalStyle from '@/styles/globalStyles'

import BreadCrumbs from '@/components/BreadCrumbs'
import ReduxProvider from '@/store/ReduxProvider'
import { NotFoundProvider } from '@/contexts/NotFoundContext/NotFoundContext'

export default function LayoutComponent({ children }) {
  return (
    <ReduxProvider>
      <NotFoundProvider>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          <BreadCrumbs />
          {children}

          <Footer />
        </StyledComponentsRegistry>
      </NotFoundProvider>
    </ReduxProvider>
  )
}
