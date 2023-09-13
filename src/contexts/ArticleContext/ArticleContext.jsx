import { createContext, useMemo, useState } from 'react';

export const ArticleContext = createContext(null);

export function ArticleProvider({ children }) {
  const [activeHeader, setActiveHeader] = useState(null);

  const value = useMemo(
    () => ({
      activeHeader,
      setActiveHeader,
    }),
    [activeHeader]
  );

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}
