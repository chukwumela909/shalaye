import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#131722] border-b border-[#1E222D]">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Logo Only */}
        <div className="flex justify-center mb-8">
          <Image
            src="/gardencitybdc.png"
            alt="GardenCityBDC Logo"
            width={200}
            height={10}
            className="h-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
}
