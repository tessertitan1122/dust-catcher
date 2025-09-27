import { NextResponse } from "next/server";

type ModuleData = {
  id: number;
  value: number;
  status: "online" | "offline" | "error";
  timestamp: string;
};

function getRandomStatus(): "online" | "offline" | "error" {
  const rand = Math.random();
  if (rand < 0.7) return "online";
  if (rand < 0.9) return "error";
  return "offline";
}

export async function GET() {
  const modules: ModuleData[] = [];
  for (let i = 1; i <= 5; i++) {
    const status = getRandomStatus();
    const value = status === "online" ? Math.round((Math.random() * 150 + 5) * 100) / 100 : 0;
    modules.push({
      id: i,
      value,
      status,
      timestamp: new Date().toISOString(),
    });
  }
  return NextResponse.json(modules);
}
