'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log Web Vitals to console in development
    // In production, send to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }

    // Example: Send to analytics
    // const body = JSON.stringify(metric);
    // const url = '/api/analytics';
    // if (navigator.sendBeacon) {
    //   navigator.sendBeacon(url, body);
    // } else {
    //   fetch(url, { body, method: 'POST', keepalive: true });
    // }
  });

  return null;
}
