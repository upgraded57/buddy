import icon from "@/lib/icons";
import image from "@/lib/images";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ChatProp {
  image: string;
  name: string;
  last_message: string[];
  date: string;
  unread?: string;
  read?: boolean;
}

interface ChatRightProps {
  currentChat: ChatProp | null;
}

export default function ChatRight({ currentChat }: ChatRightProps) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState({
    day1: [
      {
        type: "received",
        content: {
          type: "text",
          mssg: "Hi David, have you got the project report pdf?",
        },
      },
      {
        type: "sent",
        content: { type: "text", mssg: "NO. I did not get it" },
      },
    ],
    day2: [
      {
        type: "received",
        content: {
          type: "text",
          mssg: "Ok, I will just sent it here. Plz be sure to fill the details by today end of the day.",
        },
      },
      {
        type: "received",
        content: {
          type: "attachment",
          file: image.chat_attachment,
          mssg: "project_report.pdf",
        },
      },
      {
        type: "sent",
        content: {
          type: "text",
          mssg: "Ok. Should I send it over email as well after filling the details.",
        },
      },
      {
        type: "received",
        content: {
          type: "text",
          mssg: "Ya. I'll be adding more team members to it.",
        },
      },
      {
        type: "sent",
        content: {
          type: "text",
          mssg: "Ok",
        },
      },
    ],
  });

  const scrollToLastMessage = () => {
    const messagesBox = document.getElementById("messages-box");
    if (!messagesBox) return;
    messagesBox.scrollTop = messagesBox.scrollHeight;
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [messages]);

  const sendNewMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newMessage.length < 1) return;

    const typed = {
      type: "sent",
      content: {
        type: "text",
        mssg: newMessage,
      },
    };

    setMessages((prev) => ({
      ...prev,
      day2: [...prev.day2, typed],
    }));

    setNewMessage("");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-[60px] flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-full relative">
              <img
                src={currentChat?.image || image.chat_2}
                alt="Chat Image"
                className="w-full h-full rounded-full"
              />
              <span className="w-4 h-4 aspect-square rounded-full bg-[#33EC23] absolute left-0 bottom-0"></span>
            </span>
            <p className="text-black-clr text-sm font-[700]">
              {currentChat?.name || "Lisa Roy"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-5">
              <img src={icon.search_light} alt="" className="w-full" />
            </span>
            <span className="w-5">
              <img src={icon.heart} alt="" />
            </span>
            <span className="w-5">
              <img src={icon.chat_bell} alt="" />
            </span>
          </div>
        </div>
        <hr />
      </div>

      <div
        id="messages-box"
        className="flex-1 overflow-y-scroll w-full flex flex-col gap-5 pr-4 pt-4"
      >
        {messages.day1.map((message, idx) => (
          <div
            className={`flex gap-1 items-end ${
              message.type === "sent"
                ? "self-end flex-row-reverse text-pry-clr"
                : "self-start text-black-clr"
            }`}
            key={idx}
          >
            <span className="w-6 h-6 rounded-full aspect-square overflow-hidden">
              <img
                src={message.type === "sent" ? image.chat_1 : image.chat_8}
                alt="Image"
                className="w-full h-full object-cover"
              />
            </span>
            <div
              className={`rounded-[10px] bg-[#F1F1F1] max-w-[265px] ${
                message.type === "sent" ? "rounded-br-none" : " rounded-bl-none"
              }`}
            >
              {message.content.type === "text" ? (
                <p className="p-3">{message.content.mssg}</p>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}

        <div className="w-full flex items-center justify-center relative my-2">
          <span className="w-full h-[2px] bg-[#D9D9D9]"></span>
          <p className="text-light-clr px-4 bg-[#FAFAFA] absolute">Yesterday</p>
        </div>

        {messages.day2.map((message, idx) => (
          <div
            className={`flex gap-1 items-end ${
              message.type === "sent"
                ? "self-end flex-row-reverse text-pry-clr"
                : "self-start text-black-clr"
            }`}
            key={idx}
          >
            <span className="w-6 h-6 rounded-full aspect-square overflow-hidden">
              <img
                src={message.type === "sent" ? image.chat_1 : image.chat_8}
                alt="Image"
                className="w-full h-full object-cover"
              />
            </span>
            <div
              className={`rounded-[10px] bg-[#F1F1F1] max-w-[265px] ${
                message.type === "sent" ? "rounded-br-none" : " rounded-bl-none"
              }`}
            >
              {message.content.type === "text" ? (
                <p className="p-3">{message.content.mssg}</p>
              ) : (
                <div className="max-w-[155px] overflow-hidden rounded-t-[10px]">
                  <img src={message.content.file} alt="" className="" />
                  <p className="text-center p-2">{message.content.mssg}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={sendNewMessage}
        className="h-[96px] bg-[#D9D9D9] rounded-[12px] px-8 py-7 mt-4 flex items-center gap-3"
      >
        <div className="w-full relative flex items-center">
          <img
            src={icon.record}
            alt="Record Audio"
            className="absolute left-6"
          />
          <Input
            className="rounded-full pl-12 pr-[130px]"
            placeholder="Write Something"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <div className="absolute flex items-center gap-3 right-6">
            <img src={icon.attachement} alt="" />
            <img src={icon.camera} alt="" />
            <img src={icon.emoji} alt="" />
          </div>
        </div>
        <Button className="w-9 h-9 rounded-full pry-btn p-2">
          <img src={icon.plane} alt="" />
        </Button>
      </form>
    </div>
  );
}
