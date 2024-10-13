import OverviewChart from "./OverviewChart";
export default function Overview() {
  const btns = [
    {
      id: "robbin",
      title: "Robbin hood",
      checked: true,
    },
    {
      id: "amreitrade",
      title: "Amreitrade",
    },
    {
      id: "fidelity",
      title: "Fidelity",
    },
    {
      id: "charles",
      title: "Charles",
    },
  ];
  const btnStyles = `cursor-pointer transition-colors bg-accent-light-clr text-light-clr hover:bg-[#FFF0E0] rounded-full h-auto py-1 px-4 text-sm font-[700]`;
  return (
    <div>
      <div className="flex w-full items-center justify-between mb-5 px-6">
        <h3>Overview</h3>
        <div className="flex gap-2">
          {btns.map((btn, idx) => (
            <label htmlFor={btn.id} key={idx}>
              <input
                type="radio"
                name="overview"
                id={btn.id}
                defaultChecked={btn.checked ? true : false}
                className="peer"
                hidden
              />
              <span
                className={`peer-checked:bg-pry-clr peer-checked:text-white ${btnStyles}`}
              >
                {btn.title}
              </span>
            </label>
          ))}
        </div>
      </div>

      <OverviewChart />
    </div>
  );
}
