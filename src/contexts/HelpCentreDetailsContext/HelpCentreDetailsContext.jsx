import { createContext, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const HelpCentreDetailsContext = createContext(null);

export function HelpCentreDetailsProvider({ children, data, type }) {
  const [currentData, setCurrentData] = useState({});
  const { tab } = useSelector((state) => state.activeTab);

  useEffect(() => {
    if (type === 'product') {
      if (tab === 0) {
        setCurrentData({
          content: data.helpCentre.content,
          icon: data.helpCentre.icon.url,
          id: data.helpCentre.id,
          mainTitle: data.helpCentre.mainTitle,
        });
      } else {
        setCurrentData({
          content: data.helpCentre.content,
          icon: data.helpCentre.icon.url,
          id: data.helpCentre.id,
          mainTitle: data.helpCentre.mainTitle,
        });
      }
    } else if (tab === 0) {
      setCurrentData({
        content: data.helpCentre.content,
        icon: data.helpCentre.icon.url,
        id: data.helpCentre.id,
        mainTitle: data.helpCentre.mainTitle,
      });
    } else {
      setCurrentData({
        content: data.helpCentre.content,
        icon: data.helpCentre.icon.url,
        id: data.helpCentre.id,
        mainTitle: data.helpCentre.mainTitle,
      });
    }
  }, [data, type, tab]);

  const value = useMemo(
    () => ({
      data: currentData,
    }),
    [currentData]
  );

  return (
    <HelpCentreDetailsContext.Provider value={value}>
      {children}
    </HelpCentreDetailsContext.Provider>
  );
}
