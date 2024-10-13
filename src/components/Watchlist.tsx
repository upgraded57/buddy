import icon from "@/lib/icons";
import image from "@/lib/images";
import { Link } from "react-router-dom";

export default function Watchlist() {
  const listings = [
    {
      type: 1,
      name: "AAPL",
      amount: "$142.90",
      change: "+0.47%",
    },
    {
      type: 2,
      name: "BPL",
      amount: "$142.90",
      change: "-0.78%",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3>Watchlist</h3>
        <Link to="#" className="text-pry-clr text-xs uppercase font-[700]">
          view all
        </Link>
      </div>
      {listings.map((listing, idx) => (
        <div
          className="py-3 px-4 bg-accent-light-clr flex items-center rounded-xl mb-3 gap-3"
          key={idx}
        >
          <div className="basis-1/3">
            <div className="flex items-center justify-between mb-2">
              <p className="font-[900] text-black-clr text-sm">
                {listing.name}
              </p>
              <span>
                <img
                  src={listing.type === 1 ? icon.arrow_up : icon.arrow_down}
                  alt=""
                />
              </span>
            </div>

            <p className="font-[700] text-light-clr">{listing.amount}</p>
            <p
              className={` text-xs font-[700] ${
                listing.type === 1 ? "text-green-400" : "text-red-500"
              }`}
            >
              {listing.change}
            </p>
          </div>
          <div className="basis-2/3">
            <img src={image.graph} alt={listing.name} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
