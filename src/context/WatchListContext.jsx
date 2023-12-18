import { useState, createContext, useEffect } from 'react';
import { getWatchList } from '@/services/watchListServices';

const WatchListContext = createContext();

const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const fetchWatchList = async () => {
    try {
      const response = await getWatchList();
      if (response.status === 200) {
        console.log(response);
        setWatchList(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchWatchList();
  }, [watchList]);

  const data = {
    watchList,
    setWatchList,
  };

  return (
    <WatchListContext.Provider value={data}>
      {children}
    </WatchListContext.Provider>
  );
};
export { WatchListProvider, WatchListContext };
