import { createContext, useMemo, useState } from 'react'

export const PageContext = createContext(null)

export default function PageProvider({
  dataPage = {},
  isFaq = false,
  nameCMSPage,
  children,
  params = {},
}) {
  let faq
  if (isFaq) {
    faq = {
      faqTitle: dataPage[nameCMSPage].faqMainTitle,
      faqTitleMobile: dataPage[nameCMSPage].faqMainTitleMobile,
      faqContent: dataPage[nameCMSPage].faqContent,
      faqDescription: dataPage[nameCMSPage].faqDescription,
      faqButton: dataPage[nameCMSPage].faqButtonText,
      faqButtonMobile: dataPage[nameCMSPage].faqButtonTextMobile,
    }
  }

  const [clientDataPage, setClientDataPage] = useState({})

  console.log({
    ...dataPage,
    ...clientDataPage,
  })

  const value = useMemo(
    () => ({
      dataPage: { ...clientDataPage, ...dataPage },
      faq,
      setClientDataPage,
      params,
    }),
    [dataPage, faq, clientDataPage]
  )
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
