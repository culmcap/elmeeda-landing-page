/**
 * Shared animation variants for Framer Motion
 * Keeps animations consistent across all components
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.3, ease: "linear" as const }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};
