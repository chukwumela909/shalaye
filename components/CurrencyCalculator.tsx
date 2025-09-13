"use client";
import { useState } from "react";
import ActionButtons from "./ActionButtons";

type CalculatorType = "forex" | "mint";

export default function CurrencyCalculator() {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>("forex");
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedDenomination, setSelectedDenomination] = useState("200");

  // Mock rates - you'll replace these with real rates later
  const forexRates = {
    USD: 1580,
    GBP: 2160, 
    EUR: 1800
  };

  // Mint note bundle prices (1 bundle = 100 notes)
  const mintBundlePrices = {
    "200": 33000,   // ₦200 notes: 1 bundle = ₦33k
    "500": 63000,   // ₦500 notes: 1 bundle = ₦63k
    "1000": 115000  // ₦1000 notes: 1 bundle = ₦115k
  };

  // Forex calculation
  const convertedAmount = amount && calculatorType === "forex" 
    ? (parseFloat(amount) / forexRates[selectedCurrency as keyof typeof forexRates]).toFixed(2) 
    : "0.00";

  // Mint notes calculation
  const mintCalculation = () => {
    if (!amount || calculatorType !== "mint") return { notes: 0, totalCost: 0, bundles: 0 };
    
    const requestedAmount = parseFloat(amount);
    const denomination = parseInt(selectedDenomination);
    const bundlePrice = mintBundlePrices[selectedDenomination as keyof typeof mintBundlePrices];
    const faceValuePerBundle = denomination * 100; // 100 notes per bundle
    
    const numberOfNotes = Math.floor(requestedAmount / denomination);
    const numberOfBundles = Math.ceil(numberOfNotes / 100); // Round up to complete bundles
    const actualNotes = numberOfBundles * 100; // Total notes in complete bundles
    const actualAmount = actualNotes * denomination; // Face value of actual notes
    const totalCost = numberOfBundles * bundlePrice;
    
    return {
      notes: numberOfNotes,
      actualNotes,
      actualAmount,
      bundles: numberOfBundles,
      totalCost,
      bundlePrice,
      faceValuePerBundle
    };
  };

  const mintData = mintCalculation();

  return (
    <div className="bg-[#1E222D] rounded-lg p-6 shadow-lg">
      {/* Calculator Type Selector */}
      <div className="flex mb-6 bg-[#131722] rounded-lg p-1">
        <button
          onClick={() => setCalculatorType("forex")}
          className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
            calculatorType === "forex"
              ? "bg-[#00D09B] text-[#131722]"
              : "text-[#F0F3F7] hover:bg-[#1E222D]"
          }`}
        >
          Exchange calculator
        </button>
        <button
          onClick={() => setCalculatorType("mint")}
          className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
            calculatorType === "mint"
              ? "bg-[#00D09B] text-[#131722]"
              : "text-[#F0F3F7] hover:bg-[#1E222D]"
          }`}
        >
          Mint Notes
        </button>
      </div>

      {/* Forex Calculator */}
      {calculatorType === "forex" && (
        <div className="space-y-4">
          <h2 className="text-[#00D09B] text-2xl font-bold mb-4 text-center">Exchange calculator</h2>
          
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

          <div className="text-center">
            <p className="text-[#8A919E] text-sm mb-2">
              Rate: ₦{forexRates[selectedCurrency as keyof typeof forexRates].toLocaleString()} per {selectedCurrency}
            </p>
            <p className="text-[#8A919E] text-xs">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </div>

          {/* Action Buttons for Forex */}
          <ActionButtons 
            calculatorType="forex"
            amount={amount}
            selectedCurrency={selectedCurrency}
            convertedAmount={convertedAmount}
          />
        </div>
      )}

      {/* Mint Notes Calculator */}
      {calculatorType === "mint" && (
        <div className="space-y-4">
          <h2 className="text-[#00D09B] text-2xl font-bold mb-4 text-center">Mint Notes Calculator</h2>
          
          {/* Amount Input */}
          <div>
            <label className="block text-[#F0F3F7] text-sm font-medium mb-2">
              Enter amount needed in Naira
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₦ 0"
              className="w-full bg-[#131722] border border-[#1E222D] rounded-lg px-4 py-3 text-[#F0F3F7] placeholder-[#8A919E] focus:outline-none focus:border-[#00D09B] text-lg"
            />
          </div>

          {/* Denomination Selection */}
          <div>
            <label className="block text-[#F0F3F7] text-sm font-medium mb-2">
              Select denomination
            </label>
            <select
              value={selectedDenomination}
              onChange={(e) => setSelectedDenomination(e.target.value)}
              className="w-full bg-[#131722] border border-[#1E222D] rounded-lg px-4 py-3 text-[#F0F3F7] focus:outline-none focus:border-[#00D09B] text-lg"
            >
              {/* <option value="100">₦100 notes</option> */}
              <option value="200">₦200 notes</option>
              <option value="500">₦500 notes</option>
              <option value="1000">₦1000 notes</option>
            </select>
          </div>

          {/* Results */}
          {amount && (
            <div className="bg-[#131722] rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#F0F3F7]">Notes needed:</span>
                <span className="text-[#00D09B] font-bold text-lg">
                  {mintData.notes.toLocaleString()} notes
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#F0F3F7]">Bundles required:</span>
                <span className="text-[#FFC043] font-bold text-lg">
                  {mintData.bundles} bundle{mintData.bundles > 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#F0F3F7]">Actual notes you get:</span>
                <span className="text-[#F0F3F7] font-medium">
                  {mintData.actualNotes?.toLocaleString()} notes
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#F0F3F7]">Face value:</span>
                <span className="text-[#F0F3F7] font-medium">
                  ₦{mintData.actualAmount?.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#F0F3F7]">Price per bundle:</span>
                <span className="text-[#FFC043] font-medium">
                  ₦{mintData.bundlePrice?.toLocaleString()}
                </span>
              </div>
              
              <div className="border-t border-[#1E222D] pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#F0F3F7] font-bold">Total cost:</span>
                  <span className="text-[#00D09B] font-bold text-xl">
                    ₦{mintData.totalCost?.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="bg-[#1E222D] rounded p-3 mt-3">
                <p className="text-[#8A919E] text-xs text-center">
                  Note: Mint notes are sold in complete bundles of 100 notes each
                </p>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-[#8A919E] text-xs">
              Mint rates updated: {new Date().toLocaleTimeString()}
            </p>
          </div>

          {/* Action Buttons for Mint Notes */}
          <ActionButtons 
            calculatorType="mint"
            amount={amount}
            selectedDenomination={selectedDenomination}
            mintData={mintData}
          />
        </div>
      )}
    </div>
  );
}
