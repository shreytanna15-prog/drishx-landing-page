import * as React from "react"
import { ShoppingCart, Cog, ScanLine, Truck } from "lucide-react"

export function TransitSection() {
  const steps = [
    {
      beat: "BEAT 01",
      icon: ShoppingCart,
      title: "Order Placed (Phone/Web)",
      description: "Punch powers directly into the quick diopter grid on your shop counter or phone.",
    },
    {
      beat: "BEAT 02",
      icon: Cog,
      title: "Lab Picked",
      description: "Direct optical factory pulls stock blanks or initiates digital generator cut.",
    },
    {
      beat: "BEAT 03",
      icon: ScanLine,
      title: "Micro-Inspected",
      description: "Lensometer verification, stress birefringence scan, and hydro-seal seal check.",
    },
    {
      beat: "BEAT 04",
      icon: Truck,
      title: "Dispatched to Store",
      description: "Express courier dispatch straight into your retail store tray box with live OTP.",
    },
  ]

  return (
    <section className="w-full border-b border-[#F0A132]/10 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-3 font-mono text-xs tracking-widest text-[#F0A132] uppercase">
            [ HOW ORDERS MOVE ]
          </div>
          <h2 className="font-heading text-3xl font-normal tracking-tight text-[#EAF0FA] sm:text-4xl lg:text-5xl">
            From Your Counter to Your Doorstep in 4 Seamless Beats
          </h2>
        </div>

        {/* Continuous glowing amber rail */}
        <div className="relative py-6">
          <div className="absolute top-[43px] right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r from-[#F0A132]/20 via-[#F0A132] to-[#F0A132]/20 shadow-[0_0_12px_rgba(240,161,50,0.6)] md:block" />

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.beat} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#F0A132] bg-[#0F1620] text-[#F0A132] shadow-[0_0_20px_rgba(240,161,50,0.3)] transition-transform hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mb-1 font-mono text-xs tracking-wider text-[#F0A132]">
                    {step.beat}
                  </span>
                  <h3 className="mb-2 text-base font-semibold text-[#EAF0FA]">
                    {step.title}
                  </h3>
                  <p className="max-w-[220px] text-xs leading-relaxed text-[#AAB2C0]">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
