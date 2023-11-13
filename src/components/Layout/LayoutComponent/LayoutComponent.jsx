import { ToastContainer } from 'react-toastify'
import BreadCrumbs from '@/components/BreadCrumbs'
import Header from '@/components/Layout/Header'
import Footer from '../Footer'
import Portal from '@/HOC/Portal'
import CookieComponent from '@/components/CookieComponent/CookieComponent'
import ReduxProvider from '@/store/ReduxProvider'
import { getData } from '@/lib/datocms'

const query = `
query MyQuery($locale: SiteLocale = en) {
  header(fallbackLocales: en, locale: $locale) {
    buttonText2
    buttonText1
    dropdownBusinessLinks {
      link
      id
      name
    }
    dropdownBusinessTitle
    dropdownPersonalLinks {
      id
      link
      name
    }
    dropdownPersonalTitle
    dropdownTitle
    id
    languageList {
      id
      name
      value
    }
    tabButton1
    tabButton2
    mainLogo {
      url
    }
    mainLogoMobile {
      url
    }
    nav {
      name
      link
      id
    }
  }
  homePage(fallbackLocales: en, locale: $locale) {
    breadcrumb
  }
  footer(fallbackLocales: en, locale: $locale) {
    allRightsReserved
    formDescription
    formTitle
    id
    legalTitle
    mainDescriptionStructured {
      value
    }
    resourcesTitle
    submitButtonText
    socialLinks {
      id
      image {
        url
      }
      link
    }
    resourcesList {
      name
      link
      id
    }
    logo {
      url
    }
    legalList {
      name
      link
      id
    }
  }
}
`

export default async function LayoutComponent({ children, locale }) {
  const data = await getData(query, {
    locale,
  })

  return (
    <ReduxProvider>
      <Header data={data.header} />
      <BreadCrumbs data={data.homePage} />
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
      <Footer data={data.footer} />
      <Portal>
        <CookieComponent />
      </Portal>
    </ReduxProvider>
  )
}
