"use client";
import Image from "next/image";

// Inner circle integrations (3 logos)
const INNER_INTEGRATIONS = [
  {
    name: "Samsara",
    category: "Fleet Telematics Platform",
    description: "Real-time vehicle tracking, ELD compliance, and predictive maintenance with AI-powered insights",
    logo: "/logos/samsara.png",
  },
  {
    name: "Gmail",
    category: "Email Integration",
    description: "Automated email notifications for maintenance events, warranty claims, and shop confirmations",
    logo: "/logos/gmail.png",
  },
  {
    name: "Motive",
    category: "Fleet Management Platform",
    description: "Automated workflow triggers from breakdown events and maintenance schedules",
    logo: "/logos/motive.png",
  },
];

// Middle circle integrations (4 logos)
const MIDDLE_INTEGRATIONS = [
  {
    name: "Geotab",
    category: "Fleet Telematics",
    description: "Fleet tracking and maintenance scheduling integration with real-time vehicle diagnostics",
    logo: "/logos/geotab.png",
  },
  {
    name: "Telegram",
    category: "Communication Platform",
    description: "Instant messaging integration for fleet coordinators and maintenance teams",
    logo: "/logos/telegram.png",
  },
  {
    name: "Verizon Connect",
    category: "Telematics & Fleet Management",
    description: "Real-time vehicle tracking, diagnostics, and automated maintenance coordination",
    logo: "/logos/verizon-connect.webp",
  },
  {
    name: "WhatsApp",
    category: "Messaging Integration",
    description: "Direct communication with drivers and shops via WhatsApp for instant updates and coordination",
    logo: "/logos/whatsapp.webp",
  },
];

// Outer circle integrations (9 logos)
const OUTER_INTEGRATIONS = [
  {
    name: "Google Sheets",
    category: "Spreadsheet Integration",
    description: "Export maintenance data and reports to Google Sheets for analysis and tracking",
    logo: "/logos/google-sheets.png",
  },
  {
    name: "Outlook",
    category: "Email Integration",
    description: "Email notifications and calendar integration for maintenance scheduling",
    logo: "/logos/outlook.png",
  },
  {
    name: "Slack",
    category: "Team Communication",
    description: "Real-time notifications and team collaboration for maintenance coordination",
    logo: "/logos/slack.png",
  },
  {
    name: "Microsoft Teams",
    category: "Collaboration Platform",
    description: "Integrated communication and file sharing for fleet maintenance teams",
    logo: "/logos/teams.png",
  },
  {
    name: "Phone",
    category: "Voice Integration",
    description: "Direct phone integration for urgent maintenance coordination and shop communication",
    logo: "/logos/phone.png",
  },
  {
    name: "Detroit Connect",
    category: "Freightliner/Daimler OEM Platform",
    description: "Direct integration with Freightliner telematics for real-time vehicle diagnostics, fault codes, and predictive maintenance alerts",
    logo: "/logos/freightliner.png",
  },
  {
    name: "Volvo Connect",
    category: "Volvo OEM Telematics",
    description: "Real-time vehicle data and performance monitoring through Volvo's telematics APIs for proactive fleet maintenance",
    logo: "/logos/volvo.png",
  },
  {
    name: "PACCAR Connect (Kenworth)",
    category: "Kenworth OEM Platform",
    description: "Integrated vehicle diagnostics and fleet monitoring for Kenworth trucks with remote diagnostics capabilities",
    logo: "/logos/kenworth.png",
  },
  {
    name: "PACCAR Connect (Peterbilt)",
    category: "Peterbilt OEM Platform",
    description: "Direct access to Peterbilt vehicle performance data and diagnostic information for automated maintenance coordination",
    logo: "/logos/peterbilt.png",
  },
];

function IntegrationIcon({ logo, name, category, description }: { logo: string; name: string; category: string; description: string }) {
  return (
    <div className="group relative pointer-events-auto">
      <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-none border-2 border-gray-200 bg-white p-1.5 sm:p-2 shadow-lg transition-transform hover:scale-110">
        <div className="relative h-full w-full">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
          />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute left-1/2 -top-3 -translate-y-full -translate-x-1/2 hidden group-hover:block z-50 pointer-events-none">
        <div className="w-56 sm:w-64 rounded-none bg-white p-3 sm:p-4 shadow-2xl border border-gray-200">
          <div className="font-bold text-sm sm:text-base mb-1 text-gray-900">{name}</div>
          <div className="text-xs sm:text-sm text-[#4169E1] mb-1.5 sm:mb-2 font-medium">{category}</div>
          <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</div>

          {/* Arrow */}
          <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-1.5 w-3 h-3 rotate-45 bg-white border border-gray-200 border-t-0 border-l-0"></div>
        </div>
      </div>
    </div>
  );
}

export default function IntegrationsOrbit() {
  // Responsive radii - smaller on mobile to prevent overflow
  const INNER_RADIUS = typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 160;
  const MIDDLE_RADIUS = typeof window !== 'undefined' && window.innerWidth < 640 ? 180 : 240;
  const OUTER_RADIUS = typeof window !== 'undefined' && window.innerWidth < 640 ? 240 : 320;

  // Helper function to calculate position based on angle and radius
  const getPosition = (angle: number, radius: number) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius,
    };
  };

  return (
    <div className="relative flex h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full items-center justify-center overflow-hidden">
      {/* Orbit path circles */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <circle
          className="stroke-black/10 stroke-[0.5] sm:stroke-1"
          cx="50%"
          cy="50%"
          r={INNER_RADIUS}
          fill="none"
        />
        <circle
          className="stroke-black/10 stroke-[0.5] sm:stroke-1"
          cx="50%"
          cy="50%"
          r={MIDDLE_RADIUS}
          fill="none"
        />
        <circle
          className="stroke-black/10 stroke-[0.5] sm:stroke-1"
          cx="50%"
          cy="50%"
          r={OUTER_RADIUS}
          fill="none"
        />
      </svg>

      {/* Inner circle - 3 logos */}
      <div className="absolute inset-0 animate-orbit-slow pointer-events-none">
        {INNER_INTEGRATIONS.map((integration, index) => {
          const angle = (360 / INNER_INTEGRATIONS.length) * index;
          const position = getPosition(angle, INNER_RADIUS);

          return (
            <div
              key={integration.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
              }}
              suppressHydrationWarning
            >
              <div className="animate-counter-rotate-slow">
                <IntegrationIcon {...integration} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle circle - 4 logos */}
      <div className="absolute inset-0 animate-orbit-medium pointer-events-none">
        {MIDDLE_INTEGRATIONS.map((integration, index) => {
          const angle = (360 / MIDDLE_INTEGRATIONS.length) * index;
          const position = getPosition(angle, MIDDLE_RADIUS);

          return (
            <div
              key={integration.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
              }}
              suppressHydrationWarning
            >
              <div className="animate-counter-rotate-medium">
                <IntegrationIcon {...integration} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer circle - 5 logos */}
      <div className="absolute inset-0 animate-orbit-slower pointer-events-none">
        {OUTER_INTEGRATIONS.map((integration, index) => {
          const angle = (360 / OUTER_INTEGRATIONS.length) * index;
          const position = getPosition(angle, OUTER_RADIUS);

          return (
            <div
              key={integration.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
              }}
              suppressHydrationWarning
            >
              <div className="animate-counter-rotate-slower">
                <IntegrationIcon {...integration} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
