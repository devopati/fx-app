export const fetchInstrumentsData = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://fcsapi.com/api-v3/forex/latest?symbol=CAD/JPY,EUR/USD,AUD/CAD,EUR/CAD,CNH/JPY,NZD/CHF,GBP/SGD,USD/HKD,GBP/JPY,AUD/NZD&access_key=KCg9vnyWwcMuGTQK67yid"
    )
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => {
        alert("An error occurred fetching latest instruments data");
        reject(error);
      });
  });
};
