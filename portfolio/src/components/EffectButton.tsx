import { useEffect, useRef } from "react";
import "EffectButton.css";

interface EffectButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export default function EffectButton({
  children,
  size = "md",
  onClick,
  className = "",
}: EffectButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty("--mouseX", `${x}px`);
      btn.style.setProperty("--mouseY", `${y}px`);
    };

    btn.addEventListener("mousemove", handleMove);
    return () => btn.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={`neon-btn ${size} ${className}`}
    >
      <span>{children}</span>
      <div className="inner"></div>
    </button>
  );
}
