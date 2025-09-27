"use client";

import { useEffect, useState } from "react";
import DustModuleCard from "./DustModuleCard";
import { ModuleData } from "../types/module";

export default function DustMonitor() {
  const [modules, setModules] = useState<ModuleData[]>([]);

  // สร้างค่า PM2.5 + status แบบตรงนี้เลย
  const generateModules = () => {
    const now = new Date();
    const newModules: ModuleData[] = Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      value: Math.round(Math.random() * 150 + 5),
      status: Math.random() > 0.1 ? "online" : "error",
      timestamp: now.toISOString(),
    }));
    setModules(newModules);
  };

  useEffect(() => {
    generateModules(); // initial
    const interval = setInterval(generateModules, 5000); // update ทุก 5 วินาที
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {modules.map((mod) => (
        <DustModuleCard key={mod.id} module={mod} />
      ))}
    </div>
  );
}
