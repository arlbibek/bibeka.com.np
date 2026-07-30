import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  AlertTriangle,
  Binary,
  Bot,
  BrickWall,
  Bug,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  Eye,
  FileCode2,
  FileKey,
  FileLock,
  FileSearch,
  Fingerprint,
  Flame,
  Globe,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  MonitorDot,
  Network,
  Radar,
  Router,
  ScanLine,
  ScanSearch,
  SearchCode,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldEllipsis,
  Siren,
  Terminal,
  Unplug,
  Vault,
  Wifi,
  Workflow,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiAnsible,
  SiAuth0,
  SiBitdefender,
  SiBurpsuite,
  SiCloudflare,
  SiDocker,
  SiElastic,
  SiElasticstack,
  SiFortinet,
  SiGrafana,
  SiKalilinux,
  SiKubernetes,
  SiMetasploit,
  SiNginx,
  SiOkta,
  SiOpenvpn,
  SiOwasp,
  SiPaloaltonetworks,
  SiPrometheus,
  SiProxmox,
  SiQualys,
  SiSnyk,
  SiSnort,
  SiSonarqubecloud,
  SiSplunk,
  SiTerraform,
  SiTrivy,
  SiVault,
  SiWireguard,
  SiWireshark,
} from "react-icons/si";
import {
  EppIcon,
  WazuhIcon,
  ZabbixIcon,
} from "@/components/icons/security-tools";

export type IconTone = "gold" | "soft" | "muted";

/** Lucide + react-icons both accept size/className; strokeWidth is Lucide-only. */
export type FloatingIconComponent = ComponentType<
  SVGProps<SVGSVGElement> & {
    size?: number | string;
    strokeWidth?: number;
  }
>;

export type FloatingIconSpec = {
  Icon: FloatingIconComponent | IconType;
  top: string;
  left: string;
  size: number;
  tone: IconTone;
  opacityMin: number;
  opacityMax: number;
  rotate: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
  /** Filled brand marks — skip Lucide strokeWidth. */
  filled?: boolean;
  twinkle?: boolean;
  twinkleDuration?: number;
  twinkleDelay?: number;
  desktopOnly?: boolean;
};

