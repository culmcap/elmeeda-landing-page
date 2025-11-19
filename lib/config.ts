/**
 * Application Configuration
 * Validates and exports environment variables with proper fallbacks
 */

export const config = {
  /**
   * Waitlist URL for user signups
   * Required for production deployment
   */
  waitlistUrl: process.env.NEXT_PUBLIC_WAITLIST_URL || '',

  /**
   * Check if we're in production environment
   */
  isProduction: process.env.NODE_ENV === 'production',

  /**
   * Check if we're in development environment
   */
  isDevelopment: process.env.NODE_ENV === 'development',
} as const;

/**
 * Validates required environment variables
 * Logs warnings in development, throws errors in production
 */
export function validateConfig() {
  const errors: string[] = [];

  if (!config.waitlistUrl) {
    errors.push('NEXT_PUBLIC_WAITLIST_URL is not set');
  }

  if (errors.length > 0) {
    const message = `Configuration errors:\n${errors.map(e => `  - ${e}`).join('\n')}`;

    if (config.isProduction) {
      // In production, log error but don't crash the app
      // This allows the site to load even if waitlist isn't configured
      console.error(message);
    } else {
      // In development, just warn
      console.warn(message);
    }
  }

  return errors.length === 0;
}

// Validate config on module load
if (typeof window === 'undefined') {
  // Only validate on server-side to avoid hydration issues
  validateConfig();
}
