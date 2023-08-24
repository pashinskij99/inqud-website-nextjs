'use client';

import { createContext, useMemo, useState } from 'react';

export const NotFoundContext = createContext(null);

export function NotFoundProvider({ children }) {
  const [isNotFound, setIsNotFound] = useState(false);

  const value = useMemo(
    () => ({
      isNotFound,
      setIsNotFound,
    }),
    [isNotFound]
  );

  return (
    <NotFoundContext.Provider value={value}>
      {children}
    </NotFoundContext.Provider>
  );
}
