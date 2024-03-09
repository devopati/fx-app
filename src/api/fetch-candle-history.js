export const fetchCandleHistory = (symbol = "EUR/USD", period = "1h") => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://fcsapi.com/api-v3/forex/history?symbol=${symbol}&period=${period}&access_key=KCg9vnyWwcMuGTQK67yid`
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedResponse = Object.entries(data.response).map(
          ([timestamp, data]) => ({
            timestamp: parseInt(timestamp),
            open: parseFloat(data.o),
            high: parseFloat(data.h),
            low: parseFloat(data.l),
            close: parseFloat(data.c),
          })
        );
        const slicedData = formattedResponse.slice(265, 300);
        resolve(slicedData);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while fetching the data.");
        reject(error);
      });
  });
};
