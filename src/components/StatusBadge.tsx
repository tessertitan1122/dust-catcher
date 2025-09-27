interface Props {
  status: "online" | "offline" | "error";
}

export default function StatusBadge({ status }: Props) {
  const colors = {
    online: "bg-green-100 text-green-700",
    error: "bg-orange-100 text-orange-700",
    offline: "bg-red-100 text-red-700",
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-bold ${colors[status]}`}>
      {status.toUpperCase()}
    </span>
  );
}
