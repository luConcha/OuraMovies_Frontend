import { useContext } from 'react';
import { WatchListContext } from '../context/WatchListContext';

export const useWatchListContext = () => {
  const context = useContext(WatchListContext);
  if (context === undefined) {
    throw new Error(
      'useWatchListContext debe ser usado dentro de WatchListProvider'
    );
  }
  return context;
};
