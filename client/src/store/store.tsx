import { createContext, ReactNode, useContext, useState } from 'react';
import { ICoinGecko } from './types';

import { getCoinGeckoData } from './bitcoin.functions';

const useStore = () => {
  // coin gecko data state
  const [coinGeckoData, setCoinGeckoData] = useState<ICoinGecko>(
    {} as ICoinGecko
  );
  // coin gecko url state
  const [coinGeckoUrl, setCoinGeckoUrl] = useState<string>(
    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1641075131&to=1641852731'
  );

  return {
    setApiUrl: () => {},
    getApiData: () => getCoinGeckoData(coinGeckoUrl).then(setCoinGeckoData),
  };
};

// initialize store context
const StoreContext = createContext<ReturnType<typeof useStore> | null>(null);

// export store context
export const useStoreContext = () => useContext(StoreContext)!;

// export store provider
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};
