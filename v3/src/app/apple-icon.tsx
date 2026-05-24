import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A192F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          border: '4px solid rgba(56,189,248,0.45)',
        }}
      >
        <span
          style={{
            color: '#38BDF8',
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: '-3px',
            fontFamily: 'monospace',
          }}
        >
          AVC
        </span>
      </div>
    ),
    size
  );
}
