'use client'

import { Activity, ArrowRight, Phone, Wrench, Clock, Shield, TrendingUp, MapPin } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts'
import { Card } from '@/components/ui/card'
import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"

export default function CombinedFeaturedSection() {
  const featuredCasestudy = {
    company: 'STL Truckers',
    tags: 'Design Partner',
    title: '',
    subtitle: 'Automate hundreds of maintenance events per year - from routine PMs to emergency breakdowns. AI calls shops, books appointments, and files warranty claims while you focus on running your fleet.',
  }

  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-0">

        {/* 1. LIVE FLEET MAP - Top Left */}
        <div className="relative rounded-none overflow-hidden bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            Live Fleet Tracking
          </div>
          <h3 className="text-xl font-normal text-gray-900">
            Integrated with your existing systems.{" "}
            <span className="text-gray-600">When there's an issue, AI checks the severity and immediately calls shops to book repairs - no manual coordination needed.</span>
          </h3>

          <div className="relative mt-6">
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 bg-white border border-gray-200 text-gray-900 rounded-md text-xs font-medium shadow-lg flex items-center gap-2">
              🚛 Active: 487 trucks on road
            </div>
            <USMap />
          </div>
        </div>

        {/* 2. REAL-TIME NOTIFICATIONS - Top Right */}
        <div className="flex flex-col justify-between gap-4 p-6 rounded-none border border-gray-200 bg-white">
          <div>
            <span className="text-xs flex items-center gap-2 text-gray-600 mb-2">
              <Activity className="w-4 h-4" /> Real-Time Coordination
            </span>
            <h3 className="text-xl font-normal text-gray-900">
              {featuredCasestudy.title}{" "}
              <span className="text-gray-600">{featuredCasestudy.subtitle}</span>
            </h3>
          </div>
          <div className="flex justify-center items-center w-full">
            <ElmeedaFleetNotifications />
          </div>
        </div>

        {/* 3. WARRANTY RECOVERY CHART - Bottom Left */}
        <div className="rounded-none border border-gray-200 bg-white p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <TrendingUp className="w-4 h-4" />
            Warranty Recovery
          </div>
          <h3 className="text-xl font-normal text-gray-900">
            Most fleets miss 60-75% of warranty claims - that's $150K-$500K left unclaimed for 500-truck fleets.{" "}
            <span className="text-gray-600">We automatically scan repairs, identify warranty-eligible work, and file claims for you.</span>
          </h3>
          <WarrantyRecoveryChart />
        </div>

        {/* 4. FEATURE CARDS GRID - Bottom Right */}
        <div className="grid sm:grid-cols-2 rounded-none bg-white">
          <FeatureCard
            icon={<Phone className="w-4 h-4" />}
            title="Automated Shop Calling"
            subtitle="With 30% technician shortages, finding available shop capacity is your biggest bottleneck."
            description="AI calls 5+ shops simultaneously, compares availability and quotes, and books the first open appointment - in minutes, not hours."
          />
          <FeatureCard
            icon={<Clock className="w-4 h-4" />}
            title="Real-Time Coordination"
            subtitle="Everyone gets text updates from start to finish: drivers know where to go, dispatchers see ETAs, shops have truck details."
            description="No more phone tag between your team, drivers, and shops."
          />
          <FeatureCard
            icon={<Shield className="w-4 h-4" />}
            title="Warranty Recovery"
            subtitle="Automatically capture $150K-$500K in missed claims per year"
            description="AI scans every repair for warranty eligibility and files claims automatically. Most fleets miss 60-80% of recoverable warranty work."
          />
          <FeatureCard
            icon={<Wrench className="w-4 h-4" />}
            title="Emergency Coordination"
            subtitle="Emergency breakdowns normally need 8-12 coordination calls. We handle it all in parallel: tow dispatched, shops called for availability, parts confirmed, load transfer arranged."
            description="Truck gets to a shop that can fix it now."
          />
        </div>
      </div>
    </section>
  )
}

