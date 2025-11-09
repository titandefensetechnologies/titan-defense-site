// app/page.tsx
'use client';
import { useEffect, useState } from 'react';
import DesktopLandingPage from '@/components/DesktopLandingPage';
import MobileLandingPage from '@/components/MobileLandingPage';

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);
  return isMobile ? <MobileLandingPage /> : <DesktopLandingPage />;
}
