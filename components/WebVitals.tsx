'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log Web Vitals to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }

    // In production, send to your analytics service
    // Choose one of the following integrations:

    // TODO: Option 1 - Google Analytics 4
    // if (window.gtag) {
    //   window.gtag('event', metric.name, {
    //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //     event_category: 'Web Vitals',
    //     event_label: metric.id,
    //     non_interaction: true,
    //   });
    // }

    // TODO: Option 2 - Vercel Analytics (if using @vercel/analytics)
    // import { sendWebVitals } from '@vercel/analytics';
    // sendWebVitals(metric);

    // TODO: Option 3 - Custom Analytics Endpoint
    // const body = JSON.stringify(metric);
    // const url = '/api/analytics';
    // if (navigator.sendBeacon) {
    //   navigator.sendBeacon(url, body);
    // } else {
    //   fetch(url, { body, method: 'POST', keepalive: true });
    // }

    // TODO: Option 4 - PostHog
    // if (window.posthog) {
    //   window.posthog.capture('web_vitals', {
    //     metric_name: metric.name,
    //     metric_value: metric.value,
    //     metric_id: metric.id,
    //   });
    // }
  });

  return null;
}
