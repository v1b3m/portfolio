import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagnifyingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if device is likely a desktop/laptop
    const isDesktop =
      window.matchMedia("(min-width: 768px)").matches &&
      !("ontouchstart" in window);
    setShouldRender(isDesktop);

    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });

        // Check if the cursor is over a clickable element
        const target = e.target as HTMLElement;
        setIsPointer(window.getComputedStyle(target).cursor === "pointer");
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] h-8 w-8 rounded-full bg-blue-500/20 backdrop-blur-sm"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 750,
          damping: 35,
          mass: 0.2,
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[100] h-2 w-2 rounded-full bg-blue-500"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.2,
        }}
      />
    </>
  );
}
