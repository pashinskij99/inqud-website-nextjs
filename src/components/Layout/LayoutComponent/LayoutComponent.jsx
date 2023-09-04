import { NextIntlClientProvider } from 'next-intl';
import StyledComponentsRegistry from '@/app/[locale]/registry';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import GlobalStyle from '@/styles/globalStyles';

import BreadCrumbs from '@/components/BreadCrumbs';
import ReduxProvider from '@/store/ReduxProvider';
import { NotFoundProvider } from '@/contexts/NotFoundContext/NotFoundContext';
// import RouteScrollProviderComponent from '@/components/RouteScrollProviderComponent'
// import Lang from '@/components/Lang'

export default function LayoutComponent({ children }) {
  return (
    // <RouteScrollProviderComponent>
    <ReduxProvider>
      {/* <NextIntlClientProvider messages={messages} locale={locale}> */}
      <NotFoundProvider>
        <StyledComponentsRegistry>
          {/* <Lang lang={lang} /> */}
          <GlobalStyle />
          <Header />
          <BreadCrumbs />

          {children}

          <Footer />
        </StyledComponentsRegistry>
      </NotFoundProvider>
      {/* </NextIntlClientProvider> */}
    </ReduxProvider>
    // </RouteScrollProviderComponent>
  );
}
