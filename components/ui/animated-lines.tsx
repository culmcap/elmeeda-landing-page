"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function FloatingPaths({ position }: { position: number }) {
    const prefersReducedMotion = useReducedMotion();

    // Reduce path count for better performance and respect reduced motion preference
    const pathCount = prefersReducedMotion ? 12 : 36;

    const paths = Array.from({ length: pathCount }, (_, i) => ({
        id: i,
        d: `M-${455 - i * 5 * position} -${189 + i * 6}C-${
            455 - i * 5 * position
        } -${189 + i * 6} -${387 - i * 5 * position} ${216 - i * 6} ${
            227 - i * 5 * position
        } ${343 - i * 6}C${891 - i * 5 * position} ${470 - i * 6} ${
            959 - i * 5 * position
        } ${875 - i * 6} ${959 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="-75 0 1200 650"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.01}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={prefersReducedMotion ? {
                            // Static state for reduced motion
                            pathLength: 1,
                            opacity: 0.3,
                        } : {
                            // Full animation
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={prefersReducedMotion ? {
                            duration: 0,
                        } : {
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function AnimatedLines() {
    return (
        <>
            <div className="text-[#4169E1]">
                <FloatingPaths position={1} />
            </div>
            <div className="text-[#6495ED]">
                <FloatingPaths position={-1} />
            </div>
        </>
    );
}
