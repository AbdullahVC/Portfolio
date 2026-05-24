import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

const P  = 'var(--color-primary)';
const S  = 'var(--color-surface-2)';
const L  = 'var(--color-neutral-700)';
const T  = 'var(--color-neutral-500)';
const T2 = 'var(--color-neutral-300)';

/* ─────────────────────────────────────────────────────────
   AI Systems — infrastructure service map
───────────────────────────────────────────────────────── */
function TopologyVisual() {
  const chips = [
    { label: 'INPUT',   x: 2,   y: 8,  w: 34, h: 13, core: false },
    { label: 'API',     x: 2,   y: 36, w: 34, h: 13, core: false },
    { label: 'AI CORE', x: 83,  y: 18, w: 34, h: 18, core: true  },
    { label: 'DB',      x: 152, y: 8,  w: 34, h: 13, core: false },
    { label: 'OUTPUT',  x: 152, y: 36, w: 34, h: 13, core: false },
  ];

  const lines = [
    { x1: 36,  y1: 14, x2: 83,  y2: 24 },
    { x1: 36,  y1: 42, x2: 83,  y2: 30 },
    { x1: 117, y1: 24, x2: 152, y2: 14 },
    { x1: 117, y1: 30, x2: 152, y2: 42 },
  ];

  return (
    <svg className="w-full" viewBox="0 0 200 58" fill="none" aria-hidden="true">
      {lines.map((l, i) => (
        <line key={i} {...l} stroke={T} strokeWidth="1" />
      ))}

      {/* Packets — INPUT→CORE and CORE→DB */}
      <circle cx="36" cy="14" r="2" fill={P} opacity="0.9"
        style={{ animation: 'topo-in 6s linear 0.5s infinite' }} />
      <circle cx="117" cy="24" r="2" fill={P} opacity="0.9"
        style={{ animation: 'topo-out 7.5s linear 3s infinite' }} />

      {chips.map(({ label, x, y, w, h, core }) => (
        <g key={label}>
          <rect
            x={x} y={y} width={w} height={h} rx="2.5"
            fill={S}
            stroke={core ? P : L}
            strokeWidth="1"
            opacity={core ? undefined : 0.9}
            className={core ? 'node-breathe node-core' : undefined}
            style={core ? {
              animationDuration: '4s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            } : undefined}
          />
          <text
            x={x + w / 2} y={y + h / 2 + 2.5}
            textAnchor="middle"
            fontSize={core ? '6.5' : '6'}
            fill={core ? P : T}
            fontFamily="var(--font-mono)"
            letterSpacing="0.04em"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Automation Systems — execution pipeline
───────────────────────────────────────────────────────── */
function FlowVisual() {
  const nodes = [
    { label: 'WEBHOOK', cx: 18,  active: false, source: true  },
    { label: 'AI',      cx: 76,  active: true,  source: false },
    { label: 'DB',      cx: 134, active: false, source: false },
    { label: 'DONE',    cx: 182, active: false, source: false },
  ];

  return (
    <svg className="w-full" viewBox="0 0 200 46" fill="none" aria-hidden="true">
      <line x1="23"  y1="18" x2="71"  y2="18" stroke={T} strokeWidth="1" />
      <line x1="81"  y1="18" x2="129" y2="18" stroke={L} strokeWidth="1" />
      <line x1="139" y1="18" x2="177" y2="18" stroke={L} strokeWidth="1" />

      <circle
        cx="18" cy="18" r="2"
        fill={P} opacity="0.9"
        style={{ animation: 'flow-packet 4s linear infinite' }}
      />

      {nodes.map(({ label, cx, active, source }) => (
        <g key={label}>
          <circle
            cx={cx} cy="18" r="5"
            fill={active ? P : S}
            stroke={active ? P : source ? T2 : L}
            strokeWidth="1"
            opacity={active ? undefined : source ? 1 : 0.8}
            className={active ? 'node-breathe node-ai' : source ? 'webhook-node' : undefined}
            style={active ? {
              animationDuration: '2.5s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            } : undefined}
          />
          <text
            x={cx} y="36"
            textAnchor="middle"
            fontSize="6.5"
            fill={active ? T2 : source ? T2 : T}
            fontFamily="var(--font-mono)"
            letterSpacing="0.04em"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Full-Stack Products — dashboard split layout
───────────────────────────────────────────────────────── */
function BrowserVisual() {
  return (
    <svg className="w-full" viewBox="0 0 200 58" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="198" height="56" rx="4" stroke={L} strokeWidth="1" />
      <line x1="1" y1="14" x2="199" y2="14" stroke={L} strokeWidth="1" />
      <circle cx="10" cy="7.5" r="2.5" fill={T} opacity="0.5" />
      <circle cx="18" cy="7.5" r="2.5" fill={T} opacity="0.5" />
      <circle cx="26" cy="7.5" r="2.5" fill={T} opacity="0.5" />
      <rect x="36" y="3.5" width="100" height="8" rx="2" stroke={L} strokeWidth="1" />
      <line x1="44" y1="14" x2="44" y2="57" stroke={L} strokeWidth="1" />
      {[20, 28, 36, 44].map((y, i) => (
        <rect
          key={y}
          x="7" y={y} rx="1.5"
          width={[26, 20, 24, 18][i]}
          height="3"
          fill={i === 0 ? T2 : L}
          opacity={i === 0 ? 0.7 : 0.45}
        />
      ))}
      <rect x="50" y="18" width="58" height="22" rx="2" stroke={L} strokeWidth="1" fill={S} opacity="0.6" />
      <rect x="56" y="24" width="28" height="5" rx="1.5" fill={T} opacity="0.6" />
      <rect x="56" y="32" width="18" height="2.5" rx="1" fill={L} opacity="0.6" />
      <rect x="116" y="18" width="72" height="22" rx="2" stroke={L} strokeWidth="1" fill={S} opacity="0.6" />
      {/* metric-highlight — shimmer on hover */}
      <rect x="122" y="24" width="36" height="5" rx="1.5" fill={P} className="metric-highlight" />
      <rect x="122" y="32" width="24" height="2.5" rx="1" fill={L} opacity="0.6" />
      <rect x="50" y="44" width="138" height="9" rx="2" stroke={L} strokeWidth="1" fill={S} opacity="0.4" />
      {[54, 90, 126, 158].map((x) => (
        <rect key={x} x={x} y="46" width="28" height="5" rx="1" fill={L} opacity="0.5" />
      ))}
      <rect
        x="108" y="5.5" width="1.5" height="5" rx="0.5"
        fill={P}
        className="browser-cursor"
        style={{ animation: 'cursor-blink 1.2s step-end infinite' }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Internal Tools — CRUD list/table interface
───────────────────────────────────────────────────────── */
function InternalToolsVisual() {
  const rows = [
    { id: '001', wide: 60, status: 'active',  active: false },
    { id: '002', wide: 44, status: 'pending', active: true  },
    { id: '003', wide: 70, status: 'active',  active: false },
    { id: '004', wide: 52, status: 'idle',    active: false },
  ];

  return (
    <svg className="w-full" viewBox="0 0 200 58" fill="none" aria-hidden="true">
      {/* Column header */}
      <text x="6"   y="7" fontSize="4.5" fill={T} fontFamily="var(--font-mono)" letterSpacing="0.1em">ID</text>
      <text x="32"  y="7" fontSize="4.5" fill={T} fontFamily="var(--font-mono)" letterSpacing="0.1em">RECORD</text>
      <text x="160" y="7" fontSize="4.5" fill={T} fontFamily="var(--font-mono)" letterSpacing="0.1em">STATE</text>
      <line x1="2" y1="10" x2="198" y2="10" stroke={L} strokeWidth="1" />

      {/* Data rows */}
      {rows.map((row, i) => {
        const y = 14 + i * 10;
        return (
          <g key={row.id}>
            {row.active && (
              <rect x="0" y={y - 1.5} width="200" height="9" fill={P} opacity="0.08"
                className="node-breathe node-record"
                style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
            )}
            <text x="6" y={y + 4.5} fontSize="5" fill={row.active ? P : T}
              fontFamily="var(--font-mono)" letterSpacing="0.06em">
              {row.id}
            </text>
            <rect x="32" y={y + 1.5} width={row.wide} height="3" rx="0.5"
              fill={row.active ? P : L} opacity={row.active ? 0.7 : 0.5} />
            <circle cx="158" cy={y + 3.2} r="1.6" fill={row.active ? P : T}
              opacity={row.active ? 1 : 0.45} />
            <text x="164" y={y + 4.5} fontSize="4.5" fill={row.active ? P : T}
              fontFamily="var(--font-mono)" letterSpacing="0.08em">
              {row.status}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   API Integrations — fork pattern (router → 4 endpoints)
───────────────────────────────────────────────────────── */
function ApiIntegrationVisual() {
  const endpoints = [
    { label: 'STRIPE', y: 4  },
    { label: 'SLACK',  y: 18 },
    { label: 'SHEETS', y: 36 },
    { label: 'CRM',    y: 50 },
  ];

  return (
    <svg className="w-full" viewBox="0 0 200 58" fill="none" aria-hidden="true">
      {/* Source */}
      <rect x="2" y="22" width="24" height="13" rx="2" fill={S} stroke={L} strokeWidth="1" />
      <text x="14" y="30.5" textAnchor="middle" fontSize="6" fill={T}
        fontFamily="var(--font-mono)" letterSpacing="0.08em">
        APP
      </text>

      {/* Source → router */}
      <line x1="26" y1="28.5" x2="74" y2="28.5" stroke={T} strokeWidth="1" />

      {/* Diverging lines to endpoints */}
      <line x1="110" y1="28.5" x2="170" y2="8"  stroke={L} strokeWidth="1" />
      <line x1="110" y1="28.5" x2="170" y2="22" stroke={L} strokeWidth="1" />
      <line x1="110" y1="28.5" x2="170" y2="40" stroke={L} strokeWidth="1" />
      <line x1="110" y1="28.5" x2="170" y2="54" stroke={L} strokeWidth="1" />

      {/* Animated packet */}
      <circle cx="26" cy="28.5" r="2" fill={P} opacity="0.9"
        style={{ animation: 'flow-packet 3.5s linear infinite' }} />

      {/* Router — active */}
      <rect x="74" y="20" width="36" height="17" rx="2" fill={S} stroke={P} strokeWidth="1"
        className="node-breathe node-router"
        style={{
          animationDuration: '3s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
        }} />
      <text x="92" y="31" textAnchor="middle" fontSize="6.5" fill={P}
        fontFamily="var(--font-mono)" letterSpacing="0.04em">
        ROUTER
      </text>

      {/* Endpoint chips */}
      {endpoints.map(({ label, y }) => (
        <g key={label}>
          <rect x="170" y={y} width="28" height="8" rx="1.5" fill={S} stroke={L} strokeWidth="1" />
          <text x="184" y={y + 5.5} textAnchor="middle" fontSize="4.5" fill={T}
            fontFamily="var(--font-mono)" letterSpacing="0.1em">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Operational Dashboards — 2×2 metric tiles + sparkline
───────────────────────────────────────────────────────── */
function OperationalDashboardVisual() {
  return (
    <svg className="w-full" viewBox="0 0 200 58" fill="none" aria-hidden="true">
      {/* Tile 1 — runs */}
      <rect x="2" y="2" width="96" height="26" rx="2" fill={S} stroke={L} strokeWidth="1" />
      <text x="8" y="10" fontSize="4.5" fill={T} fontFamily="var(--font-mono)" letterSpacing="0.1em">RUNS</text>
      <text x="50" y="22" fontSize="11" textAnchor="middle" fill={T2}
        fontFamily="var(--font-sans)" fontWeight="600">1.2k</text>

      {/* Tile 2 — uptime (active) */}
      <rect x="102" y="2" width="96" height="26" rx="2" fill={S} stroke={P} strokeWidth="1"
        className="node-breathe node-dashboard"
        style={{
          animationDuration: '3.2s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
        }} />
      <text x="108" y="10" fontSize="4.5" fill={P} fontFamily="var(--font-mono)" letterSpacing="0.1em">UPTIME</text>
      <text x="150" y="22" fontSize="11" textAnchor="middle" fill={P}
        fontFamily="var(--font-sans)" fontWeight="600">99%</text>

      {/* Tile 3 — sparkline */}
      <rect x="2" y="32" width="96" height="22" rx="2" fill={S} stroke={L} strokeWidth="1" />
      <text x="8" y="40" fontSize="4.5" fill={T} fontFamily="var(--font-mono)" letterSpacing="0.1em">LATENCY</text>
      <polyline
        points="8,52 18,49 26,51 34,47 42,49 50,45 58,47 66,43 74,46 82,42 90,44"
        stroke={T2} strokeWidth="0.9" fill="none" opacity="0.7"
      />

      {/* Tile 4 — trend */}
      <rect x="102" y="32" width="96" height="22" rx="2" fill={S} stroke={L} strokeWidth="1" />
      <text x="108" y="40" fontSize="4.5" fill={T} fontFamily="var(--font-mono)" letterSpacing="0.1em">TREND</text>
      <text x="150" y="50" fontSize="8" textAnchor="middle" fill={T2}
        fontFamily="var(--font-mono)" letterSpacing="0.06em">▲ +12.4%</text>
    </svg>
  );
}

/* ── Card data — user-ordered for narrative ───────────────── */
const SERVICES = [
  { key: 'ai_systems'             as const, Visual: TopologyVisual             },
  { key: 'automation'             as const, Visual: FlowVisual                 },
  { key: 'internal_tools'         as const, Visual: InternalToolsVisual        },
  { key: 'product'                as const, Visual: BrowserVisual              },
  { key: 'api_integrations'       as const, Visual: ApiIntegrationVisual       },
  { key: 'operational_dashboards' as const, Visual: OperationalDashboardVisual },
];

/* ── Component ───────────────────────────────────────────── */
export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="snap-section-tall py-24 flex flex-col justify-center">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading num="02." title={t('heading')} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
          {SERVICES.map(({ key, Visual }) => (
            <article
              key={key}
              className={[
                'services-card group',
                'rounded-lg p-6',
                'transition-all duration-300',
                'hover:-translate-y-1',
                'bg-surface border border-primary/[0.12]',
                'hover:border-primary/50 hover:shadow-[0_0_22px_-6px_rgba(56,189,248,0.12)]',
              ].join(' ')}
            >
              <div className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Visual />
              </div>
              <h3 className="font-sans font-semibold text-lg text-slate-100 mb-2">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm leading-[1.55] text-slate-300">
                {t(`${key}.body`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
