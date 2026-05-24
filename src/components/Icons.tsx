/* Central icon set — minimal, monochrome, terminal aesthetic.
   All icons use currentColor; size 14×14 default, override via props. */

type IconProps = { size?: number; className?: string };

const base = (size = 14, className = '') => ({
  width: size,
  height: size,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true,
});

/* ── Stack category glyphs ─────────────────────────────── */

export function FrontendGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <rect x="1.5" y="2.5" width="13" height="11" rx="1" />
      <line x1="1.5" y1="5.5" x2="14.5" y2="5.5" />
      <circle cx="3.5" cy="4" r="0.4" fill="currentColor" />
      <circle cx="5" cy="4" r="0.4" fill="currentColor" />
    </svg>
  );
}

export function BackendGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <ellipse cx="8" cy="3.5" rx="5.5" ry="1.8" />
      <path d="M2.5 3.5 V8 a5.5 1.8 0 0 0 11 0 V3.5" />
      <path d="M2.5 8 V12.5 a5.5 1.8 0 0 0 11 0 V8" />
    </svg>
  );
}

export function AiGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <rect x="4.5" y="4.5" width="7" height="7" rx="0.6" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
      <line x1="6" y1="1" x2="6" y2="4.5" />
      <line x1="10" y1="1" x2="10" y2="4.5" />
      <line x1="6" y1="11.5" x2="6" y2="15" />
      <line x1="10" y1="11.5" x2="10" y2="15" />
      <line x1="1" y1="6" x2="4.5" y2="6" />
      <line x1="1" y1="10" x2="4.5" y2="10" />
      <line x1="11.5" y1="6" x2="15" y2="6" />
      <line x1="11.5" y1="10" x2="15" y2="10" />
    </svg>
  );
}

export function ToolsGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <rect x="1.5" y="2.5" width="13" height="11" rx="1" />
      <path d="M4 6 L6 8 L4 10" />
      <line x1="7.5" y1="10.5" x2="11.5" y2="10.5" />
    </svg>
  );
}

/* ── Featured card title glyphs ────────────────────────── */

/* Workflow — 3-node pipeline */
export function WorkflowGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="3" cy="8" r="1.8" />
      <circle cx="8" cy="8" r="1.8" />
      <circle cx="13" cy="8" r="1.8" />
      <line x1="4.8" y1="8" x2="6.2" y2="8" />
      <line x1="9.8" y1="8" x2="11.2" y2="8" />
    </svg>
  );
}

/* Dashboard — 3-bar mini chart */
export function DashboardGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <rect x="1.5" y="2.5" width="13" height="11" rx="1" />
      <line x1="4" y1="11" x2="4" y2="8" />
      <line x1="7.5" y1="11" x2="7.5" y2="5.5" />
      <line x1="11" y1="11" x2="11" y2="7" />
    </svg>
  );
}

/* Globe — site/portfolio */
export function GlobeGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="8" cy="8" r="6.2" />
      <ellipse cx="8" cy="8" rx="2.6" ry="6.2" />
      <line x1="1.8" y1="8" x2="14.2" y2="8" />
    </svg>
  );
}

/* ── Contact channel glyphs ────────────────────────────── */

export function MailGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <rect x="1.5" y="3" width="13" height="10" rx="1" />
      <path d="M1.5 4.5 L8 9.5 L14.5 4.5" />
    </svg>
  );
}

export function LinkedinGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)} stroke="none" fill="currentColor">
      <path d="M2 4.4a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0zM2.2 6.4h2.4v8H2.2v-8zM6.4 6.4h2.3v1.1c.34-.62 1.1-1.3 2.3-1.3 2.4 0 2.9 1.55 2.9 3.6v4.6h-2.4v-4.1c0-.97-.02-2.2-1.35-2.2-1.35 0-1.55 1.05-1.55 2.13v4.17H6.4v-8z" />
    </svg>
  );
}

export function GithubGlyph({ size, className }: IconProps) {
  return (
    <svg {...base(size, className)} stroke="none" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/* ── Archive — kept for ArchiveCard's NodeGlyph compatibility ─ */

export function NodeGlyph({ size = 18, className = 'archive-card-glyph text-primary/70' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="2.2" fill="currentColor" />
      <line x1="8" y1="2" x2="8" y2="5.8" stroke="currentColor" strokeWidth="1" />
      <line x1="2.5" y1="11" x2="5.8" y2="9.2" stroke="currentColor" strokeWidth="1" />
      <line x1="13.5" y1="11" x2="10.2" y2="9.2" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="2" r="1.2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="2.5" cy="11" r="1.2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="13.5" cy="11" r="1.2" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
