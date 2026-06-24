import type { ReactNode } from "react";

type StickerLabelProps = {
  children: ReactNode;
  className?: string;
};

export function StickerLabel({ children, className = "" }: StickerLabelProps) {
  return (
    <span
      className={`text-center inline-block rounded-md border-2 border-[#151515] bg-[#FFD166] px-3 py-1 font-black shadow-[3px_3px_0_#151515] ${className}`}
    >
      {children}
    </span>
  );
}
