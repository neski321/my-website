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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minHeight: "100vh",
        maxWidth: "100vw",
        zIndex: -5,
        margin: 0,
        padding: 0,
        overflow: "visible"
      }}
    >
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
    </div>
  );
} 