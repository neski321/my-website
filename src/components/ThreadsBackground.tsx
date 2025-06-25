"use client";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useIsMobile } from "../hooks/use-mobile";

const Threads = dynamic(() => import("./Threads"), { ssr: false });

export default function ThreadsBackground() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  if (pathname === "/" || isMobile) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minHeight: "100vh",
        zIndex: -5
      }}
    >
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
    </div>
  );
} 