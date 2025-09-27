interface Props {
    value: number;
    status: "online" | "offline" | "error";
  }
  
  export default function PMDisplay({ value, status }: Props) {
    return (
      <div className="text-center text-3xl font-bold text-blue-500 mt-2">
        {status === "online" ? `${value} µg/m³` : "-"}
      </div>
    );
  }
  