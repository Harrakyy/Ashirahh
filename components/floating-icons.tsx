"use client"

import { useState } from "react"
import { MessageCircle, Instagram } from "lucide-react"

export function FloatingIcons() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href="https://instagram.com/ashira.hco"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 bg-[#1c2143] hover:bg-[#2a3057] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <Instagram className="w-5 h-5 text-white" />
      </a>

      {/* WhatsApp */}
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1c2143] text-white text-sm px-3 py-2 rounded whitespace-nowrap shadow-lg">
            Need a Custom Quote?
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-[#1c2143]" />
          </div>
        )}
        
        <a
          href="https://wa.me/6285819993633?text=Halo%20ASHIRA%2C%20saya%20tertarik%20dengan%20produk%20custom%20apparel"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
          
          {/* Pulsing ring */}
          <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
        </a>
      </div>
    </div>
  )
}
