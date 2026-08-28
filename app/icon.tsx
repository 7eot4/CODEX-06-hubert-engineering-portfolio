import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5f3ff', background: '#050507', border: '4px solid #6d28d9', fontSize: 34, fontWeight: 600 }}>H</div>,
    size,
  );
}
