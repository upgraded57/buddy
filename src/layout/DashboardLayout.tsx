import { Button } from "@/components/ui/button";
import icon from "@/lib/icons";
import image from "@/lib/images";
import { ReactNode } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface propsType {
  children: ReactNode;
}

interface UserProps {
  created_at: string;
  emai: string;
  email_verified_at: string;
  first_name: string;
  id: number;
  last_name: string;
  updated_at: string;
}

export default function DashboardLayout({ children }: propsType) {
  const navigate = useNavigate();
  const location = useLocation();

  const user: UserProps = JSON.parse(
    localStorage.getItem("user") || "{}"
  ) as UserProps;
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/auth/login");
  };

  const navLinks = [
    {
      path: "/",
      title: "My Portfolio",
      icon: { inactive: icon.portfolio, active: icon.portfolio_active },
    },
    {
      path: "/groups",
      title: "My Group",
      icon: { inactive: icon.group, active: icon.group_active },
    },
    {
      path: "/messages",
      title: "Messages",
      icon: { inactive: icon.message, active: icon.message_active },
    },
    {
      path: "/analytics",
      title: "Analytics",
      icon: { inactive: icon.analytics, active: icon.analytics_active },
    },
    {
      path: "/pack",
      title: "Pack",
      icon: { inactive: icon.pack, active: icon.pack_active },
    },
    {
      path: "/settings",
      title: "Settings",
      icon: { inactive: icon.settings, active: icon.settings_active },
    },
  ];
  return (
    <div className="flex w-full bg-grey-clr h-screen overflow-hidden gap-8">
      <div className="w-[250px] h-screen bg-white relative">
        <img
          src={icon.logo}
          alt="Buddy"
          className="w-[120px] mx-auto mt-7 mb-10"
        />
        {navLinks.map((link, idx) => (
          <NavLink
            to={link.path}
            key={idx}
            className="navLink flex gap-5 items-center"
          >
            <div className="p-4 mr-6 rounded-2xl flex gap-4 navChild w-full">
              <img
                src={
                  location.pathname === link.path
                    ? link.icon.active
                    : link.icon.inactive
                }
                alt={link.title}
                className="w-4"
              />
              <p className="font-[600]">{link.title}</p>
            </div>
          </NavLink>
        ))}

        <div className="absolute w-[80%] left-1/2 -translate-x-1/2 bottom-9 text-center">
          <img
            src={image.user}
            alt="User"
            className="mx-auto absolute -top-[30px] left-1/2 -translate-x-1/2"
          />
          <div className="w-full bg-white rounded-2xl p-4 pt-10 shadow-2xl">
            <p className="text-lg font-[700]">{`${user.first_name} ${user.last_name}`}</p>
            <p className="text-xs text-light-clr">Influencer</p>
            <Button
              className="w-full gap-4 rounded-xl bg-[#FF860029] text-pry-clr hover:bg-[#ff880062] mt-3"
              onClick={logout}
            >
              <img src={icon.logout} alt="Logout" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen overflow-y-scroll pr-6">{children}</div>
    </div>
  );
}
