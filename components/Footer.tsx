import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#131722] border-t border-[#1E222D] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/gardencitybdc.png"
                alt="GardenCityBDC Logo"
                width={150}
                height={45}
                className="h-auto"
              />
            </div>
            <p className="text-[#8A919E] text-sm leading-relaxed">
              Your trusted partner for foreign exchange and mint notes in Port Harcourt. 
              We offer competitive black market rates with reliable service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[#F0F3F7] font-semibold">Quick Contact</h4>
            <div className="space-y-2">
              <a 
                href="tel:+2349133136912" 
                className="block text-[#8A919E] hover:text-[#FFC043] text-sm transition-colors"
              >
                📞 +234 913 313 6912
              </a>
              <a 
                href="https://wa.me/2349133136912" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#8A919E] hover:text-[#FFC043] text-sm transition-colors"
              >
                💬 WhatsApp
              </a>
              <p className="text-[#8A919E] text-sm">
                📍 Rehoboth Plaza, Ozuoba
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-[#F0F3F7] font-semibold">Business Hours</h4>
            <div className="space-y-1 text-[#8A919E] text-sm">
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-[#1E222D] mt-8 pt-8 space-y-4">
          <div className="bg-[#1E222D] rounded-lg p-4">
            <p className="text-[#8A919E] text-xs leading-relaxed">
              <strong className="text-[#FFC043]">Disclaimer:</strong> Rates shown are black market rates and not official CBN rates. 
              GardenCityBDC is not affiliated with the Central Bank of Nigeria. All transactions are subject to availability 
              and current market conditions. Please confirm rates before completing any transaction.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8A919E] text-xs">
              © {new Date().getFullYear()} GardenCityBDC. All rights reserved.
            </p>
            <p className="text-[#8A919E] text-xs mt-2 md:mt-0">
              Built with ❤️ for the Port Harcourt community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