/** Full-viewport starfield; icons may overlay the name. */
export const LANDING_FLOATING_ICONS: FloatingIconSpec[] = [
  // Top band
  { Icon: Shield, top: "8%", left: "5%", size: 17, tone: "gold", opacityMin: 0.18, opacityMax: 0.32, rotate: -6, driftX: 10, driftY: -12, duration: 42, delay: 0, twinkle: true, twinkleDuration: 13.7, twinkleDelay: 0.3 },
  { Icon: SiBurpsuite, top: "6%", left: "14%", size: 22, tone: "soft", opacityMin: 0.12, opacityMax: 0.22, rotate: 4, driftX: -7, driftY: -9, duration: 50, delay: 2.2, filled: true, desktopOnly: true },
  { Icon: Lock, top: "7%", left: "22%", size: 19, tone: "soft", opacityMin: 0.14, opacityMax: 0.26, rotate: 5, driftX: -8, driftY: -10, duration: 48, delay: 1.4, desktopOnly: true },
  { Icon: SiKalilinux, top: "5%", left: "30%", size: 11, tone: "muted", opacityMin: 0.11, opacityMax: 0.2, rotate: -3, driftX: 6, driftY: -7, duration: 52, delay: 4.0, filled: true, twinkle: true, twinkleDuration: 19.1, twinkleDelay: 4.2, desktopOnly: true },
  { Icon: ShieldCheck, top: "9%", left: "38%", size: 24, tone: "muted", opacityMin: 0.13, opacityMax: 0.23, rotate: 8, driftX: 8, driftY: -8, duration: 44, delay: 2.8, desktopOnly: true },
  { Icon: WazuhIcon, top: "6%", left: "68%", size: 13, tone: "gold", opacityMin: 0.14, opacityMax: 0.26, rotate: -5, driftX: -8, driftY: -9, duration: 47, delay: 1.1, filled: true, twinkle: true, twinkleDuration: 15.4, twinkleDelay: 8.7, desktopOnly: true },
  { Icon: ShieldAlert, top: "8%", left: "76%", size: 15, tone: "gold", opacityMin: 0.16, opacityMax: 0.3, rotate: 7, driftX: 11, driftY: -10, duration: 40, delay: 1.9, twinkle: true, twinkleDuration: 21.6, twinkleDelay: 1.9, desktopOnly: true },
  { Icon: KeyRound, top: "11%", left: "86%", size: 12, tone: "soft", opacityMin: 0.15, opacityMax: 0.28, rotate: -9, driftX: -9, driftY: -11, duration: 46, delay: 0.7, twinkle: true, twinkleDuration: 17.2, twinkleDelay: 11.4 },
  { Icon: SiMetasploit, top: "7%", left: "93%", size: 20, tone: "muted", opacityMin: 0.11, opacityMax: 0.2, rotate: 6, driftX: -6, driftY: -7, duration: 51, delay: 3.4, filled: true },
  { Icon: Vault, top: "14%", left: "96%", size: 16, tone: "muted", opacityMin: 0.14, opacityMax: 0.24, rotate: -5, driftX: -8, driftY: -8, duration: 50, delay: 3.2 },

  // Upper mid
  { Icon: ZabbixIcon, top: "18%", left: "4%", size: 26, tone: "gold", opacityMin: 0.14, opacityMax: 0.26, rotate: 3, driftX: 9, driftY: -8, duration: 45, delay: 0.9, filled: true, twinkle: true, twinkleDuration: 12.8, twinkleDelay: 6.1 },
  { Icon: ScanSearch, top: "20%", left: "11%", size: 11, tone: "muted", opacityMin: 0.13, opacityMax: 0.23, rotate: 3, driftX: 10, driftY: -9, duration: 45, delay: 0.5 },
  { Icon: SiGrafana, top: "17%", left: "18%", size: 21, tone: "soft", opacityMin: 0.12, opacityMax: 0.22, rotate: -4, driftX: 7, driftY: -8, duration: 49, delay: 2.6, filled: true, desktopOnly: true },
  { Icon: Eye, top: "22%", left: "26%", size: 14, tone: "soft", opacityMin: 0.14, opacityMax: 0.26, rotate: -4, driftX: 8, driftY: -9, duration: 47, delay: 2.1, twinkle: true, twinkleDuration: 20.3, twinkleDelay: 14.8, desktopOnly: true },
  { Icon: SiPrometheus, top: "16%", left: "72%", size: 12, tone: "muted", opacityMin: 0.11, opacityMax: 0.2, rotate: 5, driftX: -6, driftY: -7, duration: 53, delay: 1.7, filled: true, desktopOnly: true },
  { Icon: Radar, top: "21%", left: "80%", size: 18, tone: "muted", opacityMin: 0.12, opacityMax: 0.22, rotate: 9, driftX: -9, driftY: -12, duration: 49, delay: 0.3, twinkle: true, twinkleDuration: 16.5, twinkleDelay: 3.5, desktopOnly: true },
  { Icon: Bug, top: "24%", left: "89%", size: 23, tone: "soft", opacityMin: 0.14, opacityMax: 0.26, rotate: -6, driftX: -10, driftY: -9, duration: 43, delay: 1.2 },
  { Icon: SiElasticstack, top: "19%", left: "95%", size: 11, tone: "gold", opacityMin: 0.12, opacityMax: 0.22, rotate: 4, driftX: -7, driftY: -8, duration: 48, delay: 3.8, filled: true, twinkle: true, twinkleDuration: 22.1, twinkleDelay: 9.9 },
  { Icon: SearchCode, top: "27%", left: "97%", size: 17, tone: "gold", opacityMin: 0.12, opacityMax: 0.2, rotate: 6, driftX: -6, driftY: -8, duration: 52, delay: 4.1, desktopOnly: true },

  // Mid left/right
  { Icon: EppIcon, top: "30%", left: "3%", size: 12, tone: "gold", opacityMin: 0.13, opacityMax: 0.24, rotate: -2, driftX: 8, driftY: -7, duration: 46, delay: 1.5, twinkle: true, twinkleDuration: 14.3, twinkleDelay: 16.2 },
  { Icon: SiBitdefender, top: "33%", left: "9%", size: 19, tone: "soft", opacityMin: 0.11, opacityMax: 0.2, rotate: 5, driftX: 7, driftY: -6, duration: 50, delay: 4.4, filled: true, desktopOnly: true },
  { Icon: Fingerprint, top: "32%", left: "16%", size: 16, tone: "gold", opacityMin: 0.15, opacityMax: 0.28, rotate: 6, driftX: 11, driftY: -9, duration: 44, delay: 1.6, twinkle: true, twinkleDuration: 18.8, twinkleDelay: 2.4, desktopOnly: true },
  { Icon: Server, top: "35%", left: "24%", size: 25, tone: "muted", opacityMin: 0.12, opacityMax: 0.2, rotate: -3, driftX: 8, driftY: -7, duration: 51, delay: 3.5, desktopOnly: true },
  { Icon: SiSplunk, top: "29%", left: "74%", size: 11, tone: "muted", opacityMin: 0.11, opacityMax: 0.2, rotate: -6, driftX: -6, driftY: -7, duration: 54, delay: 2.0, filled: true, desktopOnly: true },
  { Icon: SiWireshark, top: "34%", left: "82%", size: 21, tone: "soft", opacityMin: 0.12, opacityMax: 0.22, rotate: 3, driftX: -8, driftY: -8, duration: 47, delay: 5.1, filled: true, twinkle: true, twinkleDuration: 11.9, twinkleDelay: 12.7, desktopOnly: true },
  { Icon: Network, top: "36%", left: "90%", size: 13, tone: "muted", opacityMin: 0.12, opacityMax: 0.22, rotate: 5, driftX: -10, driftY: -8, duration: 46, delay: 2.4 },
  { Icon: Globe, top: "31%", left: "96%", size: 27, tone: "soft", opacityMin: 0.13, opacityMax: 0.24, rotate: -7, driftX: -8, driftY: -10, duration: 48, delay: 0.9, twinkle: true, twinkleDuration: 21.2, twinkleDelay: 7.3 },
  { Icon: Wifi, top: "40%", left: "4%", size: 18, tone: "soft", opacityMin: 0.1, opacityMax: 0.19, rotate: 4, driftX: 7, driftY: -6, duration: 53, delay: 2.7 },
  { Icon: SiSnort, top: "41%", left: "12%", size: 14, tone: "muted", opacityMin: 0.1, opacityMax: 0.18, rotate: -4, driftX: 6, driftY: -5, duration: 55, delay: 6.2, filled: true, desktopOnly: true },

  // Lower mid — infra / identity / cloud
  { Icon: FileKey, top: "45%", left: "6%", size: 20, tone: "soft", opacityMin: 0.12, opacityMax: 0.22, rotate: -4, driftX: 8, driftY: -8, duration: 50, delay: 1.1 },
  { Icon: SiDocker, top: "44%", left: "14%", size: 12, tone: "gold", opacityMin: 0.12, opacityMax: 0.24, rotate: 2, driftX: 7, driftY: -6, duration: 48, delay: 3.0, filled: true, twinkle: true, twinkleDuration: 15.9, twinkleDelay: 15.1, desktopOnly: true },
  { Icon: SiKubernetes, top: "48%", left: "21%", size: 23, tone: "soft", opacityMin: 0.11, opacityMax: 0.2, rotate: -5, driftX: 8, driftY: -7, duration: 52, delay: 1.8, filled: true, desktopOnly: true },
  { Icon: Database, top: "52%", left: "10%", size: 15, tone: "muted", opacityMin: 0.1, opacityMax: 0.19, rotate: -5, driftX: 6, driftY: -6, duration: 54, delay: 4.5, desktopOnly: true },
  { Icon: SiOkta, top: "46%", left: "78%", size: 17, tone: "muted", opacityMin: 0.11, opacityMax: 0.2, rotate: 4, driftX: -7, driftY: -6, duration: 49, delay: 2.9, filled: true, desktopOnly: true },
  { Icon: FileLock, top: "48%", left: "86%", size: 14, tone: "gold", opacityMin: 0.13, opacityMax: 0.26, rotate: 8, driftX: -9, driftY: -7, duration: 47, delay: 3.8, twinkle: true, twinkleDuration: 19.7, twinkleDelay: 5.6 },
  { Icon: Cpu, top: "50%", left: "93%", size: 11, tone: "soft", opacityMin: 0.12, opacityMax: 0.22, rotate: 6, driftX: -7, driftY: -8, duration: 49, delay: 2.0, twinkle: true, twinkleDuration: 13.1, twinkleDelay: 10.8, desktopOnly: true },
  { Icon: SiCloudflare, top: "54%", left: "97%", size: 19, tone: "gold", opacityMin: 0.11, opacityMax: 0.2, rotate: -3, driftX: -6, driftY: -5, duration: 51, delay: 5.5, filled: true },

  // Lower — offensive / hardening / platform
  { Icon: ScanLine, top: "58%", left: "4%", size: 21, tone: "soft", opacityMin: 0.1, opacityMax: 0.19, rotate: 7, driftX: 8, driftY: -6, duration: 52, delay: 0.8, desktopOnly: true },
  { Icon: Terminal, top: "56%", left: "13%", size: 13, tone: "gold", opacityMin: 0.13, opacityMax: 0.26, rotate: -6, driftX: 7, driftY: -8, duration: 46, delay: 3.1, twinkle: true, twinkleDuration: 17.8, twinkleDelay: 0.9, desktopOnly: true },
  { Icon: SiOwasp, top: "60%", left: "22%", size: 18, tone: "soft", opacityMin: 0.11, opacityMax: 0.2, rotate: 3, driftX: 6, driftY: -6, duration: 50, delay: 4.8, filled: true, twinkle: true, twinkleDuration: 20.9, twinkleDelay: 13.5, desktopOnly: true },
  { Icon: SiTrivy, top: "63%", left: "30%", size: 11, tone: "muted", opacityMin: 0.1, opacityMax: 0.18, rotate: -4, driftX: 5, driftY: -5, duration: 56, delay: 2.3, filled: true, desktopOnly: true },
  { Icon: SiFortinet, top: "57%", left: "70%", size: 22, tone: "muted", opacityMin: 0.1, opacityMax: 0.18, rotate: 5, driftX: -6, driftY: -5, duration: 53, delay: 3.6, filled: true, desktopOnly: true },
  { Icon: SiPaloaltonetworks, top: "61%", left: "78%", size: 14, tone: "soft", opacityMin: 0.11, opacityMax: 0.2, rotate: -2, driftX: -7, driftY: -6, duration: 48, delay: 1.4, filled: true, desktopOnly: true },
  { Icon: Code2, top: "59%", left: "87%", size: 19, tone: "muted", opacityMin: 0.1, opacityMax: 0.17, rotate: 5, driftX: -8, driftY: -6, duration: 55, delay: 1.5, desktopOnly: true },
  { Icon: Binary, top: "55%", left: "94%", size: 14, tone: "soft", opacityMin: 0.09, opacityMax: 0.16, rotate: -8, driftX: -6, driftY: -6, duration: 56, delay: 4.8, desktopOnly: true },
  { Icon: Layers, top: "64%", left: "92%", size: 16, tone: "muted", opacityMin: 0.1, opacityMax: 0.19, rotate: 4, driftX: -6, driftY: -5, duration: 51, delay: 2.9, desktopOnly: true },

  // Bottom band
  { Icon: MonitorDot, top: "68%", left: "7%", size: 18, tone: "muted", opacityMin: 0.1, opacityMax: 0.17, rotate: -4, driftX: 6, driftY: -5, duration: 53, delay: 3.6, desktopOnly: true },
  { Icon: SiAnsible, top: "70%", left: "15%", size: 12, tone: "soft", opacityMin: 0.1, opacityMax: 0.18, rotate: 3, driftX: 6, driftY: -5, duration: 54, delay: 5.0, filled: true, desktopOnly: true },
  { Icon: AlertTriangle, top: "72%", left: "23%", size: 20, tone: "soft", opacityMin: 0.09, opacityMax: 0.16, rotate: 5, driftX: 6, driftY: -5, duration: 57, delay: 1.8, twinkle: true, twinkleDuration: 14.6, twinkleDelay: 8.1 },
  { Icon: SiTerraform, top: "74%", left: "31%", size: 15, tone: "muted", opacityMin: 0.09, opacityMax: 0.16, rotate: -3, driftX: 5, driftY: -5, duration: 58, delay: 4.1, filled: true, desktopOnly: true },
  { Icon: ShieldCheck, top: "75%", left: "6%", size: 11, tone: "gold", opacityMin: 0.1, opacityMax: 0.22, rotate: 3, driftX: 8, driftY: -6, duration: 48, delay: 0.2, twinkle: true, twinkleDuration: 18.2, twinkleDelay: 4.8 },
  { Icon: SiVault, top: "69%", left: "72%", size: 17, tone: "gold", opacityMin: 0.11, opacityMax: 0.2, rotate: 4, driftX: -6, driftY: -5, duration: 50, delay: 2.5, filled: true, twinkle: true, twinkleDuration: 12.4, twinkleDelay: 16.9, desktopOnly: true },
  { Icon: SiOpenvpn, top: "73%", left: "80%", size: 21, tone: "soft", opacityMin: 0.1, opacityMax: 0.18, rotate: -5, driftX: -5, driftY: -5, duration: 55, delay: 3.3, filled: true, desktopOnly: true },
  { Icon: KeyRound, top: "71%", left: "87%", size: 25, tone: "soft", opacityMin: 0.09, opacityMax: 0.16, rotate: 7, driftX: 7, driftY: -5, duration: 54, delay: 2.5, desktopOnly: true },
  { Icon: Shield, top: "76%", left: "93%", size: 14, tone: "gold", opacityMin: 0.12, opacityMax: 0.24, rotate: -4, driftX: -8, driftY: -7, duration: 47, delay: 1.0, twinkle: true, twinkleDuration: 21.8, twinkleDelay: 2.8 },
  { Icon: SiWireguard, top: "80%", left: "84%", size: 16, tone: "muted", opacityMin: 0.09, opacityMax: 0.15, rotate: 2, driftX: -5, driftY: -5, duration: 57, delay: 6.0, filled: true, desktopOnly: true },
  { Icon: Server, top: "82%", left: "96%", size: 12, tone: "muted", opacityMin: 0.09, opacityMax: 0.14, rotate: 5, driftX: -6, driftY: -5, duration: 59, delay: 3.9 },

  // Extra sparse stars — tools + concepts
  { Icon: SiQualys, top: "26%", left: "42%", size: 17, tone: "muted", opacityMin: 0.08, opacityMax: 0.14, rotate: 4, driftX: 5, driftY: -5, duration: 60, delay: 7.2, filled: true, desktopOnly: true },
  { Icon: SiSnyk, top: "42%", left: "38%", size: 13, tone: "soft", opacityMin: 0.08, opacityMax: 0.14, rotate: -3, driftX: -5, driftY: -5, duration: 58, delay: 5.7, filled: true, desktopOnly: true },
  { Icon: SiSonarqubecloud, top: "66%", left: "40%", size: 19, tone: "muted", opacityMin: 0.08, opacityMax: 0.14, rotate: 5, driftX: 5, driftY: -5, duration: 61, delay: 8.1, filled: true, desktopOnly: true },
  { Icon: SiAuth0, top: "38%", left: "62%", size: 11, tone: "soft", opacityMin: 0.08, opacityMax: 0.14, rotate: -4, driftX: -5, driftY: -5, duration: 59, delay: 6.8, filled: true, desktopOnly: true },
  { Icon: SiNginx, top: "52%", left: "64%", size: 20, tone: "muted", opacityMin: 0.09, opacityMax: 0.15, rotate: 3, driftX: 5, driftY: -5, duration: 56, delay: 4.9, filled: true, desktopOnly: true },
  { Icon: SiProxmox, top: "78%", left: "58%", size: 14, tone: "soft", opacityMin: 0.09, opacityMax: 0.15, rotate: -2, driftX: -5, driftY: -5, duration: 57, delay: 7.7, filled: true, desktopOnly: true },
  { Icon: SiElastic, top: "14%", left: "48%", size: 16, tone: "gold", opacityMin: 0.08, opacityMax: 0.15, rotate: 6, driftX: 5, driftY: -6, duration: 55, delay: 3.7, filled: true, twinkle: true, twinkleDuration: 16.1, twinkleDelay: 11.9, desktopOnly: true },
  { Icon: Activity, top: "43%", left: "52%", size: 18, tone: "muted", opacityMin: 0.07, opacityMax: 0.13, rotate: -5, driftX: 5, driftY: -5, duration: 62, delay: 8.5, desktopOnly: true },
  { Icon: Flame, top: "62%", left: "55%", size: 12, tone: "soft", opacityMin: 0.07, opacityMax: 0.13, rotate: 4, driftX: -5, driftY: -5, duration: 60, delay: 9.2, desktopOnly: true },
  { Icon: Bot, top: "28%", left: "56%", size: 21, tone: "muted", opacityMin: 0.08, opacityMax: 0.14, rotate: -3, driftX: 5, driftY: -5, duration: 58, delay: 6.4, desktopOnly: true },
  { Icon: Cloud, top: "84%", left: "12%", size: 15, tone: "soft", opacityMin: 0.08, opacityMax: 0.14, rotate: 2, driftX: 5, driftY: -5, duration: 59, delay: 5.3 },
  { Icon: Container, top: "85%", left: "28%", size: 19, tone: "muted", opacityMin: 0.08, opacityMax: 0.14, rotate: -4, driftX: 5, driftY: -5, duration: 61, delay: 7.0, desktopOnly: true },
  { Icon: HardDrive, top: "86%", left: "72%", size: 13, tone: "muted", opacityMin: 0.08, opacityMax: 0.13, rotate: 5, driftX: -5, driftY: -5, duration: 60, delay: 4.6, desktopOnly: true },
  { Icon: Router, top: "83%", left: "48%", size: 17, tone: "soft", opacityMin: 0.07, opacityMax: 0.13, rotate: -2, driftX: 5, driftY: -5, duration: 63, delay: 8.8, desktopOnly: true },
  { Icon: Siren, top: "15%", left: "58%", size: 11, tone: "gold", opacityMin: 0.09, opacityMax: 0.16, rotate: 3, driftX: -5, driftY: -6, duration: 54, delay: 2.1, twinkle: true, twinkleDuration: 19.4, twinkleDelay: 7.0, desktopOnly: true },
  { Icon: BrickWall, top: "49%", left: "48%", size: 20, tone: "muted", opacityMin: 0.08, opacityMax: 0.14, rotate: 4, driftX: 5, driftY: -5, duration: 57, delay: 9.5, desktopOnly: true },
  { Icon: FileSearch, top: "67%", left: "64%", size: 14, tone: "soft", opacityMin: 0.08, opacityMax: 0.14, rotate: -5, driftX: -5, driftY: -5, duration: 58, delay: 6.1, desktopOnly: true },
  { Icon: FileCode2, top: "37%", left: "46%", size: 18, tone: "muted", opacityMin: 0.07, opacityMax: 0.13, rotate: 6, driftX: 5, driftY: -5, duration: 61, delay: 8.0, desktopOnly: true },
  { Icon: Workflow, top: "77%", left: "42%", size: 12, tone: "soft", opacityMin: 0.08, opacityMax: 0.14, rotate: -3, driftX: 5, driftY: -5, duration: 56, delay: 5.9, desktopOnly: true },
  { Icon: Unplug, top: "23%", left: "64%", size: 22, tone: "muted", opacityMin: 0.07, opacityMax: 0.13, rotate: 5, driftX: -5, driftY: -5, duration: 62, delay: 7.4, desktopOnly: true },
  { Icon: ShieldEllipsis, top: "81%", left: "36%", size: 15, tone: "gold", opacityMin: 0.09, opacityMax: 0.16, rotate: -4, driftX: 6, driftY: -5, duration: 53, delay: 3.9, twinkle: true, twinkleDuration: 15.2, twinkleDelay: 14.2, desktopOnly: true },
];

export const LANDING_FLOATING_TONE_CLASS: Record<IconTone, string> = {
  gold: "text-white/55 drop-shadow-[0_0_10px_rgba(255,255,255,0.14)]",
  soft: "text-white/30",
  muted: "text-white/20",
};
