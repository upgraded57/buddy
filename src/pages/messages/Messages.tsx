import Topbar from "@/components/Topbar";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
import { useState } from "react";

interface ChatProp {
  image: string;
  name: string;
  last_message: string[];
  date: string;
  unread?: string;
  read?: boolean;
}

export default function Messages() {
  const [currentChat, setCurrentChat] = useState<null | ChatProp>(null);
  return (
    <div className="h-screen">
      <Topbar header="Messages" />
      <div className="messages bg-white rounded-lgpy-8 flex p-4 gap-4 h-full">
        <div className="basis-[27%] bg-[#FAFAFA] h-full rounded-[12px]">
          <ChatLeft setCurrentChat={setCurrentChat} />
        </div>
        <div className="flex-1 bg-[#FAFAFA] h-full rounded-[12px] p-4">
          <ChatRight currentChat={currentChat} />
        </div>
      </div>
    </div>
  );
}