// ----------------- Feature Card Component -------------------
function FeatureCard({ icon, title, subtitle, description }: {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3 p-6 border border-gray-200 bg-white transition-colors hover:bg-blue-50/30">
      <div className="flex items-center gap-2 text-blue-600 mb-1">
        {icon}
        <span className="text-sm font-semibold text-gray-900">{title}</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        {subtitle}
      </p>
      <p className="text-xs text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

// ----------------- US Map with Animated Truck Routes -------------------
// Realistic US truck routes across major interstates
const truckRoutes = [
  { path: 'M85,25 L75,27 L60,30 L40,32 L20,33', delay: 0, name: 'I-80 (NY to CA)' }, // East to West
  { path: 'M90,55 L88,48 L86,40 L85,30 L84,20', delay: 1.5, name: 'I-95 (FL to ME)' }, // South to North
  { path: 'M15,48 L30,46 L50,45 L70,47 L88,50', delay: 0.8, name: 'I-10 (CA to FL)' }, // West to East
  { path: 'M55,55 L54,45 L53,35 L52,25 L51,15', delay: 2.2, name: 'I-35 (TX to MN)' }, // South to North
  { path: 'M88,35 L72,33 L55,32 L38,30 L22,28', delay: 3, name: 'I-70 (MD to UT)' }, // East to West
]

const USMap = () => (
  <div className="relative w-full h-auto">
    <svg viewBox="0 0 100 65" className="w-full h-auto">
      {/* Continental US Outline with State Borders */}
      <g className="text-gray-200" fill="none" stroke="currentColor" strokeWidth="0.3">
        {/* Simplified US outline */}
        <path d="M 10,20 L 15,15 L 20,12 L 30,10 L 40,11 L 50,12 L 60,11 L 70,13 L 80,18 L 88,25 L 90,35 L 89,45 L 85,52 L 75,56 L 60,58 L 45,57 L 30,55 L 20,50 L 15,42 L 12,32 L 10,20 Z" fill="#F8FAFC" />

        {/* State borders - simplified major states */}
        <line x1="25" y1="15" x2="25" y2="50" opacity="0.3" /> {/* West coast states */}
        <line x1="40" y1="12" x2="38" y2="55" opacity="0.3" /> {/* Mountain states */}
        <line x1="55" y1="13" x2="53" y2="56" opacity="0.3" /> {/* Central states */}
        <line x1="70" y1="15" x2="68" y2="54" opacity="0.3" /> {/* Midwest */}
        <line x1="82" y1="20" x2="80" y2="52" opacity="0.3" /> {/* East coast */}

        {/* Horizontal divisions */}
        <line x1="15" y1="25" x2="88" y2="28" opacity="0.3" />
        <line x1="18" y1="35" x2="87" y2="38" opacity="0.3" />
        <line x1="20" y1="45" x2="85" y2="48" opacity="0.3" />
      </g>

      {/* Animated truck routes */}
      {truckRoutes.map((route, i) => (
        <g key={`route-${i}`}>
          <path
            d={route.path}
            fill="none"
            stroke="#4169E1"
            strokeWidth="0.4"
            strokeDasharray="1.5,1.5"
            opacity="0.3"
          />
          {/* Moving truck */}
          <circle r="1.2" fill="#4169E1" opacity="0.9">
            <animateMotion
              dur="12s"
              repeatCount="indefinite"
              begin={`${route.delay}s`}
            >
              <mpath href={`#route${i}`} />
            </animateMotion>
          </circle>
          <path id={`route${i}`} d={route.path} fill="none" />
        </g>
      ))}

      {/* Major city markers */}
      <circle cx="84" cy="23" r="1.5" fill="#ef4444" opacity="0.7" /> {/* NYC */}
      <circle cx="24" cy="32" r="1.5" fill="#ef4444" opacity="0.7" /> {/* LA */}
      <circle cx="60" cy="28" r="1.5" fill="#ef4444" opacity="0.7" /> {/* Chicago */}
      <circle cx="58" cy="48" r="1.5" fill="#ef4444" opacity="0.7" /> {/* Dallas */}
      <circle cx="76" cy="42" r="1.5" fill="#ef4444" opacity="0.7" /> {/* Atlanta */}
    </svg>
  </div>
)

// ----------------- Warranty Recovery Chart -------------------
const chartData = [
  { month: 'May', standard: 8500, elmeeda: 42300 },
  { month: 'June', standard: 12200, elmeeda: 51800 },
  { month: 'July', standard: 9800, elmeeda: 48600 },
  { month: 'Aug', standard: 15300, elmeeda: 68200 },
  { month: 'Sep', standard: 11700, elmeeda: 55400 },
  { month: 'Oct', standard: 13400, elmeeda: 62100 },
]

const chartConfig = {
  standard: {
    label: 'Standard Process ($)',
    color: '#94a3b8',
  },
  elmeeda: {
    label: 'Elmeeda Recovery ($)',
    color: '#10b981',
  },
} satisfies ChartConfig

function WarrantyRecoveryChart() {
  return (
    <ChartContainer className="h-60 aspect-auto" config={chartConfig}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="fillStandard" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-standard)" stopOpacity={0.4} />
            <stop offset="95%" stopColor="var(--color-standard)" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="fillElmeeda" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-elmeeda)" stopOpacity={0.6} />
            <stop offset="95%" stopColor="var(--color-elmeeda)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis hide />
        <YAxis hide />
        <CartesianGrid vertical={false} horizontal={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Area strokeWidth={2} dataKey="standard" type="monotone" fill="url(#fillStandard)" stroke="var(--color-standard)" />
        <Area strokeWidth={2} dataKey="elmeeda" type="monotone" fill="url(#fillElmeeda)" stroke="var(--color-elmeeda)" />
      </AreaChart>
    </ChartContainer>
  )
}

// ----------------- Fleet Notification Cards -------------------
interface FleetMessage {
  truck: string
  time: string
  message: string
  status: 'calling' | 'booking' | 'dispatched' | 'complete' | 'warranty'
  color: string
}

const fleetMessages: FleetMessage[] = [
  {
    truck: "Truck #4091",
    time: "2m ago",
    message: "DPF derate detected → Calling 5 Indianapolis shops for emergency service",
    status: "calling",
    color: "from-orange-400 to-red-500",
  },
  {
    truck: "Truck #2847",
    time: "8m ago",
    message: "Booked at Certified Peterbilt - ETA 45min, $1,850 quote approved",
    status: "booking",
    color: "from-blue-400 to-indigo-500",
  },
  {
    truck: "Driver John M.",
    time: "12m ago",
    message: "Dispatched to Indianapolis dealer for brake pad replacement - Load transferred",
    status: "dispatched",
    color: "from-purple-400 to-pink-500",
  },
  {
    truck: "Truck #5123",
    time: "18m ago",
    message: "Tire blowout I-80 Iowa → Mobile service en route, replacement truck dispatched",
    status: "calling",
    color: "from-yellow-400 to-orange-500",
  },
  {
    truck: "Warranty Alert",
    time: "25m ago",
    message: "DEF pump replacement qualifies for $2,300 warranty recovery - Claim filed automatically",
    status: "warranty",
    color: "from-green-400 to-emerald-600",
  },
  {
    truck: "Truck #3394",
    time: "31m ago",
    message: "Cooling system repair complete - Back on road, $680 saved vs emergency shop pricing",
    status: "complete",
    color: "from-sky-400 to-blue-600",
  },
]

const ElmeedaFleetNotifications = () => {
  // Show only first 5 notifications for better sequential effect
  const visibleMessages = fleetMessages.slice(0, 5)

  return (
    <div className="w-full max-w-sm h-[280px] bg-white p-2 overflow-hidden font-sans relative rounded-lg border border-gray-200">
      {/* Fade overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="space-y-2 relative z-0">
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 items-start p-3 border border-gray-200 rounded-lg transform transition duration-300 ease-in-out cursor-pointer animate-slideInRight hover:border-blue-300 hover:bg-blue-50/30`}
            style={{
              animationDelay: `${i * 800}ms`,
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <div
              className={`w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-lg bg-gradient-to-br ${msg.color} flex items-center justify-center text-white font-bold text-xs shadow-sm`}
            >
              {msg.status === 'calling' && '📞'}
              {msg.status === 'booking' && '🔧'}
              {msg.status === 'dispatched' && '🚛'}
              {msg.status === 'complete' && '✅'}
              {msg.status === 'warranty' && '💰'}
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-900">
                {msg.truck}
                <span className="text-xs text-gray-600 before:content-['•'] before:mr-1">
                  {msg.time}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----------------- Chart Components (shadcn/ui style) -------------------
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-gray-500 [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-gray-200/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-gray-200 [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-gray-200 [&_.recharts-radial-bar-background-sector]:fill-gray-100 [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-gray-100 [&_.recharts-reference-line_[stroke='#ccc']]:stroke-gray-200 [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color,
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip as React.FC<RechartsPrimitive.TooltipProps<any, any>>

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  {
    active?: boolean
    payload?: Array<any>
    label?: React.ReactNode
    labelFormatter?: (label: any, payload: Array<any>) => React.ReactNode
    labelClassName?: string
    formatter?: (value: any, name: any, item: any, index: number, payload: any) => React.ReactNode
    color?: string
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  } & React.ComponentProps<"div">
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-gray-200/50 bg-white px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-gray-600",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            },
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-gray-600">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-gray-900">
                          {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltip"

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadObj = payload as Record<string, unknown>

  const payloadPayload =
    "payload" in payloadObj &&
    typeof payloadObj.payload === "object" &&
    payloadObj.payload !== null
      ? payloadObj.payload as Record<string, unknown>
      : undefined

  let configLabelKey: string = key

  if (
    key in payloadObj &&
    typeof payloadObj[key] === "string"
  ) {
    configLabelKey = payloadObj[key] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = payloadPayload[key] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key] as unknown as (typeof config)[keyof typeof config] | undefined
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartStyle,
}
