import icon from "@/lib/icons";
import { Input } from "@/components/ui/input";

interface TopbarProps {
  header: String;
}
export default function Topbar({ header }: TopbarProps) {
  return (
    <div className="h-[100px] w-full flex items-center">
      <h1>{header}</h1>
      <div className="flex gap-4 flex-1 justify-end">
        <div className="w-[35%] h-12  rounded-2xl bg-white flex items-center relative">
          <img src={icon.search} className="absolute left-4" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none p-4 pl-12 border-none rounded-2xl"
          />
        </div>

        <div className="w-12 aspect-square rounded-full bg-white flex items-center justify-center">
          <img src={icon.plus} alt="Add New" />
        </div>

        <div className="w-12 aspect-square rounded-full bg-white flex items-center justify-center">
          <img src={icon.bell} alt="Notifications" />
        </div>
      </div>
    </div>
  );
}
