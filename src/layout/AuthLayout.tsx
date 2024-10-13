import { Button } from "@/components/ui/button";
import icon from "@/lib/icons";
import { ReactNode } from "react";
import Intro from "@/components/Intro";

interface propsType {
  children: ReactNode;
  showHelpBtn?: boolean;
}

export default function AuthLayout({ children, showHelpBtn }: propsType) {
  return (
    <div className="w-full lg:flex h-screen">
      <div className="hidden basis-1/2 bg-white lg:flex pt-[80px] justify-center px-[4vw]">
        <Intro />
      </div>
      <div className="basis-1/2 w-full py-10 h-full bg-grey-clr flex items-center justify-center md:px-[4vw]">
        <div
          className={`max-w-[490px] w-full space-y-14 relative ${
            !showHelpBtn && "top-[-40px]"
          }`}
        >
          {children}
          {showHelpBtn && (
            <Button className="gap-2 rounded-full pry-btn shadow float-right">
              Get Help
              <img src={icon.chat} alt="Get Help" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
