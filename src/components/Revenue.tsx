import image from "@/lib/images";

export default function Revenue() {
  const revenues = [
    {
      qty: "$4,000",
      tag: "Recently Added Pages",
      image: image.revenue_1,
    },
    {
      qty: "$2,120",
      tag: "Video Monetization",
      image: image.revenue_2,
    },
    {
      qty: "$1,752",
      tag: "Community Buildup",
      image: image.revenue_3,
    },
  ];
  return (
    <div>
      <h3 className="mb-4">Revenue</h3>
      {revenues.map((revenue, idx) => (
        <div
          className="w-full p-3 rounded-xl border-[1px] border-stroke-clr mb-3 flex items-center justify-between"
          key={idx}
        >
          <span>
            <p className="text-black-clr font-[800]">{revenue.qty}</p>
            <p className="text-[12px] text-light-clr">{revenue.tag}</p>
          </span>
          <img src={revenue.image} alt={revenue.tag} className="w-12" />
        </div>
      ))}
    </div>
  );
}
