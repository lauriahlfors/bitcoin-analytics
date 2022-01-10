import { createContext, ReactNode, useContext } from 'react';

const useStore = () => {};

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
