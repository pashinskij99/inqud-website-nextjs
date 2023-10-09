'use client'

import { createContext, useMemo } from 'react'

export const PageContext = createContext(null)

export default function PageProvider({
  dataPage = {},
  isFaq = false,
  nameCMSPage,
  children,
  params = {},
}) {
  let faq
  if (isFaq && dataPage.length) {
    faq = {
      faqTitle: dataPage[nameCMSPage].faqMainTitle,
      faqTitleMobile: dataPage[nameCMSPage].faqMainTitleMobile,
      faqContent: dataPage[nameCMSPage].faqContent,
      faqDescription: dataPage[nameCMSPage].faqDescription,
      faqButton: dataPage[nameCMSPage].faqButtonText,
      faqButtonMobile: dataPage[nameCMSPage].faqButtonTextMobile,
    }
  }

  const value = useMemo(
    () => ({
      dataPage,
      faq,
      params,
      nameCMSPage,
    }),
    [dataPage, faq, nameCMSPage]
  )
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
