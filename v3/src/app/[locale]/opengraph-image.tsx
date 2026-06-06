import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abdullah V. Çoşkun — Full-Stack Web & AI Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const name = locale === 'tr' ? 'Abdullah V. Çoşkun' : 'Abdullah V. Coskun';
  const badge = locale === 'tr' ? 'AVÇ' : 'AVC';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A192F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <span style={{ color: '#38BDF8', fontSize: '24px', letterSpacing: '0.2em' }}>
            {'> FULL-STACK WEB & AI DEVELOPER'}
          </span>
          <span style={{ color: '#CCD6F6', fontSize: '64px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            {name}
          </span>
          <span style={{ color: '#8892B0', fontSize: '28px', lineHeight: 1.5 }}>
            Web Applications · AI Systems · Dashboards · Automation
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ color: '#495670', fontSize: '20px' }}>abdullahvcoskun.dev</span>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '80px',
            color: '#38BDF8',
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          {badge}
        </div>
      </div>
    ),
    { ...size }
  );
}
