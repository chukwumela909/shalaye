import Header from "@/components/Header";
import CurrencyCalculator from "@/components/CurrencyCalculator";
import GlobeDemo from "@/components/globe-demo";
import FAQSection from "@/components/FAQSection";
import RatesDisplay from "@/components/RatesDisplay";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131722] font-lato">
      <Header />
      <RatesDisplay />
      
      {/* Hero Section with Integrated Calculator and Globe Background */}
      <div className="bg-[#131722] py-12 relative overflow-hidden">
        {/* Globe Background */}
        <GlobeDemo />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Text */}
            <div className="text-center md:text-left">
              <h1 className="text-[#00D09B] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-lato">
                Trusted FX & Mint Notes
              </h1>
              <p className="text-[#F0F3F7] text-xl md:text-2xl mb-4 font-light">
                Convert, Calculate, and Buy with Confidence
              </p>
              <p className="text-[#8A919E] text-lg font-medium tracking-wider mb-8">
                BLACK MARKET FOREX
              </p>
              
              {/* Additional descriptive text */}
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start text-[#F0F3F7] text-sm md:text-base">
                  <div className="w-2 h-2 bg-[#00D09B] rounded-full mr-3"></div>
                  Real-time black market rates
                </div>
                <div className="flex items-center justify-center md:justify-start text-[#F0F3F7] text-sm md:text-base">
                  <div className="w-2 h-2 bg-[#00D09B] rounded-full mr-3"></div>
                  Instant mint notes calculation
                </div>
                <div className="flex items-center justify-center md:justify-start text-[#F0F3F7] text-sm md:text-base">
                  <div className="w-2 h-2 bg-[#00D09B] rounded-full mr-3"></div>
                  Direct WhatsApp & Telegram ordering
                </div>
              </div>
            </div>

            {/* Right Side - Calculator */}
            <div className="w-full relative z-20">
              <CurrencyCalculator />
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
