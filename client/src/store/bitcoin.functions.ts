import { ICoinGecko } from './types';

export const getCoinGeckoData = (url: string): Promise<ICoinGecko> => {
  return (async () => {
    return await fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  })();
};
