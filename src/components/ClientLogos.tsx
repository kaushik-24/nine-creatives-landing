"use client";

const clients = [
  { name: "JR Plumbing & Heating", location: "London, UK", industry: "Emergency Services" },
  { name: "RevUp Driving School", location: "NSW, Australia", industry: "Education & Booking" },
  { name: "Stannis Property Group", location: "London, UK", industry: "Commercial Maintenance" },
  { name: "Handover Cleaning", location: "Perth, Australia", industry: "Commercial Facilities" },
  { name: "Thompson Building Group", location: "London, UK", industry: "Construction & Fitouts" },
  { name: "Mitchell Detailing", location: "Melbourne, Australia", industry: "Automotive Services" },
];

export default function ClientLogos() {
  return (
    <section className="relative border-y border-[#4f8fe6]/10 bg-ink py-10 px-6 lg:px-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,143,230,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex h-2 w-2 rounded-full bg-[#23c17c] animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
              Trusted by 20+ Growing Businesses
            </p>
            <span className="hidden sm:inline-block h-4 w-px bg-white/10" />
            <span className="hidden sm:inline-block text-xs font-medium text-white/40">
              Australia · United Kingdom · Global
            </span>
          </div>

          <div className="w-full md:w-auto overflow-hidden">
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="group flex items-center gap-2 transition-all duration-300 hover:opacity-100"
                >
                  <span className="font-display text-sm font-bold tracking-tight text-white/50 transition-colors group-hover:text-white">
                    {client.name}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-white/40 group-hover:border-[#4f8fe6]/30 group-hover:text-[#4f8fe6]">
                    {client.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
