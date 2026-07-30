import type { SVGProps } from "react";

type ToolSvgProps = SVGProps<SVGSVGElement> & { size?: number | string };

function sizePx(size: number | string | undefined): number {
  if (typeof size === "number") return size;
  if (typeof size === "string") return Number.parseInt(size, 10) || 24;
  return 24;
}

/** Monochrome Zabbix-style mark (brand logo not in Simple Icons). */
export function ZabbixIcon({ size = 24, className, ...props }: ToolSvgProps) {
  const s = sizePx(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M4.5 3.75A1.75 1.75 0 0 1 6.25 2h11.5A1.75 1.75 0 0 1 19.5 3.75v16.5A1.75 1.75 0 0 1 17.75 22H6.25A1.75 1.75 0 0 1 4.5 20.25V3.75Zm3.2 3.4h8.6v2.1L11.7 14.8h4.6v2.45H7.7v-2.1l4.55-5.55H7.7V7.15Z" />
    </svg>
  );
}

/** Monochrome Wazuh-style mark (not in installed react-icons set). */
export function WazuhIcon({ size = 24, className, ...props }: ToolSvgProps) {
  const s = sizePx(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M3.2 5.1h3.1l2.35 9.4L12 5.8l3.35 8.7 2.35-9.4h3.1L17.2 19H13.8L12 13.6 10.2 19H6.8L3.2 5.1Zm8.05 0h1.5l.55 2.15h-2.6L11.25 5.1Z" />
    </svg>
  );
}

/** Generic EPP / endpoint shield mark. */
export function EppIcon({ size = 24, className, ...props }: ToolSvgProps) {
  const s = sizePx(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M12 3 5.5 5.5v5.2c0 4.3 2.9 7.8 6.5 9.3 3.6-1.5 6.5-5 6.5-9.3V5.5L12 3Z" />
      <path d="M9.2 12.1h5.6" />
      <path d="M12 9.4v5.4" />
      <circle cx="12" cy="12.1" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
