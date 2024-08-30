// TradingViewWidget.jsx
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget(props) {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "65%",
          "height": "610",
          "symbol": "`+ props.name+`",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.innerHTML = "";
      container.current.appendChild(script);
    },
    [props.name]
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
    </div>
  );
}

export default memo(TradingViewWidget);