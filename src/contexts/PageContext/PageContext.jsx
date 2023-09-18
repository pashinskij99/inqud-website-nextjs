import { createContext, useMemo } from 'react'

export const PageContext = createContext()

export default function PageProvider({ dataPage = {}, nameCMSPage, children }) {
  const faq = {
    faqTitle: dataPage[nameCMSPage].faqMainTitle,
    faqTitleMobile: dataPage[nameCMSPage].faqMainTitleMobile,
    faqContent: dataPage[nameCMSPage].faqContent,
    faqDescription: dataPage[nameCMSPage].faqDescription,
    faqButton: dataPage[nameCMSPage].faqButtonText,
    faqButtonMobile: dataPage[nameCMSPage].faqButtonTextMobile,
  }
  const value = useMemo(
    () => ({
      dataPage,
      faq,
    }),
    [dataPage, faq]
  )
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
