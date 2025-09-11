"use client";
import { useState } from "react";

export default function ForexConverter() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Mock rates - you'll replace these with real rates later
  const rates = {
    USD: 1650,
    GBP: 2100, 
    EUR: 1800
  };

  const convertedAmount = amount ? (parseFloat(amount) / rates[selectedCurrency as keyof typeof rates]).toFixed(2) : "0.00";

  return (
    <div className="bg-[#1E222D] rounded-lg p-6 shadow-lg">
      <h2 className="text-[#00D09B] text-2xl font-bold mb-6 text-center">Forex Converter</h2>
      
      <div className="space-y-4 mb-6">
        {/* Amount Input */}
        <div>
          <label className="block text-[#F0F3F7] text-sm font-medium mb-2">
            Enter amount in Naira
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="₦ 0"
            className="w-full bg-[#131722] border border-[#1E222D] rounded-lg px-4 py-3 text-[#F0F3F7] placeholder-[#8A919E] focus:outline-none focus:border-[#00D09B] text-lg"
          />
        </div>

        {/* Currency Selection */}
        <div>
          <label className="block text-[#F0F3F7] text-sm font-medium mb-2">
            Convert to
          </label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="w-full bg-[#131722] border border-[#1E222D] rounded-lg px-4 py-3 text-[#F0F3F7] focus:outline-none focus:border-[#00D09B] text-lg"
          >
            <option value="USD">USD ($)</option>
            <option value="GBP">GBP (£)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {/* Result */}
        <div>
          <label className="block text-[#F0F3F7] text-sm font-medium mb-2">
            You get
          </label>
          <div className="w-full bg-[#131722] border border-[#00D09B] rounded-lg px-4 py-4 text-[#00D09B] font-bold text-2xl text-center">
            {selectedCurrency === "USD" && "$"}
            {selectedCurrency === "GBP" && "£"}
            {selectedCurrency === "EUR" && "€"}
            {convertedAmount}
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[#8A919E] text-sm mb-2">
          Rate: ₦{rates[selectedCurrency as keyof typeof rates].toLocaleString()} per {selectedCurrency}
        </p>
        <p className="text-[#8A919E] text-xs">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
