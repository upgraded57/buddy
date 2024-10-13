import icon from "@/lib/icons";

export default function Intro() {
  const points = [
    "Track real-time overview of company's financial performance.",
    "Track created projects budget against actual revenue and expenses.",
    "Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.",
  ];
  return (
    <div className="max-w-[485px]">
      <img src={icon.logo} alt="Buddy" className="w-[120px]" />
      <div className="my-[127px]">
        {points.map((point, idx) => (
          <div className="space-x-4 flex mb-6 items-center" key={idx}>
            <img src={icon.check} alt="Check" className="w-6" />
            <p className="text-lg">{point}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-light-clr">
        &copy; 2022 Revvex. All rights reserved
      </p>
    </div>
  );
}
