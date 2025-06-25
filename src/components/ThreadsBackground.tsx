"use client";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Threads = dynamic(() => import("./Threads"), { ssr: false });

export default function ThreadsBackground() {
  const pathname = usePathname();
  if (pathname === "/") return null;
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