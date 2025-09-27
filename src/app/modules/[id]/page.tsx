"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ModuleDetail() {
  const { id } = useParams();

  // mock ข้อมูลจริง ๆ อาจ fetch จาก DB
  const mock = {
    id,
    status: "ONLINE",
    pm25: 88.25,
    history: [60, 75, 88, 92, 80, 85], // สมมติค่า PM2.5 ย้อนหลัง
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          เครื่องดักฝุ่น #{id}
        </h1>
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
        >
          ← กลับหน้าแรก
        </Link>
      </header>

      <div className="rounded-xl bg-white p-6 shadow-md">
        <p
          className={`font-medium ${
            mock.status === "ONLINE" ? "text-green-600" : "text-red-600"
          }`}
        >
          สถานะ: {mock.status}
        </p>
        <p className="mt-2 text-lg">ค่า PM2.5 ปัจจุบัน: {mock.pm25} µg/m³</p>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            กราฟค่า PM2.5 ย้อนหลัง
          </h2>
          {/* placeholder กราฟ */}
          <div className="h-48 w-full rounded-lg bg-gradient-to-r from-blue-200 to-blue-400"></div>
        </div>
      </div>
    </main>
  );
}
