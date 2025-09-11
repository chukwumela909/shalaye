"use client";
import { useState, useEffect } from "react";

export default function RatesDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock rates - replace with real API call
  const rates = {
    USD: { buy: 1650, sell: 1670 },
    GBP: { buy: 2100, sell: 2130 },
    EUR: { buy: 1800, sell: 1820 }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1E222D] border-b border-[#131722]">
      <div className="container mx-auto px-4 py-3 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Live Rates */}
          <div className="flex flex-wrap items-center gap-6 mb-2 md:mb-0">
            <span className="text-[#00D09B] font-medium text-sm">LIVE RATES:</span>
            {Object.entries(rates).map(([currency, rate]) => (
              <div key={currency} className="flex items-center gap-2">
                <span className="text-[#F0F3F7] font-medium text-sm">{currency}:</span>
                <span className="text-[#FFC043] text-sm">₦{rate.buy.toLocaleString()}</span>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="text-[#8A919E] text-xs">
            Updated: {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}
