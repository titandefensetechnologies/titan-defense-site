'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DesktopLandingPage = dynamic(() => import('@/components/DesktopLandingPage'), { ssr: false });
const MobileLandingPage = dynamic(() => import('@/components/MobileLandingPage'), { ssr: false });

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return isMobile ? <MobileLandingPage /> : <DesktopLandingPage />;
}
