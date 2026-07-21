"use client";
import type { CSSProperties } from "react";

export type IconName =
  | "agriculture"
  | "arrow_forward"
  | "unknown_document"
  | "no_accounts"
  | "coronavirus"
  | "shopping_cart"
  | "inventory"
  | "visibility"
  | "done_all"
  | "qr_code_2"
  | "health_and_safety"
  | "handyman"
  | "videocam"
  | "verified_user"
  | "check_circle"
  | "expand_more"
  | "menu"
  | "close";

export function Icon({
  name,
  filled = false,
}: {
  name: IconName;
  filled?: boolean;
}) {
  return (
    <span
      className="material-symbols-outlined icon"
      style={
        filled
          ? ({ fontVariationSettings: '"FILL" 1, "wght" 500' } as CSSProperties)
          : undefined
      }
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
