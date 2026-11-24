# Drishx html

```html
<!DOCTYPE html>

<html class="dark" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>DrishX — Wholesale Optical Lenses | Official Platform</title>
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;family=Geist:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              canvas: "#0B0F14",
              surface: "#0F1620",
              "surface-glass": "rgba(15, 22, 32, 0.75)",
              "text-primary": "#EAF0FA",
              "text-muted": "#AAB2C0",
              amber: {
                DEFAULT: "#F0A132",
                hover: "#E8941F",
                glow: "rgba(240, 161, 50, 0.18)",
                border: "rgba(240, 161, 50, 0.28)",
              },
            },
            fontFamily: {
              display: ['"Cormorant Garamond"', "Georgia", "serif"],
              sans: ['"Geist"', "system-ui", "sans-serif"],
              mono: ['"JetBrains Mono"', "monospace"],
            },
            boxShadow: {
              caustic: "0 0 60px -12px rgba(240, 161, 50, 0.22)",
              "lens-glow":
                "inset 0 0 45px rgba(240, 161, 50, 0.12), 0 20px 50px rgba(0, 0, 0, 0.7)",
            },
          },
        },
      }
    </script>
    <style>
      body {
        background-color: #0b0f14;
        color: #eaf0fa;
        font-family: "Geist", system-ui, sans-serif;
        overflow-x: hidden;
        selection-background-color: #f0a132;
      }
      ::selection {
        background-color: #f0a132;
        color: #0b0f14;
      }
      .optical-reticle {
        background-image:
          radial-gradient(
            circle at center,
            transparent 38%,
            rgba(240, 161, 50, 0.08) 39%,
            transparent 40%
          ),
          radial-gradient(
            circle at center,
            transparent 68%,
            rgba(240, 161, 50, 0.05) 69%,
            transparent 70%
          );
      }
      .lens-shimmer {
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.08) 0%,
          rgba(240, 161, 50, 0.12) 35%,
          transparent 60%
        );
      }
    </style>
  </head>
  <body class="bg-canvas text-text-primary min-h-screen antialiased">
    <!-- 1. NAV (Frosted Obsidian Glass) -->
    <header
      class="fixed top-0 left-0 z-50 w-full border-b border-amber-500/10 bg-[#0B0F14]/85 backdrop-blur-md"
    >
      <div
        class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12"
      >
        <!-- Left: Optical Circular Aperture + Wordmark -->
        <a class="group flex items-center gap-3.5" href="#">
          <div
            class="bg-surface border-amber/40 group-hover:border-amber relative flex h-9 w-9 items-center justify-center rounded-full border shadow-[0_0_15px_rgba(240,161,50,0.2)] transition-colors"
          >
            <div
              class="border-amber/80 flex h-3.5 w-3.5 items-center justify-center rounded-full border"
            >
              <div class="bg-amber h-1.5 w-1.5 rounded-full"></div>
            </div>
            <!-- Subtle aperture radial notches -->
            <span class="bg-amber/50 absolute top-0.5 h-0.5 w-1"></span>
            <span class="bg-amber/50 absolute bottom-0.5 h-0.5 w-1"></span>
            <span class="bg-amber/50 absolute left-0.5 h-1 w-0.5"></span>
            <span class="bg-amber/50 absolute right-0.5 h-1 w-0.5"></span>
          </div>
          <span
            class="font-display text-text-primary text-2xl font-bold tracking-tight"
          >
            Drish<span class="text-amber">X</span>
          </span>
        </a>
        <!-- Center: 3 quiet, elegant links -->
        <nav
          class="text-text-muted hidden items-center gap-9 text-sm tracking-wide md:flex"
        >
          <a class="hover:text-text-primary transition-colors" href="#catalog"
            >Catalog</a
          >
          <a
            class="hover:text-text-primary transition-colors"
            href="#dual-screens"
            >Apps</a
          >
          <a class="hover:text-text-primary transition-colors" href="#dock"
            >Support</a
          >
        </nav>
        <!-- Right: Login text link + high-contrast amber button -->
        <div class="flex items-center gap-6 sm:gap-7">
          <a
            class="text-text-muted hover:text-text-primary text-sm font-medium transition-colors"
            href="#dock"
          >
            Login
          </a>
          <a
            class="inline-flex items-center justify-center rounded-lg bg-[#F0A132] px-4 py-2 text-sm font-medium text-[#0B0F14] shadow-sm transition-colors hover:bg-[#E8941F]"
            href="#dock"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
    <main class="w-full pt-20">
      <!-- 2. HERO: The "Prism Lens" Centerpiece Stage -->
      <section
        class="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden border-b border-amber-500/10 px-6 py-16 lg:px-12 lg:py-24"
      >
        <!-- Caustic ambient lighting background glows -->
        <div
          class="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]"
        ></div>
        <div
          class="pointer-events-none absolute right-1/4 bottom-10 h-[480px] w-[480px] rounded-full bg-amber-500/[0.07] blur-[160px]"
        ></div>
        <div
          class="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14"
        >
          <!-- Left (~55%): Confident Editorial -->
          <div class="z-10 flex flex-col items-start lg:col-span-7">
            <div
              class="bg-surface border-amber/30 text-amber mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs tracking-wider uppercase"
            >
              <span
                class="bg-amber h-1.5 w-1.5 animate-pulse rounded-full"
              ></span>
              B2B OPTICAL WHOLESALE
            </div>
            <h1
              class="font-display text-text-primary mb-6 text-4xl font-normal tracking-[-0.02em] sm:text-5xl lg:text-[62px] lg:leading-[1.1]"
            >
              Wholesale Optical Lenses. Ordered in Seconds, Delivered to Your
              Counter.
            </h1>
            <p
              class="text-text-muted mb-9 max-w-xl font-sans text-base leading-relaxed sm:text-lg"
            >
              Browse live factory inventory, order prescription and stock uncut
              lenses straight from your counter desktop or mobile phone, and
              track every dispatch in real time.
            </p>
            <!-- CTA Group -->
            <div class="mb-8 flex flex-wrap items-center gap-4">
              <a
                class="inline-flex items-center gap-2.5 rounded-lg bg-[#F0A132] px-6 py-3.5 text-sm font-semibold text-[#0B0F14] shadow-[0_4px_20px_rgba(240,161,50,0.25)] transition-all hover:bg-[#E8941F] sm:text-base"
                href="#dock"
              >
                <span class="material-symbols-outlined text-[20px]"
                  >download</span
                >
                Download Mobile App
              </a>
              <a
                class="hover:bg-surface/50 inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3.5 text-sm font-medium text-white/90 transition-all hover:border-amber-500/40 sm:text-base"
                href="#dual-screens"
              >
                <span class="material-symbols-outlined text-amber text-[19px]"
                  >open_in_new</span
                >
                Open Web Portal
              </a>
            </div>
            <!-- Micro reassurance note -->
            <div
              class="text-text-muted/80 flex items-center gap-2 font-mono text-xs"
            >
              <span class="material-symbols-outlined text-amber text-[16px]"
                >verified</span
              >
              <span
                >Built exclusively for optical retailers &amp; eye care shops ·
                Instant shop counter setup</span
              >
            </div>
          </div>
          <!-- Right (~45%): Cinematic Optical Glass Showcase with Doodle Mascot -->
          <div class="relative flex items-center justify-center lg:col-span-5">
            <div
              class="bg-surface/90 shadow-lens-glow optical-reticle relative flex h-[480px] w-full max-w-[440px] flex-col items-center justify-between overflow-hidden rounded-3xl border border-amber-500/20 p-7 backdrop-blur-xl"
            >
              <!-- Glass Caustic Reflection Overlay -->
              <div
                class="lens-shimmer pointer-events-none absolute inset-0 opacity-60"
              ></div>
              <!-- Diopter Reticle Calibration Header -->
              <div
                class="text-text-muted/70 z-10 flex w-full items-center justify-between font-mono text-[11px]"
              >
                <span class="text-amber flex items-center gap-1.5">
                  <span class="bg-amber h-1.5 w-1.5 rounded-full"></span>
                  REFRACTIVE STAGE
                </span>
                <span
                  class="bg-canvas/60 rounded border border-white/10 px-2 py-0.5"
                  >Ø 75mm · AR: 99.4%</span
                >
              </div>
              <!-- Optical Centerpiece with DRISHX DOODLE MASCOT -->
              <div
                class="relative my-auto flex h-64 w-64 items-center justify-center"
              >
                <!-- Outer concentric diopter ring with degrees -->
                <div
                  class="border-amber/25 absolute inset-0 flex items-center justify-center rounded-full border"
                >
                  <div
                    class="border-amber/30 h-full w-full animate-[spin_60s_linear_infinite] rounded-full border border-dashed"
                  ></div>
                </div>
                <div
                  class="bg-canvas/40 absolute inset-4 rounded-full border border-white/10 backdrop-blur-sm"
                ></div>
                <!-- Refractive Highlight Arc -->
                <div
                  class="border-amber/70 absolute top-6 left-10 h-12 w-24 -rotate-12 rounded-full border-t-2 border-l blur-[0.5px]"
                ></div>
                <!-- PLAYFUL DOODLE LENS MASCOT SVG -->
                <svg
                  aria-label="DrishX Doodle Mascot"
                  class="relative z-20 h-48 w-48"
                  fill="none"
                  viewbox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- Lens Main Body -->
                  <circle
                    cx="100"
                    cy="100"
                    fill="#0B0F14"
                    fill-opacity="0.92"
                    r="54"
                    stroke="#F0A132"
                    stroke-width="2.5"
                  ></circle>
                  <!-- Subtle internal lens curvature highlight -->
                  <path
                    d="M72 70 A 42 42 0 0 1 128 70"
                    stroke="rgba(240, 161, 50, 0.45)"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                  <!-- Playful Doodle Trial Frame Eyeglasses -->
                  <g stroke="#EAF0FA" stroke-linecap="round" stroke-width="2.2">
                    <!-- Left rim -->
                    <circle cx="83" cy="95" r="14" stroke="#EAF0FA"></circle>
                    <!-- Right rim -->
                    <circle cx="117" cy="95" r="14" stroke="#EAF0FA"></circle>
                    <!-- Nose bridge -->
                    <path d="M97 93 Q 100 89 103 93"></path>
                    <!-- Trial frame axis tabs -->
                    <line x1="69" x2="65" y1="95" y2="95"></line>
                    <line x1="131" x2="135" y1="95" y2="95"></line>
                  </g>
                  <!-- Expressive hand-drawn doodle eyes -->
                  <circle cx="83" cy="95" fill="#F0A132" r="3.5"></circle>
                  <circle cx="117" cy="95" fill="#F0A132" r="3.5"></circle>
                  <!-- Sparkle highlights in eyes -->
                  <circle cx="81.5" cy="93.5" fill="#FFFFFF" r="1"></circle>
                  <circle cx="115.5" cy="93.5" fill="#FFFFFF" r="1"></circle>
                  <!-- Joyful doodle smile -->
                  <path
                    d="M92 118 Q 100 126 108 118"
                    stroke="#F0A132"
                    stroke-linecap="round"
                    stroke-width="2.6"
                  ></path>
                  <!-- Playful hand-drawn doodle stick arms holding miniature optical scale -->
                  <!-- Left arm waving -->
                  <path
                    d="M46 108 Q 32 94 36 78"
                    stroke="#AAB2C0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.4"
                  ></path>
                  <path
                    d="M36 78 L 32 80"
                    stroke="#AAB2C0"
                    stroke-linecap="round"
                    stroke-width="2.4"
                  ></path>
                  <path
                    d="M36 78 L 38 72"
                    stroke="#AAB2C0"
                    stroke-linecap="round"
                    stroke-width="2.4"
                  ></path>
                  <!-- Right arm holding optical loupe / marker -->
                  <path
                    d="M154 108 Q 166 116 172 102"
                    stroke="#AAB2C0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.4"
                  ></path>
                  <!-- Mini optical loupe ring -->
                  <circle
                    cx="174"
                    cy="98"
                    r="6"
                    stroke="#F0A132"
                    stroke-width="1.8"
                  ></circle>
                  <line
                    stroke="#AAB2C0"
                    stroke-linecap="round"
                    stroke-width="2"
                    x1="172"
                    x2="167"
                    y1="102"
                    y2="108"
                  ></line>
                </svg>
                <!-- Diopter Axis Indicator Dots -->
                <span
                  class="text-amber/80 absolute bottom-3 font-mono text-[10px] tracking-widest"
                  >AXIS: 180° · SPн: -2.75</span
                >
              </div>
              <!-- Bottom Badge & Label -->
              <div
                class="z-10 flex w-full items-center justify-between border-t border-white/[0.06] pt-3"
              >
                <span
                  class="text-text-muted font-mono text-[11px] tracking-wider uppercase"
                >
                  [ ANIMATED DOODLE LENS CHARACTER ]
                </span>
                <span
                  class="bg-amber/15 text-amber border-amber/30 rounded-md border px-2.5 py-1 font-mono text-[10px]"
                >
                  Mascot &amp; Refraction Slot
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 3. LIVE OPTICS SHOWCASE (Precision Catalog Tray Matrix) -->
      <section
        class="w-full border-b border-amber-500/10 px-6 py-24 lg:px-12"
        id="catalog"
      >
        <div class="mx-auto max-w-7xl">
          <div
            class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <div
                class="text-amber mb-3 font-mono text-xs tracking-widest uppercase"
              >
                [ PRECISION CATALOG ]
              </div>
              <h2
                class="font-display text-text-primary text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl"
              >
                Direct Lab Power Stocks Ready for Counter Dispatch
              </h2>
            </div>
            <p class="text-text-muted max-w-md font-sans text-sm">
              Raw factory batches calibrated for prompt optical shop delivery.
              Uncut, surfaced, and certified under digital ISO optical
              standards.
            </p>
          </div>
          <!-- Sleek Dark Glass Matrix (Real Optical Lens Categories) -->
          <div class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            <div class="flex flex-col justify-between gap-3.5 lg:col-span-5">
              <div
                class="group bg-surface border-amber/70 relative cursor-pointer rounded-2xl border-2 p-5 shadow-[0_0_20px_rgba(240,161,50,0.15)] transition-all"
              >
                <div
                  class="bg-amber absolute top-3 bottom-3 left-0 w-1.5 rounded-r"
                ></div>
                <div class="mb-1.5 flex items-center justify-between pl-2">
                  <span
                    class="text-amber font-mono text-xs font-semibold tracking-wider uppercase"
                    >[ 01 · ACTIVE BENCH ]</span
                  ><span
                    class="bg-amber/20 border-amber/40 text-amber rounded border px-2 py-0.5 font-mono text-[10px]"
                    >Ready Stock</span
                  >
                </div>
                <div class="flex items-center justify-between pl-2">
                  <h4
                    class="font-display text-text-primary text-2xl font-medium"
                  >
                    Single Vision
                  </h4>
                  <span class="material-symbols-outlined text-amber text-lg"
                    >arrow_forward</span
                  >
                </div>
                <p class="text-text-muted mt-1 pl-2 font-sans text-xs">
                  Instant Counter Stock · Polycarbonate &amp; Hard-Coated CR-39
                </p>
              </div>
              <div
                class="group bg-surface hover:border-amber/40 hover:bg-surface/50 relative cursor-pointer rounded-2xl border border-white/[0.08] p-5 transition-all duration-300"
              >
                <div class="mb-1.5 flex items-center justify-between">
                  <span
                    class="text-text-muted/60 font-mono text-xs tracking-wider uppercase"
                    >[ 02 · FILTERED ]</span
                  ><span
                    class="text-text-muted rounded border border-white/10 bg-white/[0.05] px-2 py-0.5 font-mono text-[10px]"
                    >420nm UV Cut</span
                  >
                </div>
                <div class="flex items-center justify-between">
                  <h4
                    class="font-display text-text-primary group-hover:text-amber text-2xl font-medium transition-colors"
                  >
                    Blue-Cut &amp; Anti-Glare
                  </h4>
                  <span
                    class="material-symbols-outlined text-text-muted/60 group-hover:text-amber text-lg transition-colors"
                    >chevron_right</span
                  >
                </div>
                <p class="text-text-muted mt-1 font-sans text-xs">
                  Warm Amber Shield · Zero residual green reflections
                </p>
              </div>
              <div
                class="group bg-surface hover:border-amber/40 hover:bg-surface/50 relative cursor-pointer rounded-2xl border border-white/[0.08] p-5 transition-all duration-300"
              >
                <div class="mb-1.5 flex items-center justify-between">
                  <span
                    class="text-text-muted/60 font-mono text-xs tracking-wider uppercase"
                    >[ 03 · PROGRESSIVE ]</span
                  ><span
                    class="text-text-muted rounded border border-white/10 bg-white/[0.05] px-2 py-0.5 font-mono text-[10px]"
                    >12-16mm Corridor</span
                  >
                </div>
                <div class="flex items-center justify-between">
                  <h4
                    class="font-display text-text-primary group-hover:text-amber text-2xl font-medium transition-colors"
                  >
                    Progressive Freeform
                  </h4>
                  <span
                    class="material-symbols-outlined text-text-muted/60 group-hover:text-amber text-lg transition-colors"
                    >chevron_right</span
                  >
                </div>
                <p class="text-text-muted mt-1 font-sans text-xs">
                  Smooth Power Gradients · Ultra-wide reading corridor
                </p>
              </div>
              <div
                class="group bg-surface hover:border-amber/40 hover:bg-surface/50 relative cursor-pointer rounded-2xl border border-white/[0.08] p-5 transition-all duration-300"
              >
                <div class="mb-1.5 flex items-center justify-between">
                  <span
                    class="text-text-muted/60 font-mono text-xs tracking-wider uppercase"
                    >[ 04 · PRECISION LAB ]</span
                  ><span
                    class="text-text-muted rounded border border-white/10 bg-white/[0.05] px-2 py-0.5 font-mono text-[10px]"
                    >1.67 / 1.74 Hi-Index</span
                  >
                </div>
                <div class="flex items-center justify-between">
                  <h4
                    class="font-display text-text-primary group-hover:text-amber text-2xl font-medium transition-colors"
                  >
                    Custom Lab RX
                  </h4>
                  <span
                    class="material-symbols-outlined text-text-muted/60 group-hover:text-amber text-lg transition-colors"
                    >chevron_right</span
                  >
                </div>
                <p class="text-text-muted mt-1 font-sans text-xs">
                  Precision Edge Surfacing · High astigmatism &amp; prism cut
                </p>
              </div>
            </div>
            <div
              class="bg-surface/90 relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-500/25 p-7 shadow-2xl backdrop-blur-xl sm:p-9 lg:col-span-7"
            >
              <div
                class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
              ></div>
              <div
                class="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4"
              >
                <div>
                  <span
                    class="text-amber block font-mono text-[11px] tracking-wider uppercase"
                    >Active Selection Stage</span
                  >
                  <h3
                    class="font-display text-text-primary text-3xl font-semibold"
                  >
                    Single Vision Precision Power Block
                  </h3>
                </div>
                <span
                  class="bg-amber/15 border-amber/30 text-amber rounded-full border px-3 py-1 font-mono text-xs"
                  >ISO 8980-1 Certified</span
                >
              </div>
              <div
                class="relative z-10 flex flex-col items-center justify-center gap-8 py-8 md:flex-row"
              >
                <div
                  class="relative flex h-56 w-56 items-center justify-center"
                >
                  <div
                    class="border-amber/30 absolute inset-0 animate-[spin_60s_linear_infinite] rounded-full border"
                  ></div>
                  <div
                    class="absolute inset-3 rounded-full border border-dashed border-white/20"
                  ></div>
                  <div
                    class="bg-canvas/80 border-amber/60 relative flex h-44 w-44 items-center justify-center rounded-full border-2 shadow-[0_0_25px_rgba(240,161,50,0.2)]"
                  >
                    <div
                      class="border-amber/30 flex h-24 w-24 items-center justify-center rounded-full border"
                    >
                      <span
                        class="material-symbols-outlined text-amber text-3xl"
                        >lens_blur</span
                      >
                    </div>
                    <div
                      class="border-amber/70 absolute top-3 left-6 h-8 w-16 -rotate-12 rounded-full border-t border-l blur-[0.5px]"
                    ></div>
                    <div
                      class="bg-amber/30 absolute inset-x-0 top-1/2 h-[1px]"
                    ></div>
                    <div
                      class="bg-amber/30 absolute inset-y-0 left-1/2 w-[1px]"
                    ></div>
                    <span
                      class="text-amber/80 absolute bottom-2 font-mono text-[9px]"
                      >Ø 70/75mm</span
                    >
                  </div>
                </div>
                <div class="flex max-w-xs flex-col gap-2 font-sans text-xs">
                  <div
                    class="bg-canvas rounded-xl border border-white/[0.06] p-3"
                  >
                    <div
                      class="text-text-muted font-mono text-[10px] uppercase"
                    >
                      Direct Lab Power Calibration
                    </div>
                    <div class="text-text-primary mt-0.5 font-semibold">
                      Uncut Surfaced Finished Blanks
                    </div>
                    <div class="text-text-muted/80 mt-1 text-[11px]">
                      Standard diameter blanks with factory-aligned optical
                      center and hydrophobic hard coat.
                    </div>
                  </div>
                  <div
                    class="border-amber/30 text-amber inline-flex items-center gap-2 rounded-lg border bg-amber-500/[0.07] p-2.5 font-mono text-[11px]"
                  >
                    <span class="material-symbols-outlined text-sm">draw</span
                    ><span
                      >Ready in bulk pairs straight to dispensary tray</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="relative z-10 grid grid-cols-1 gap-3 border-t border-white/[0.08] pt-4 sm:grid-cols-2"
              >
                <div
                  class="bg-canvas/70 rounded-xl border border-white/[0.06] p-3"
                >
                  <span
                    class="text-text-muted block font-mono text-[10px] uppercase"
                    >Power Range</span
                  ><span
                    class="text-text-primary mt-0.5 block text-xs font-semibold"
                    >-8.00 to +6.00 SPH | CYL up to -4.00</span
                  >
                </div>
                <div
                  class="bg-canvas/70 rounded-xl border border-white/[0.06] p-3"
                >
                  <span
                    class="text-text-muted block font-mono text-[10px] uppercase"
                    >Index Options</span
                  ><span
                    class="text-text-primary mt-0.5 block text-xs font-semibold"
                    >1.56, 1.60, 1.67 MR-8, 1.74 Polycarb</span
                  >
                </div>
                <div
                  class="bg-canvas/70 rounded-xl border border-white/[0.06] p-3"
                >
                  <span
                    class="text-text-muted block font-mono text-[10px] uppercase"
                    >Dispatch Speed</span
                  ><span class="text-amber mt-0.5 block text-xs font-semibold"
                    >Same-Day Counter Dispatch (&lt; 2 Hrs)</span
                  >
                </div>
                <div
                  class="bg-canvas/70 rounded-xl border border-white/[0.06] p-3"
                >
                  <span
                    class="text-text-muted block font-mono text-[10px] uppercase"
                    >Coating</span
                  ><span
                    class="text-text-primary mt-0.5 block text-xs font-semibold"
                    >Super Hydrophobic + AR Warm Gold</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 4. THE MOTION TRANSIT (Kinetic Fulfillment Beam) -->
      <section class="w-full border-b border-amber-500/10 px-6 py-24 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <div class="mx-auto mb-20 max-w-2xl text-center">
            <div
              class="text-amber mb-3 font-mono text-xs tracking-widest uppercase"
            >
              [ HOW ORDERS MOVE ]
            </div>
            <h2
              class="font-display text-text-primary text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl"
            >
              From Your Counter to Your Doorstep in 4 Seamless Beats
            </h2>
          </div>
          <!-- Continuous glowing amber beam / rail -->
          <div class="relative py-6">
            <!-- Continuous Rail Line -->
            <div
              class="from-amber/20 via-amber to-amber/20 absolute top-[43px] right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r shadow-[0_0_12px_rgba(240,161,50,0.6)] md:block"
            ></div>
            <div class="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4">
              <!-- Node 1 -->
              <div class="flex flex-col items-center text-center">
                <div
                  class="bg-surface border-amber text-amber mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-[0_0_20px_rgba(240,161,50,0.3)]"
                >
                  <span class="material-symbols-outlined text-2xl"
                    >point_of_sale</span
                  >
                </div>
                <span class="text-amber mb-1 font-mono text-xs tracking-wider"
                  >BEAT 01</span
                >
                <h3
                  class="text-text-primary mb-2 font-sans text-base font-semibold"
                >
                  Order Placed (Phone/Web)
                </h3>
                <p
                  class="text-text-muted max-w-[220px] font-sans text-xs leading-relaxed"
                >
                  Punch powers directly into the quick diopter grid on your shop
                  counter or phone.
                </p>
              </div>
              <!-- Node 2 -->
              <div class="flex flex-col items-center text-center">
                <div
                  class="bg-surface border-amber/70 text-amber mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-[0_0_15px_rgba(240,161,50,0.2)]"
                >
                  <span class="material-symbols-outlined text-2xl"
                    >precision_manufacturing</span
                  >
                </div>
                <span class="text-amber mb-1 font-mono text-xs tracking-wider"
                  >BEAT 02</span
                >
                <h3
                  class="text-text-primary mb-2 font-sans text-base font-semibold"
                >
                  Lab Picked
                </h3>
                <p
                  class="text-text-muted max-w-[220px] font-sans text-xs leading-relaxed"
                >
                  Direct optical factory pulls stock blanks or initiates digital
                  generator cut.
                </p>
              </div>
              <!-- Node 3 -->
              <div class="flex flex-col items-center text-center">
                <div
                  class="bg-surface border-amber/70 text-amber mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-[0_0_15px_rgba(240,161,50,0.2)]"
                >
                  <span class="material-symbols-outlined text-2xl"
                    >biotech</span
                  >
                </div>
                <span class="text-amber mb-1 font-mono text-xs tracking-wider"
                  >BEAT 03</span
                >
                <h3
                  class="text-text-primary mb-2 font-sans text-base font-semibold"
                >
                  Micro-Inspected
                </h3>
                <p
                  class="text-text-muted max-w-[220px] font-sans text-xs leading-relaxed"
                >
                  Lensometer verification, stress birefringence scan, and
                  hydro-seal seal check.
                </p>
              </div>
              <!-- Node 4 -->
              <div class="flex flex-col items-center text-center">
                <div
                  class="bg-surface border-amber text-amber mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-[0_0_20px_rgba(240,161,50,0.3)]"
                >
                  <span class="material-symbols-outlined text-2xl"
                    >local_shipping</span
                  >
                </div>
                <span class="text-amber mb-1 font-mono text-xs tracking-wider"
                  >BEAT 04</span
                >
                <h3
                  class="text-text-primary mb-2 font-sans text-base font-semibold"
                >
                  Dispatched to Store
                </h3>
                <p
                  class="text-text-muted max-w-[220px] font-sans text-xs leading-relaxed"
                >
                  Express courier dispatch straight into your retail store tray
                  box with live OTP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 5. DUAL DEVICE SHOWCASE (Shop Phone & Counter Desktop) -->
      <section
        class="w-full border-b border-amber-500/10 px-6 py-24 lg:px-12"
        id="dual-screens"
      >
        <div class="mx-auto max-w-7xl">
          <div class="mx-auto mb-16 max-w-2xl text-center">
            <div
              class="text-amber mb-3 font-mono text-xs tracking-widest uppercase"
            >
              [ MULTI-SCREEN SYNC ]
            </div>
            <h2
              class="font-display text-text-primary mb-4 text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl"
            >
              One Shop Account. Everywhere You Dispense.
            </h2>
            <p class="text-text-muted font-sans text-base">
              In your pocket on the go, or on your billing counter desktop. One
              synchronized shop account.
            </p>
          </div>
          <!-- Clean, Layered Perspective Composition -->
          <div
            class="relative mx-auto mt-8 flex w-full max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0"
          >
            <!-- Background: Counter Desktop Browser Frame -->
            <div
              class="bg-surface z-10 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:w-[82%]"
            >
              <!-- Browser Header -->
              <div
                class="bg-canvas/80 flex h-10 items-center justify-between border-b border-white/[0.08] px-4"
              >
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-500/60"></span>
                  <span
                    class="h-2.5 w-2.5 rounded-full bg-yellow-500/60"
                  ></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-green-500/60"></span>
                  <span class="text-text-muted/60 ml-4 font-mono text-[11px]"
                    >drishx.internal/counter-portal/inventory</span
                  >
                </div>
                <span class="text-amber font-mono text-[10px]"
                  >LIVE LAB SYNC: CONNECTED</span
                >
              </div>
              <!-- Desktop Web Interface Mockup -->
              <div class="bg-[#0C121A] p-6 sm:p-8">
                <div
                  class="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4"
                >
                  <div>
                    <div class="text-amber font-mono text-xs">
                      SHOP DESK: OPTICS EXPRESS #08
                    </div>
                    <div class="text-text-primary text-lg font-medium">
                      Bulk Diopter Power Matrix (Uncut CR-39 1.56 HMC)
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <span
                      class="text-text-muted rounded border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs"
                      >SPH / CYL GRID</span
                    >
                    <span
                      class="bg-amber rounded px-3 py-1 text-xs font-medium text-[#0B0F14]"
                      >Re-Order All</span
                    >
                  </div>
                </div>
                <!-- Power Matrix Grid Sample -->
                <div
                  class="mb-6 grid grid-cols-4 gap-2 text-center font-mono text-xs sm:grid-cols-6"
                >
                  <div class="bg-canvas rounded border border-white/[0.05] p-2">
                    <span class="text-text-muted block text-[10px]"
                      >SPH -0.50</span
                    ><span class="text-amber font-semibold">14 Prs</span>
                  </div>
                  <div class="bg-canvas rounded border border-white/[0.05] p-2">
                    <span class="text-text-muted block text-[10px]"
                      >SPH -0.75</span
                    ><span class="text-amber font-semibold">22 Prs</span>
                  </div>
                  <div class="bg-canvas rounded border border-white/[0.05] p-2">
                    <span class="text-text-muted block text-[10px]"
                      >SPH -1.00</span
                    ><span class="text-amber font-semibold">30 Prs</span>
                  </div>
                  <div class="bg-canvas rounded border border-white/[0.05] p-2">
                    <span class="text-text-muted block text-[10px]"
                      >SPH -1.25</span
                    ><span class="text-amber font-semibold">18 Prs</span>
                  </div>
                  <div class="bg-canvas rounded border border-white/[0.05] p-2">
                    <span class="text-text-muted block text-[10px]"
                      >SPH -1.50</span
                    ><span class="text-amber font-semibold">25 Prs</span>
                  </div>
                  <div
                    class="bg-canvas border-amber/30 rounded border bg-amber-500/[0.05] p-2"
                  >
                    <span class="text-text-muted block text-[10px]"
                      >SPH -1.75</span
                    ><span class="text-amber font-semibold">Low (4)</span>
                  </div>
                </div>
                <!-- Recent Order Invoices & Instant Lab Chat Line -->
                <div
                  class="grid grid-cols-1 gap-4 font-sans text-xs sm:grid-cols-2"
                >
                  <div
                    class="bg-canvas flex items-center justify-between rounded-lg border border-white/[0.05] p-3"
                  >
                    <div class="flex items-center gap-2.5">
                      <span
                        class="material-symbols-outlined text-amber text-base"
                        >receipt_long</span
                      >
                      <div>
                        <div class="text-text-primary font-medium">
                          Inv #DX-9402 · 18 Pairs
                        </div>
                        <div class="text-text-muted text-[10px]">
                          Single Vision HC + BlueBlock
                        </div>
                      </div>
                    </div>
                    <span class="font-mono text-[11px] text-emerald-400"
                      >DISPATCHED</span
                    >
                  </div>
                  <div
                    class="bg-canvas flex items-center justify-between rounded-lg border border-white/[0.05] p-3"
                  >
                    <div class="flex items-center gap-2.5">
                      <span
                        class="material-symbols-outlined text-amber text-base"
                        >chat</span
                      >
                      <div>
                        <div class="text-text-primary font-medium">
                          Direct Optical Surfacing Desk
                        </div>
                        <div class="text-text-muted text-[10px]">
                          Lab Tech: "Prism bevel confirmed for #9403"
                        </div>
                      </div>
                    </div>
                    <span class="text-amber font-mono text-[11px]"
                      >ACTIVE CHAT</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Foreground Layer: Sleek Dark Floating Smartphone Frame -->
            <div
              class="bg-canvas relative z-20 w-72 rounded-[32px] border-[3px] border-amber-500/40 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:w-80 lg:-ml-28"
            >
              <!-- Phone Notch / Camera Island -->
              <div
                class="w-full rounded-[24px] border border-white/[0.08] bg-[#0F1620] p-4"
              >
                <div
                  class="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3"
                >
                  <div class="flex items-center gap-1.5">
                    <div
                      class="bg-amber/20 border-amber/40 flex h-5 w-5 items-center justify-center rounded-full border"
                    >
                      <span class="text-amber text-[9px] font-bold">DX</span>
                    </div>
                    <span
                      class="font-display text-text-primary text-sm font-bold"
                      >DrishX Mobile</span
                    >
                  </div>
                  <span
                    class="material-symbols-outlined text-text-muted text-base"
                    >notifications</span
                  >
                </div>
                <!-- Diopter Wheel / Quick Power Selector -->
                <div
                  class="bg-canvas mb-3 rounded-xl border border-white/[0.06] p-3"
                >
                  <div
                    class="text-text-muted mb-2 flex items-center justify-between font-mono text-[10px]"
                  >
                    <span>QUICK RE-ORDER</span>
                    <span class="text-amber">LEFT / RIGHT</span>
                  </div>
                  <div class="flex items-center justify-between text-center">
                    <div
                      class="border-amber/30 text-amber rounded border bg-[#0F1620] px-2 py-1 font-mono text-xs"
                    >
                      -2.25 D
                    </div>
                    <span class="text-text-muted text-xs">x</span>
                    <div
                      class="border-amber/30 text-amber rounded border bg-[#0F1620] px-2 py-1 font-mono text-xs"
                    >
                      90° AXIS
                    </div>
                    <button
                      class="rounded bg-[#F0A132] px-2.5 py-1.5 text-[10px] font-bold text-[#0B0F14]"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <!-- Live Courier Dispatch Pin -->
                <div class="bg-canvas border-amber/20 rounded-xl border p-3">
                  <div class="mb-2 flex items-center gap-2">
                    <span
                      class="bg-amber h-2 w-2 animate-ping rounded-full"
                    ></span>
                    <span class="text-text-primary text-[11px] font-medium"
                      >Courier Arriving at Store</span
                    >
                  </div>
                  <div
                    class="text-text-muted flex items-center justify-between text-[10px]"
                  >
                    <span>Batch #4802 (3 Pkgs)</span>
                    <span class="text-amber font-mono font-semibold"
                      >ETA: 24 mins</span
                    >
                  </div>
                  <div
                    class="bg-surface mt-2 h-1.5 w-full overflow-hidden rounded-full"
                  >
                    <div class="bg-amber h-full w-[78%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 6. THE MONOLITH DOWNLOAD & DIRECT CONTACT DOCK -->
      <section
        class="w-full border-b border-amber-500/10 px-6 py-24 lg:px-12"
        id="dock"
      >
        <div class="mx-auto max-w-7xl">
          <div class="mx-auto mb-16 max-w-2xl text-center">
            <div
              class="text-amber mb-3 font-mono text-xs tracking-widest uppercase"
            >
              [ GET THE APPS ]
            </div>
            <h2
              class="font-display text-text-primary mb-4 text-4xl font-normal tracking-tight sm:text-5xl"
            >
              Take Your Counter Anywhere.
            </h2>
            <p class="text-text-muted font-sans text-base">
              Fast order entry on Android &amp; iOS, synced in real time with
              your desktop billing desk.
            </p>
          </div>
          <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div class="flex flex-col items-start lg:col-span-6">
              <div
                class="bg-surface border-amber/30 text-amber mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs tracking-wider uppercase"
              >
                <span
                  class="bg-amber h-1.5 w-1.5 animate-pulse rounded-full"
                ></span
                >NATIVE STOREFRONT SUITE
              </div>
              <h3
                class="font-display text-text-primary mb-4 text-3xl font-medium"
              >
                Point, Tap, and Restock in Between Consultations
              </h3>
              <p
                class="text-text-muted mb-8 max-w-lg font-sans text-sm leading-relaxed"
              >
                Equip optometrists, sales opticians, and lab runners with
                lightning-fast diopter matrix selection, real-time courier
                tracking, and instant optical surfacing desk chat.
              </p>
              <div class="mb-6 flex flex-wrap gap-4">
                <a
                  class="bg-surface hover:bg-surface/50 hover:border-amber/40 inline-flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 shadow-md transition-all"
                  href="#"
                  ><span class="material-symbols-outlined text-amber text-2xl"
                    >android</span
                  >
                  <div class="text-left">
                    <div
                      class="text-text-muted text-[9px] leading-tight tracking-wider uppercase"
                    >
                      Get it on
                    </div>
                    <div
                      class="text-text-primary text-sm leading-tight font-semibold"
                    >
                      Google Play
                    </div>
                  </div></a
                ><a
                  class="bg-surface hover:bg-surface/50 hover:border-amber/40 inline-flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 shadow-md transition-all"
                  href="#"
                  ><span class="material-symbols-outlined text-amber text-2xl"
                    >phone_iphone</span
                  >
                  <div class="text-left">
                    <div
                      class="text-text-muted text-[9px] leading-tight tracking-wider uppercase"
                    >
                      Download on the
                    </div>
                    <div
                      class="text-text-primary text-sm leading-tight font-semibold"
                    >
                      App Store
                    </div>
                  </div></a
                >
              </div>
              <a
                class="border-amber/30 hover:border-amber text-amber inline-flex items-center gap-2 rounded-lg border bg-white/[0.05] px-4 py-2.5 font-mono text-xs transition-all"
                href="#"
                ><span class="material-symbols-outlined text-base"
                  >install_mobile</span
                ><span>Download Direct Android APK (v2.4) · 14.8 MB</span></a
              >
            </div>
            <div class="flex items-center justify-center lg:col-span-6">
              <div
                class="bg-canvas relative z-10 w-72 rounded-[32px] border-[3px] border-amber-500/40 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:w-80"
              >
                <div
                  class="w-full rounded-[24px] border border-white/[0.08] bg-[#0F1620] p-4"
                >
                  <div
                    class="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3"
                  >
                    <div class="flex items-center gap-1.5">
                      <div
                        class="bg-amber/20 border-amber/40 flex h-5 w-5 items-center justify-center rounded-full border"
                      >
                        <span class="text-amber text-[9px] font-bold">DX</span>
                      </div>
                      <span
                        class="font-display text-text-primary text-sm font-bold"
                        >DrishX Mobile</span
                      >
                    </div>
                    <span
                      class="rounded bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400"
                      >LIVE SYNC</span
                    >
                  </div>
                  <div
                    class="bg-canvas mb-3 rounded-xl border border-white/[0.06] p-3"
                  >
                    <div
                      class="text-text-muted mb-2 flex items-center justify-between font-mono text-[10px]"
                    >
                      <span>QUICK RE-ORDER</span
                      ><span class="text-amber">LEFT / RIGHT</span>
                    </div>
                    <div class="flex items-center justify-between text-center">
                      <div
                        class="border-amber/30 text-amber rounded border bg-[#0F1620] px-2.5 py-1 font-mono text-xs font-semibold"
                      >
                        -2.25 D
                      </div>
                      <span class="text-text-muted font-mono text-xs">x</span>
                      <div
                        class="border-amber/30 text-amber rounded border bg-[#0F1620] px-2.5 py-1 font-mono text-xs font-semibold"
                      >
                        90° AXIS
                      </div>
                      <button
                        class="rounded bg-[#F0A132] px-3 py-1.5 text-[10px] font-bold text-[#0B0F14] transition-colors hover:bg-[#E8941F]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div class="bg-canvas border-amber/20 rounded-xl border p-3">
                    <div class="mb-2 flex items-center gap-2">
                      <span
                        class="bg-amber h-2 w-2 animate-ping rounded-full"
                      ></span
                      ><span class="text-text-primary text-[11px] font-medium"
                        >Courier Arriving at Store</span
                      >
                    </div>
                    <div
                      class="text-text-muted flex items-center justify-between text-[10px]"
                    >
                      <span>Batch #4802 (3 Pkgs)</span
                      ><span class="text-amber font-mono font-semibold"
                        >ETA: 24 mins</span
                      >
                    </div>
                    <div
                      class="bg-surface mt-2 h-1.5 w-full overflow-hidden rounded-full"
                    >
                      <div class="bg-amber h-full w-[78%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="w-full border-b border-amber-500/10 px-6 py-24 lg:px-12"
        id="wholesale-contact"
      >
        <div class="mx-auto max-w-7xl">
          <div class="mx-auto mb-16 max-w-2xl text-center">
            <div
              class="text-amber mb-3 font-mono text-xs tracking-widest uppercase"
            >
              [ REACH THE DESK ]
            </div>
            <h2
              class="font-display text-text-primary mb-4 text-4xl font-normal tracking-tight sm:text-5xl"
            >
              Direct Wholesale Inquiries.
            </h2>
            <p class="text-text-muted font-sans text-base">
              Need custom lab pricing or bulk shop onboarding? Connect directly
              with our team.
            </p>
          </div>
          <div
            class="bg-surface relative overflow-hidden rounded-3xl border border-amber-500/25 p-8 shadow-2xl backdrop-blur-xl sm:p-12"
          >
            <div
              class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
            ></div>
            <div class="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
              <div
                class="flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-8 lg:col-span-5 lg:border-r lg:border-b-0 lg:pr-10 lg:pb-0"
              >
                <div>
                  <a
                    class="bg-canvas border-amber/30 hover:border-amber group mb-5 flex items-center gap-4 rounded-2xl border p-5 shadow-lg transition-all"
                    href="https://wa.me/"
                    target="_blank"
                    ><div
                      class="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10"
                    >
                      <span
                        class="material-symbols-outlined text-2xl text-emerald-400"
                        >chat</span
                      >
                    </div>
                    <div>
                      <div
                        class="text-text-primary group-hover:text-amber text-sm font-semibold transition-colors"
                      >
                        Chat on WhatsApp Desk
                      </div>
                      <div class="text-text-muted mt-0.5 text-xs">
                        Instant Response under 5 mins
                      </div>
                    </div></a
                  >
                  <div class="space-y-4 font-mono text-xs">
                    <div
                      class="bg-canvas/60 flex items-center gap-3 rounded-xl border border-white/[0.06] p-4"
                    >
                      <span class="material-symbols-outlined text-amber text-lg"
                        >call</span
                      >
                      <div>
                        <div class="text-text-muted text-[10px] uppercase">
                          Direct Wholesale Hotline
                        </div>
                        <div
                          class="text-text-primary mt-0.5 text-sm font-semibold"
                        >
                          +1 (800) 492-DRISHX
                        </div>
                        <div class="text-text-muted/70 mt-0.5 text-[10px]">
                          Mon–Sat, 9:00 AM – 9:00 PM EST
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-canvas/60 flex items-center gap-3 rounded-xl border border-white/[0.06] p-4"
                    >
                      <span class="material-symbols-outlined text-amber text-lg"
                        >mail</span
                      >
                      <div>
                        <div class="text-text-muted text-[10px] uppercase">
                          Optical Support Email
                        </div>
                        <div
                          class="text-text-primary mt-0.5 text-sm font-semibold"
                        >
                          orders@drishx.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="border-amber/30 text-amber inline-flex items-center gap-2 rounded-lg border bg-amber-500/[0.07] p-3 font-mono text-xs"
                >
                  <span class="bg-amber h-2 w-2 rounded-full"></span
                  ><span>Dispensary desk active for same-day cutoffs</span>
                </div>
              </div>
              <div class="flex flex-col justify-between lg:col-span-7">
                <form class="space-y-4" onsubmit="event.preventDefault();">
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        class="text-text-muted mb-1.5 block font-mono text-xs uppercase"
                        >Optical Shop / Store Name</label
                      ><input
                        class="bg-canvas focus:border-amber text-text-primary placeholder:text-text-muted/40 w-full rounded-lg border border-white/10 px-4 py-3 text-sm transition-colors outline-none"
                        placeholder="e.g. VisionCraft Optics #02"
                        required=""
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        class="text-text-muted mb-1.5 block font-mono text-xs uppercase"
                        >Contact Person &amp; Phone</label
                      ><input
                        class="bg-canvas focus:border-amber text-text-primary placeholder:text-text-muted/40 w-full rounded-lg border border-white/10 px-4 py-3 text-sm transition-colors outline-none"
                        placeholder="e.g. David Lin (+1 555-0192)"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        class="text-text-muted mb-1.5 block font-mono text-xs uppercase"
                        >City / State</label
                      ><input
                        class="bg-canvas focus:border-amber text-text-primary placeholder:text-text-muted/40 w-full rounded-lg border border-white/10 px-4 py-3 text-sm transition-colors outline-none"
                        placeholder="e.g. Chicago, IL"
                        required=""
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        class="text-text-muted mb-1.5 block font-mono text-xs uppercase"
                        >Estimated Monthly Pairs Volume</label
                      ><input
                        class="bg-canvas focus:border-amber text-text-primary placeholder:text-text-muted/40 w-full rounded-lg border border-white/10 px-4 py-3 text-sm transition-colors outline-none"
                        placeholder="e.g. 150 – 300 Pairs / month"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>
                  <button
                    class="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F0A132] py-4 text-sm font-bold tracking-wide text-[#0B0F14] shadow-[0_4px_20px_rgba(240,161,50,0.25)] transition-all hover:bg-[#E8941F]"
                    type="submit"
                  >
                    <span class="material-symbols-outlined text-lg font-bold"
                      >send</span
                    ><span>Request Catalog &amp; Price List</span>
                  </button>
                  <p
                    class="text-text-muted/70 mt-2 text-center font-mono text-[11px]"
                  >
                    Verified wholesale optical accounts only · Zero minimum
                    commitments
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- 7. MINIMAL FOOTER -->
    <footer class="bg-canvas w-full px-6 py-12 lg:px-12">
      <div
        class="mx-auto mb-8 flex max-w-7xl flex-col items-center justify-between gap-6 border-b border-white/[0.06] pb-8 md:flex-row"
      >
        <!-- Brand Logo Mark + Wordmark -->
        <div class="flex items-center gap-3">
          <div
            class="bg-surface border-amber/40 flex h-7 w-7 items-center justify-center rounded-full border"
          >
            <div class="bg-amber h-1.5 w-1.5 rounded-full"></div>
          </div>
          <span
            class="font-display text-text-primary text-xl font-bold tracking-tight"
          >
            Drish<span class="text-amber">X</span>
          </span>
          <span class="text-text-muted/60 pl-2 font-mono text-xs"
            >· Optical Wholesale Platform</span
          >
        </div>
        <!-- Quick Links -->
        <nav
          class="text-text-muted flex flex-wrap items-center gap-7 font-sans text-xs"
        >
          <a class="hover:text-text-primary transition-colors" href="#catalog"
            >Catalog</a
          >
          <a
            class="hover:text-text-primary transition-colors"
            href="#dual-screens"
            >Apps</a
          >
          <a class="hover:text-text-primary transition-colors" href="#"
            >Privacy Policy</a
          >
          <a class="hover:text-text-primary transition-colors" href="#"
            >Terms of Service</a
          >
        </nav>
        <!-- Live Lab Status Indicator -->
        <div class="text-text-muted flex items-center gap-2 font-mono text-xs">
          <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span
            >LAB DISPATCH STATUS:
            <span class="text-amber font-semibold">OPTIMAL</span></span
          >
        </div>
      </div>
      <!-- Copyright notice -->
      <div
        class="text-text-muted/50 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 font-mono text-xs sm:flex-row"
      >
        <div>© 2025 DrishX Optical Wholesale Inc. All rights reserved.</div>
        <div>
          Designed exclusively for optical retailers and dispensing counters.
        </div>
      </div>
    </footer>
  </body>
</html>
```
