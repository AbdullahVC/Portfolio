import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: 6,
          border: '1.5px solid rgba(56,189,248,0.45)',
        }}
      >
        <span
          style={{
            color: '#38BDF8',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '-0.5px',
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
