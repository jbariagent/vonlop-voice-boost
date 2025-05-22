
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Define global gtag function type for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Track page views with Google Analytics
const sendPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-4ZSPC20ZMY', {
      page_path: url
    });
  }
};

// Initialize with the current page
sendPageView(window.location.pathname);

createRoot(document.getElementById("root")!).render(<App />);
