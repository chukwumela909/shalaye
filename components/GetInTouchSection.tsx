"use client";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function GetInTouchSection() {
  return (
    <div className="bg-[#1E222D] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[#00D09B] text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-[#F0F3F7] text-lg">
            Visit us at our location in Port Harcourt or contact us directly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-[#131722] rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-[#00D09B] mt-1" />
                </div>
                <div>
                  <h3 className="text-[#F0F3F7] font-bold text-lg mb-2">Our Location</h3>
                  <p className="text-[#F0F3F7] leading-relaxed">
                    Rehoboth Plaza, Opposite NTA Second Gate<br />
                    Ozuoba, Port Harcourt<br />
                    Rivers State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#131722] rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-[#00D09B] mt-1" />
                </div>
                <div>
                  <h3 className="text-[#F0F3F7] font-bold text-lg mb-2">Call Us</h3>
                  <a 
                    href="tel:+2349133136912" 
                    className="text-[#FFC043] hover:text-[#FFB020] font-medium text-lg transition-colors"
                  >
                    +234 913 313 6912
                  </a>
                  <p className="text-[#8A919E] text-sm mt-1">
                    Available for calls and WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-[#131722] rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <ClockIcon className="w-6 h-6 text-[#00D09B] mt-1" />
                </div>
                <div>
                  <h3 className="text-[#F0F3F7] font-bold text-lg mb-2">Business Hours</h3>
                  <div className="space-y-1 text-[#F0F3F7]">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-[#8A919E]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/2349133136912?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20forex%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#FFC043] hover:bg-[#FFB020] text-[#131722] font-bold py-3 px-4 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                WhatsApp Us
              </a>

              <a
                href="tel:+2349133136912"
                className="flex items-center justify-center bg-[#00D09B] hover:bg-[#00B087] text-[#131722] font-bold py-3 px-4 rounded-lg transition-colors"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-[#131722] rounded-lg p-6">
            <h3 className="text-[#F0F3F7] font-bold text-lg mb-4">Find Us Here</h3>
            <div className="relative overflow-hidden rounded-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.5532955427328!2d6.962629415624326!3d4.8668078536889645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1bfcba5ded1%3A0x9e3a87d83343ec5b!2sRehoboth%20plaza!5e0!3m2!1sen!2sng!4v1757755240493!5m2!1sen!2sng"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] rounded-lg"
              />
            </div>
            
            {/* Map Footer */}
            <div className="mt-4 p-4 bg-[#1E222D] rounded-lg">
              <p className="text-[#F0F3F7] text-sm">
                <span className="font-medium">Landmark:</span> Opposite NTA Second Gate, Ozuoba
              </p>
              <p className="text-[#8A919E] text-xs mt-1">
                Easily accessible by public transport and private vehicles
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-[#131722] rounded-lg p-6 inline-block">
            <p className="text-[#F0F3F7] text-sm">
              <span className="text-[#FFC043] font-medium">Need directions?</span> Call us at 
              <a href="tel:+2349133136912" className="text-[#00D09B] hover:text-[#00B087] font-medium ml-1">
                +234 913 313 6912
              </a> and we'll guide you to our location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
