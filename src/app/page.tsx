// src/app/page.tsx
import DesktopLandingPage from '../components/DesktopLandingPage';
import MobileLandingPage from '../components/MobileLandingPage';

export default function Page() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopLandingPage />
      </div>
      <div className="md:hidden">
        <MobileLandingPage />
      </div>
    </>
  );
}
