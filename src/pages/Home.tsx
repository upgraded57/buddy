import Topbar from "@/components/Topbar";
import Card from "@/components/Card";
import Overview from "@/components/Overview";
import PotentialMembers from "@/components/PotentialMembers";
import Watchlist from "@/components/Watchlist";
import Revenue from "@/components/Revenue";
import TrendingPosts from "@/components/TrendingPosts";
import TrendingNews from "@/components/TrendingNews";
export default function Home() {
  return (
    <>
      <Topbar header="My Portfolio" />
      <div className="h-full pb-4 flex gap-8">
        <div className="basis-[70%] w-full">
          <div className=" w-full grid grid-cols-3 gap-4 mb-4">
            <Card type={1} qty={51} />
            <Card type={2} qty={125} />
            <Card type={3} qty={789} />
          </div>
          <div className="w-full bg-white rounded-2xl mb-4 pt-6">
            <Overview />
          </div>
          <div className="w-full bg-white rounded-2xl mb-4 p-6">
            <TrendingPosts />
          </div>
          <div className="w-full bg-white rounded-2xl mb-4 p-6">
            <PotentialMembers />
          </div>
        </div>
        <div className="basis-[30%]">
          <div className="w-full bg-white rounded-2xl mb-4 p-5">
            <Watchlist />
          </div>
          <div className="w-full bg-white rounded-2xl mb-4 p-5">
            <Revenue />
          </div>
          <div className="w-full bg-white rounded-2xl p-5">
            <TrendingNews />
          </div>
        </div>
      </div>
    </>
  );
}
