import icon from "@/lib/icons";

interface CardProps {
  type: 1 | 2 | 3;
  qty: number;
}
export default function Card({ type, qty }: CardProps) {
  return (
    <div
      className={`p-5 bg-white rounded-2xl flex items-center justify-between transition-colors ${
        type === 1
          ? "hover:bg-[#E0FAF5]"
          : type === 2
          ? "hover:bg-[#EFF2FE]"
          : "hover:bg-[#FFF0E0]"
      }`}
    >
      <span>
        <h1>{qty}</h1>
        <p className="text-xs font-[600] text-light-clr mt-2">
          {type === 1
            ? "Total Channels"
            : type === 2
            ? "New Members"
            : "All Impressions"}
        </p>
      </span>
      <span
        className={`w-12 aspect-square rounded-full flex items-center justify-center ${
          type === 1
            ? "bg-[#E0FAF5] hover:bg-[#E0FAF5]"
            : type === 2
            ? "bg-[#EFF2FE] hover:bg-[#EFF2FE]"
            : "bg-[#FFF0E0] hover:bg-[#FFF0E0]"
        }`}
      >
        <img
          src={
            type === 1
              ? icon.channels
              : type === 2
              ? icon.members
              : icon.analytics_active
          }
          alt="Icon"
        />
      </span>
    </div>
  );
}
