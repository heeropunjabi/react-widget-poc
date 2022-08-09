import { useEffect, useState } from "react";

const useCryptoData = () => {
  console.log("inside hook");
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=11&tsym=USD"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const preparedData = [];
        data.Data.forEach((d) => {
          const { Id, Name, FullName, ImageUrl, Url } = d.CoinInfo;
          if (Name === "USDT") return;
          let Price, Change24hr;
          if (d.DISPLAY?.USD) {
            const { PRICE, CHANGEPCT24HOUR } = d.DISPLAY.USD;
            Price = PRICE;
            Change24hr = CHANGEPCT24HOUR;
          }

          preparedData.push({
            Id,
            Name,
            FullName,
            ImageUrl: `https://www.cryptocompare.com${ImageUrl}`,
            Url: `https://www.cryptocompare.com${Url}`,
            Price,
            Change24hr,
          });
        });
        setCryptoData(preparedData);
      })
      .finally(() => setLoading(false));
  }, []);

  return { cryptoData, isLoading };
};

export default useCryptoData;
