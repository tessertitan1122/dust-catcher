interface ModuleProps {
  module: {
    id: number;
    status: string;
    pm25: number | null;
  };
}

export default function DustModuleCard({ module }: ModuleProps) {
  const statusColor =
    module.status === "ONLINE" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="p-4 border rounded shadow bg-white space-y-2">
      <h2 className="font-semibold text-lg">เครื่องดักฝุ่น #{module.id}</h2>
      <p>
        สถานะ:{" "}
        <span className={`text-white px-2 py-1 rounded ${statusColor}`}>
          {module.status}
        </span>
      </p>
      <p>
        ค่า PM2.5: {module.pm25 !== null ? `${module.pm25} µg/m³` : "-"}
      </p>
    </div>
  );
}
