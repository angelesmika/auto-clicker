const TIMEOUT_MS = TIMEOUT_MS;

const performClicks = () => {
  const clickBuyTab = () => {
    const buyPs = document.getElementsByTagName("p");
    const buyPsList = Array.from(buyPs);
    const buyTab = buyPsList.filter((button) => button.textContent == "Buy")[0];

    buyTab.click();
  };

  const clickBuyMarketTab = () => {
    const buyDivs = document.getElementsByTagName("div");
    const buyDivsList = Array.from(buyDivs);
    const buyMarketTab = buyDivsList.filter(
      (button) => button.textContent == "Market"
    )[0];

    buyMarketTab.click();
  };

  const clickHalfButton = () => {
    const buyDivs = document.getElementsByTagName("div");
    const buyDivsList = Array.from(buyDivs);
    const halfButton = buyDivsList.filter(
      (button) => button.textContent == "50%"
    )[0];

    halfButton.click();
  };

  const clickBuyButton = () => {
    const buyButtons = document.getElementsByTagName("button");
    const buyButtonsList = Array.from(buyButtons);
    const buyButton = buyButtonsList.filter(
      (button) => button.textContent == "Buy"
    )[0];

    buyButton.click();
  };

  const clickSellTab = () => {
    const sellPs = document.getElementsByTagName("p");
    const sellPsList = Array.from(sellPs);
    const sellTab = sellPsList.filter(
      (button) => button.textContent == "Sell"
    )[0];

    sellTab.click();
  };

  const clickSellMarketTab = () => {
    const sellDivs = document.getElementsByTagName("div");
    const sellDivsList = Array.from(sellDivs);
    const sellMarketTab = sellDivsList.filter(
      (button) => button.textContent == "Market"
    )[0];

    sellMarketTab.click();
  };

  const clickMaxButton = () => {
    const sellDivs = document.getElementsByTagName("div");
    const sellDivsList = Array.from(sellDivs);
    const maxButton = sellDivsList.filter(
      (button) => button.textContent == "Max"
    )[0];

    maxButton.click();
  };

  const clickSellButton = () => {
    const sellButtons = document.getElementsByTagName("button");
    const sellButtonsList = Array.from(sellButtons);
    const sellButton = sellButtonsList.filter(
      (button) => button.textContent == "Sell"
    )[0];

    sellButton.click();
  };

  const buyFunctions = [
    clickBuyTab,
    clickBuyMarketTab,
    clickHalfButton,
    clickBuyButton,
  ];

  const sellFunctions = [
    clickSellTab,
    clickSellMarketTab,
    clickMaxButton,
    clickSellButton,
  ];

  for (const _function of buyFunctions) {
    setTimeout(() => {
      _function();
    }, TIMEOUT_MS);
  }

  setTimeout(() => {}, TIMEOUT_MS);

  for (const _function of sellFunctions) {
    setTimeout(() => {
      _function();
    }, TIMEOUT_MS);
  }
};

window.setTimeout(function farm() {
  performClicks();
  setTimeout(farm, TIMEOUT_MS);
}, TIMEOUT_MS);
