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
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minHeight: "100vh",
        maxWidth: "100vw",
        zIndex: -5,
        margin: 0,
        padding: 0,
        border: "none",
        outline: "none",
        overflow: "visible",
        transform: "translate3d(0, 0, 0)"
      }}
    >
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
    </div>
  );
} 