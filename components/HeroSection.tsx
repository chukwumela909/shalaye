export default function HeroSection() {
  return (
    <div className="bg-[#131722] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Hero Text */}
          <div className="text-center md:text-left">
            <h1 className="text-[#00D09B] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Trusted FX & Mint Notes
            </h1>
            <p className="text-[#F0F3F7] text-xl md:text-2xl mb-4">
              Convert, Calculate, and Buy with Confidence
            </p>
            <p className="text-[#8A919E] text-lg font-medium tracking-wider">
              BLACK MARKET FOREX
            </p>
            
            {/* Additional descriptive text */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center text-[#F0F3F7] text-sm md:text-base">
                <div className="w-2 h-2 bg-[#00D09B] rounded-full mr-3"></div>
                Real-time black market rates
              </div>
              <div className="flex items-center text-[#F0F3F7] text-sm md:text-base">
                <div className="w-2 h-2 bg-[#00D09B] rounded-full mr-3"></div>
                Instant mint notes calculation
              </div>
              <div className="flex items-center text-[#F0F3F7] text-sm md:text-base">
                <div className="w-2 h-2 bg-[#00D09B] rounded-full mr-3"></div>
                Direct WhatsApp & Telegram ordering
              </div>
            </div>
          </div>

          {/* Right Side - Placeholder for Calculator */}
          <div className="w-full">
            {/* Calculator will be inserted here */}
          </div>
        </div>
      </div>
    </div>
  );
}
