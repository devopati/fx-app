const instrumentFlags = {
  AUD: require("../../assets/images/aud.png"),
  CAD: require("../../assets/images/cad.png"),
  EUR: require("../../assets/images/eur.png"),
  JPY: require("../../assets/images/jpy.png"),
  NZD: require("../../assets/images/nzd.png"),
  USD: require("../../assets/images/usd.png"),
  SGD: require("../../assets/images/sgd.png"),
  GBP: require("../../assets/images/gbp.png"),
  CHF: require("../../assets/images/chf.png"),
  HKD: require("../../assets/images/hkd.png"),
  CNH: require("../../assets/images/cny.png"),
};

export const getInstrumentsFlag = (symbol) => {
  return instrumentFlags[symbol];
};
