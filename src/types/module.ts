export type ModuleStatus = "online" | "offline" | "error";

export interface ModuleData {
  id: number;
  value: number;       // ค่า PM2.5
  status: ModuleStatus;
  timestamp: string;   // ISO string
}
