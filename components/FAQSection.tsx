"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How often are rates updated?",
    answer: "Our rates are updated multiple times daily to reflect current black market conditions. We monitor the market closely and adjust our rates every 2-4 hours during business hours to ensure you get competitive pricing."
  },
  {
    id: 2,
    question: "Are these official CBN rates?",
    answer: "No, these are black market rates, not official Central Bank of Nigeria (CBN) rates. Black market rates typically offer better value for currency exchange, especially for USD, GBP, and EUR. We are transparent about this difference."
  },
  {
    id: 3,
    question: "Why are mint notes more expensive?",
    answer: "Mint notes are crisp, new, uncirculated banknotes that are highly sought after for special occasions like weddings, ceremonies, and gifting. The premium reflects their pristine condition and limited availability. Higher denominations have lower premiums due to easier sourcing."
  },
  {
    id: 4,
    question: "Is there a minimum/maximum purchase amount?",
    answer: "Minimum purchase: ₦50,000 for forex, ₦20,000 for mint notes. Maximum amounts vary based on availability and current stock. For large transactions (above ₦5 million), please contact us in advance to ensure availability."
  },
  {
    id: 5,
    question: "How do I complete a purchase?",
    answer: "After using our calculator, click 'Buy via WhatsApp' or 'Buy via Telegram' to contact us directly. Your calculation details will be pre-filled. We'll confirm current rates, arrange payment method (bank transfer/cash), and schedule pickup or delivery in Garden City, Port Harcourt."
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, cash payments, and POS transactions. For security reasons, we recommend bank transfers for large amounts. Payment must be completed before currency/mint notes are released."
  },
  {
    id: 7,
    question: "Do you offer delivery services?",
    answer: "Yes! We offer delivery within Port Harcourt and Garden City areas. Delivery fees apply based on location and amount. For security reasons, deliveries above ₦2 million require special arrangements and may include additional security measures."
  },
  {
    id: 8,
    question: "How long does a transaction take?",
    answer: "Once payment is confirmed, forex exchanges are typically ready within 30 minutes. Mint notes may take 1-3 hours depending on denomination and quantity requested. Large orders may require 24-48 hours advance notice."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-[#131722] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-[#00D09B] text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#F0F3F7] text-lg">
            Everything you need to know about our forex and mint note services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-[#1E222D] rounded-lg border border-[#1E222D] overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left hover:bg-[#252930] transition-colors focus:outline-none focus:bg-[#252930]"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[#F0F3F7] font-semibold text-lg pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUpIcon className="w-5 h-5 text-[#00D09B]" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-[#8A919E]" />
                    )}
                  </div>
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-[#131722] pt-4">
                    <p className="text-[#F0F3F7] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-[#1E222D] rounded-lg p-6">
            <h3 className="text-[#00D09B] text-xl font-bold mb-3">
              Still have questions?
            </h3>
            <p className="text-[#F0F3F7] mb-4">
              Our team is ready to help with any specific questions about rates, availability, or transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/2348123456789?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FFC043] hover:bg-[#FFB020] text-[#131722] font-bold py-2 px-4 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                WhatsApp Support
              </a>
              <a
                href="https://t.me/gardencitybdc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#00D09B] hover:bg-[#00B087] text-[#131722] font-bold py-2 px-4 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
