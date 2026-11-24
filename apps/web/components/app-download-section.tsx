import * as React from "react"
import {
  QrCode,
  Zap,
  BellRing,
  RefreshCw,
  ShieldCheck,
} from "lucide-react"

export function AppDownloadSection() {
  return (
    <section className="w-full border-b border-[#F0A132]/10 px-6 py-24 lg:px-12" id="dock">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 font-mono text-xs tracking-widest text-[#F0A132] uppercase">
            [ GET THE APPS ]
          </div>
          <h2 className="font-heading mb-4 text-4xl font-normal tracking-tight text-[#EAF0FA] sm:text-5xl">
            Take Your Counter Anywhere.
          </h2>
          <p className="text-base text-[#AAB2C0]">
            Equip your optical dispensary and lab floor with instant lens lookup, live batch tracking, and fast ordering.
          </p>
        </div>

        {/* Action Hub Grid */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* Left Column: App Features & Download Buttons */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/8 bg-[#0F1620] p-8 sm:p-10 lg:col-span-7">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F0A132]/30 bg-[#0B0F14] px-3.5 py-1 font-mono text-xs tracking-wider text-[#F0A132] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F0A132]" />
                DISPENSARY MOBILE SUITE
              </div>

              <h3 className="font-heading mb-4 text-2xl font-normal text-[#EAF0FA] sm:text-3xl">
                Point, Tap, and Order in Between Consultations
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-[#AAB2C0]">
                Built specifically for opticians, clinic managers, and lab technicians. Restock finished blanks, submit custom surfacing Rx orders, and trace dispatch couriers without being tethered to a desk.
              </p>

              {/* 3 Real Feature Highlights */}
              <div className="mb-10 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl border border-white/6 bg-[#0B0F14] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0A132]/10 text-[#F0A132]">
                    <Zap className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAF0FA]">Rapid Diopter Matrix Entry</div>
                    <div className="text-xs text-[#AAB2C0]">
                      Select Sphere, Cylinder, and Axis in taps with instant inventory validation.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-white/6 bg-[#0B0F14] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0A132]/10 text-[#F0A132]">
                    <BellRing className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAF0FA]">Live Surfacing &amp; Courier Push Alerts</div>
                    <div className="text-xs text-[#AAB2C0]">
                      Get notified the moment your order clears coating, passes QC, or heads out with the runner.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-white/6 bg-[#0B0F14] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0A132]/10 text-[#F0A132]">
                    <RefreshCw className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAF0FA]">Seamless Multi-Screen Sync</div>
                    <div className="text-xs text-[#AAB2C0]">
                      Start an order on mobile while consulting a patient; review and invoice on desktop.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Store Buttons & Direct Download */}
            <div className="space-y-4 border-t border-white/6 pt-8">
              <div className="flex flex-wrap gap-4">
                {/* Google Play */}
                <a
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0F14] px-5 py-3 transition-all hover:border-[#F0A132]/40 hover:bg-[#141A24]"
                  href="#"
                >
                  <svg className="h-6 w-6 fill-[#F0A132]" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.12 12 8.12s-3.5902.2916-5.1368.8307L4.8409 5.4477a.416.416 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight tracking-wider text-[#AAB2C0] uppercase">
                      Get it on
                    </div>
                    <div className="text-sm font-semibold text-[#EAF0FA]">Google Play</div>
                  </div>
                </a>

                {/* App Store */}
                <a
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0F14] px-5 py-3 transition-all hover:border-[#F0A132]/40 hover:bg-[#141A24]"
                  href="#"
                >
                  <svg className="h-6 w-6 fill-[#F0A132]" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.92.04-2.05.62-2.7 1.39-.57.66-.99 1.72-.94 2.76 1.04.08 2.02-.53 2.63-1.28" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight tracking-wider text-[#AAB2C0] uppercase">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold text-[#EAF0FA]">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Scan to Install QR Hub */}
          <div className="flex flex-col items-center justify-between rounded-3xl border border-white/8 bg-[#0F1620] p-8 text-center sm:p-10 lg:col-span-5">
            <div className="w-full">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0B0F14] px-3 py-1 font-mono text-[11px] text-[#AAB2C0]">
                <QrCode className="h-3.5 w-3.5 text-[#F0A132]" />
                INSTANT DISPENSARY SETUP
              </div>

              <h4 className="font-heading mb-2 text-2xl font-normal text-[#EAF0FA]">
                Scan to Install
              </h4>
              <p className="mx-auto mb-8 max-w-xs text-xs text-[#AAB2C0]">
                Open your smartphone camera to quickly download the DrishX app for your device.
              </p>

              {/* Stylized QR Frame with Optical Target Accents */}
              <div className="relative mx-auto mb-8 flex h-60 w-60 items-center justify-center rounded-2xl border-2 border-[#F0A132]/40 bg-[#0B0F14] p-4 shadow-[0_0_30px_rgba(240,161,50,0.12)]">
                {/* Corner reticle marks */}
                <div className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-[#F0A132]" />
                <div className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-[#F0A132]" />
                <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-[#F0A132]" />
                <div className="absolute right-2 bottom-2 h-3 w-3 border-r-2 border-b-2 border-[#F0A132]" />

                {/* Real SVG QR Pattern Mockup */}
                <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white p-3">
                  <svg className="h-full w-full" viewBox="0 0 100 100" fill="none">
                    {/* Top-left position marker */}
                    <rect x="5" y="5" width="28" height="28" rx="4" fill="#0B0F14" />
                    <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                    <rect x="13" y="13" width="12" height="12" rx="1" fill="#0B0F14" />

                    {/* Top-right position marker */}
                    <rect x="67" y="5" width="28" height="28" rx="4" fill="#0B0F14" />
                    <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                    <rect x="75" y="13" width="12" height="12" rx="1" fill="#0B0F14" />

                    {/* Bottom-left position marker */}
                    <rect x="5" y="67" width="28" height="28" rx="4" fill="#0B0F14" />
                    <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                    <rect x="13" y="75" width="12" height="12" rx="1" fill="#0B0F14" />

                    {/* Data matrix dots */}
                    <rect x="39" y="8" width="6" height="6" fill="#0B0F14" />
                    <rect x="49" y="8" width="6" height="6" fill="#0B0F14" />
                    <rect x="39" y="18" width="6" height="6" fill="#0B0F14" />
                    <rect x="55" y="18" width="6" height="6" fill="#0B0F14" />
                    <rect x="8" y="39" width="6" height="6" fill="#0B0F14" />
                    <rect x="18" y="47" width="6" height="6" fill="#0B0F14" />
                    <rect x="28" y="39" width="6" height="6" fill="#0B0F14" />
                    <rect x="39" y="39" width="6" height="6" fill="#0B0F14" />
                    <rect x="49" y="47" width="6" height="6" fill="#0B0F14" />
                    <rect x="59" y="39" width="6" height="6" fill="#0B0F14" />
                    <rect x="69" y="47" width="6" height="6" fill="#0B0F14" />
                    <rect x="79" y="39" width="6" height="6" fill="#0B0F14" />
                    <rect x="89" y="47" width="6" height="6" fill="#0B0F14" />
                    <rect x="39" y="59" width="6" height="6" fill="#0B0F14" />
                    <rect x="49" y="69" width="6" height="6" fill="#0B0F14" />
                    <rect x="59" y="59" width="6" height="6" fill="#0B0F14" />
                    <rect x="69" y="69" width="6" height="6" fill="#0B0F14" />
                    <rect x="79" y="59" width="6" height="6" fill="#0B0F14" />
                    <rect x="89" y="79" width="6" height="6" fill="#0B0F14" />
                    <rect x="39" y="79" width="6" height="6" fill="#0B0F14" />
                    <rect x="49" y="87" width="6" height="6" fill="#0B0F14" />
                    <rect x="59" y="79" width="6" height="6" fill="#0B0F14" />
                    <rect x="69" y="87" width="6" height="6" fill="#0B0F14" />

                    {/* Center Brand Accent */}
                    <rect x="41" y="41" width="18" height="18" rx="4" fill="#0B0F14" />
                    <circle cx="50" cy="50" r="4.5" fill="#F0A132" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Security & Verification Note */}
            <div className="w-full border-t border-white/6 pt-6">
              <div className="flex items-center justify-center gap-2 text-xs text-[#AAB2C0]">
                <ShieldCheck className="h-4 w-4 text-[#F0A132]" />
                <span>Verified B2B Optical Dispensary Platform</span>
              </div>
              <div className="mt-1 font-mono text-[11px] text-[#AAB2C0]/60">
                Compatible with iOS and Android devices
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
