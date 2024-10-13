import { Input } from "@/components/ui/input";
import icon from "@/lib/icons";
import image from "@/lib/images";
import { useState } from "react";

interface ChatProp {
  image: any;
  name: string;
  last_message: string[];
  date: string;
  unread?: string;
  read?: boolean;
}

interface ChatLeftProps {
  setCurrentChat: React.Dispatch<React.SetStateAction<ChatProp | null>>;
}

export default function ChatLeft({ setCurrentChat }: ChatLeftProps) {
  const [activeChat, setActiveChat] = useState(0);
  const chatLists = [
    {
      image: image.chat_2,
      name: "Lisa Roy",
      last_message: ["Hi, are you Available Tomorrow?"],
      date: "10:35 AM",
    },
    {
      image: image.chat_3,
      name: "Jamie Taylor",
      last_message: ["Nice One.", "Will Do it tommorow"],
      date: "10:35 AM",
      unread: "3",
    },
    {
      image: image.chat_4,
      name: "Jason Roy",
      last_message: [
        "That's Great.",
        "I am Looking forward to having a great start.",
      ],
      date: "10:35 AM",
      read: true,
    },
    {
      image: image.chat_5,
      name: "Amy Frost",
      last_message: ["Hi, will you start working on the chat app right now?"],
      date: "10:35 AM",
      read: true,
    },
    {
      image: image.chat_6,
      name: "Paul Wilson",
      last_message: ["See you tommorow champ"],
      date: "10:35 AM",
      read: true,
    },
    {
      image: image.chat_7,
      name: "Ana Wlliams",
      last_message: ["???"],
      date: "10:35 AM",
      unread: "1",
    },
  ];

  const selectChat = (idx: number) => {
    setActiveChat(idx);
    setCurrentChat(chatLists[idx]);
  };
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-11 rounded-full aspect-square">
              <img
                src={image.chat_1}
                alt="User"
                className="w-full h-full object-cover"
              />
            </span>
            <span>
              <p className="text-pry-clr text-[15px] font-[800]">David Peter</p>
              <p className="text-[9px] text-black-clr font-[700]">
                Senior Developer
              </p>
            </span>
          </div>
          <div className="aspect-square flex items-center justify-center cursor-pointer p-1">
            <img src={icon.pen} alt="" />
          </div>
        </div>

        <label
          htmlFor="chat-search"
          className="relative flex items-center my-[26px]"
        >
          <img
            src={icon.search_light}
            alt=""
            className="absolute left-3 opacity-50"
          />
          <Input
            type="text"
            name="chat-search"
            id="chat-search"
            className="w-full rounded-full border-0 pl-12"
            placeholder="Search Here ..."
          />
        </label>
        <hr />
      </div>
      <div className="flex-1 pt-[26px] overflow-y-scroll pl-4 pr-2">
        {chatLists.map((chat, idx) => (
          <div
            className={`w-full flex items-center justify-between gap-2 mb-5 py-1.5 px-2.5 hover:bg-white rounded-[10px] cursor-pointer ${
              activeChat === idx && "active-chat-shadow bg-white"
            }`}
            key={idx}
            onClick={() => selectChat(idx)}
          >
            <div className="flex items-start gap-2">
              <span className="w-[45px] h-[45px] aspect-square rounded-full">
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-full h-full object-cover"
                />
              </span>
              <span>
                <p className="text-pry-clr text-sm font-[800]">{chat.name}</p>
                {chat.last_message.map((message, idx) => (
                  <p key={idx} className="text-[9px] text-light-clr">
                    {message}
                  </p>
                ))}
              </span>
            </div>
            <span className="flex flex-col items-end">
              <p className="text-[9px] text-light-clr text-nowrap">
                {chat.date}
              </p>
              {chat.unread && (
                <span className="w-3 h-3 aspect-square rounded-full bg-pry-clr text-white text-[9px] flex items-center justify-center">
                  {chat.unread}
                </span>
              )}
              {chat.read && (
                <span className="w-3 h-3 aspect-square rounded-full bg-[#DCE8FF] text-white text-[9px] flex items-center justify-center p-0.5">
                  <img src={icon.chatCheck} />
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
