"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModuleData } from "../types/module";

export default function Home() {
  const [modules, setModules] = useState<ModuleData[]>([]);

  useEffect(() => {
    // mock ข้อมูล
    setModules([
      { id: 1, name: "เครื่องดักฝุ่น #1", status: "ONLINE", pm25: 88.25 },
      { id: 2, name: "เครื่องดักฝุ่น #2", status: "ONLINE", pm25: 80.07 },
      { id: 3, name: "เครื่องดักฝุ่น #3", status: "ONLINE", pm25: 137.57 },
      { id: 4, name: "เครื่องดักฝุ่น #4", status: "ERROR", pm25: null },
    ]);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 p-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Dust Catcher Dashboard
        </h1>
        <p className="text-gray-500">ภาพรวมสถานะเครื่องดักฝุ่นทั้งหมด</p>
      </header>

      {/* การ์ดเครื่อง */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Link key={module.id} href={`/modules/${module.id}`}>
            <div className="cursor-pointer rounded-2xl bg-white shadow-md p-6 transition hover:scale-105 hover:shadow-lg">
              <h2 className="text-xl font-semibold">{module.name}</h2>
              <p
                className={`mt-2 font-medium ${
                  module.status === "ONLINE"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                สถานะ: {module.status}
              </p>
              <p className="mt-1 text-gray-700">
                ค่า PM2.5:{" "}
                {module.pm25 !== null ? `${module.pm25} µg/m³` : "-"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
