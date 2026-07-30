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

/** Monochrome Uptime Kuma–style mark (heart / uptime). */
export function UptimeKumaIcon({ size = 24, className, ...props }: ToolSvgProps) {
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
      <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
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

/** Nmap-style radar / network scan mark. */
export function NmapIcon({ size = 24, className, ...props }: ToolSvgProps) {
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
      <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
      <path d="M12 5.2a6.8 6.8 0 0 1 6.8 6.8" />
      <path d="M12 2.5A9.5 9.5 0 0 1 21.5 12" />
      <path d="M12 8.2a3.8 3.8 0 0 1 3.8 3.8" />
      <path d="M4.6 14.2 9.4 12" />
    </svg>
  );
}

/** Suricata-style IDS mark (abstract fish / packet). */
export function SuricataIcon({ size = 24, className, ...props }: ToolSvgProps) {
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
      <path d="M3.5 12s3.2-5.2 8.5-5.2S20.5 12 20.5 12s-3.2 5.2-8.5 5.2S3.5 12 3.5 12Z" />
      <circle cx="15.2" cy="11.2" r="1" fill="currentColor" stroke="none" />
      <path d="M20.5 12h2" />
    </svg>
  );
}

/** PCI DSS compliance badge. */
export function PciDssIcon({ size = 24, className, ...props }: ToolSvgProps) {
  const s = sizePx(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M7.2 3.5h9.6L20 7.2v9.6L16.8 20.5H7.2L4 16.8V7.2L7.2 3.5Z" />
      <rect x="7.4" y="9.2" width="9.2" height="5.6" rx="0.9" />
      <path d="M7.4 11.2h9.2" />
      <path d="M9.2 13.6h2.4" />
    </svg>
  );
}

/** ISO/IEC 27001:2022 compliance badge. */
export function Iso27001Icon({ size = 24, className, ...props }: ToolSvgProps) {
  const s = sizePx(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="9.1" />
      <circle cx="12" cy="12" r="6.4" />
      <path d="m9.2 12.1 1.7 1.7 3.9-4" />
    </svg>
  );
}
