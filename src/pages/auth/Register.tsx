import { Input } from "@/components/ui/input";
import icon from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "@/api-calls/Auth";
import Loader from "@/components/Loader";

export default function Register() {
  const [authStep, setAuthStep] = useState<"start" | "end">("start");

  if (authStep === "start") {
    return <ChooseRegistrationType setAuthStep={setAuthStep} />;
  } else {
    return <CompleteRegistration />;
  }
}
interface registrationProp {
  setAuthStep: React.Dispatch<React.SetStateAction<"start" | "end">>;
}
const ChooseRegistrationType = ({ setAuthStep }: registrationProp) => {
  return (
    <div className="bg-white shadow p-[50px] rounded-md border-[1px] border-stroke-clr">
      <h2>Register your account</h2>

      <div className="mt-8 flex flex-col gap-4">
        <div className="relative w-full flex items-center">
          <img
            src={icon.email}
            alt=""
            className="absolute left-[25%] pointer-events-none"
          />
          <Button
            type="button"
            variant="outline"
            className="w-full hover:bg-grey-clr"
            onClick={() => setAuthStep("end")}
          >
            Sign up with email
          </Button>
        </div>

        <div className="w-full flex items-center justify-center relative pointer-events-none">
          <span className="absolute px-4 bg-white">or</span>
          <div className="w-full h-[1px] bg-stroke-clr"></div>
        </div>

        <div className="relative w-full flex items-center">
          <img
            src={icon.google}
            alt=""
            className="absolute left-[25%] pointer-events-none"
          />
          <Button
            type="button"
            variant="outline"
            className="w-full hover:bg-grey-clr"
          >
            Sign up with Google
          </Button>
        </div>
      </div>

      <p className="text-xs text-light-clr mt-10">
        By clicking the button above, you agree to our{" "}
        <i className="not-italic text-pry-clr cursor-pointer">
          {" "}
          Terms of Service{" "}
        </i>{" "}
        and{" "}
        <i className="not-italic text-pry-clr cursor-pointer">
          Privacy Policy.{" "}
        </i>
      </p>

      <div className="flex items-end gap-2 mt-16">
        <p>Already have an account?</p>
        <Link to="/auth/login" className="text-pry-clr text-sm">
          Login
        </Link>
      </div>
    </div>
  );
};

const CompleteRegistration = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setCred((prevCred) => ({
      ...prevCred,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = e.target as HTMLFormElement;

    const data = Object.fromEntries(new FormData(formData));

    register(data, setIsLoading, navigate);
  };

  return (
    <div className="bg-white shadow p-[50px] rounded-md border-[1px] border-stroke-clr">
      <h2>Register your account</h2>
      <p className="text-xs mt-3">
        Proceed to create account and setup your organization
      </p>

      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="w-full flex items-center gap-4">
          <label
            htmlFor="first_name"
            className="flex items-center relative mb-5"
          >
            <img src={icon.user} alt="" className="w-4 absolute left-5" />
            <Input
              type="text"
              className="pl-12"
              placeholder="First Name"
              name="first_name"
              required
              value={cred.first_name}
              onChange={handleInputChange}
            />
          </label>
          <label
            htmlFor="last_name"
            className="flex items-center relative mb-5"
          >
            <img src={icon.user} alt="" className="w-4 absolute left-5" />
            <Input
              type="text"
              className="pl-12"
              placeholder="Last Name"
              name="last_name"
              required
              value={cred.last_name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <label htmlFor="email" className="flex items-center relative mb-5">
          <img
            src={icon.email}
            alt=""
            className="w-4 opacity-20 absolute left-5"
          />
          <Input
            type="email"
            className="pl-12"
            placeholder="Work email"
            name="email"
            required
            value={cred.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password" className="flex items-center relative mb-7">
          <img
            src={icon.lock}
            alt=""
            className="w-4 opacity-50 absolute left-5"
          />
          <Input
            type={showPassword ? "text" : "password"}
            className="px-12"
            placeholder="Password"
            name="password"
            required
            value={cred.password}
            onChange={handleInputChange}
          />
          {cred.password.length > 0 && (
            <img
              src={showPassword ? icon.password_hide : icon.password_show}
              onClick={() => setShowPassword((prev) => !prev)}
              alt=""
              className="w-4 opacity-50 absolute right-5"
            />
          )}
        </label>

        <Button
          type="submit"
          className="pry-btn w-full"
          disabled={
            cred.first_name.length < 1 ||
            cred.last_name.length < 1 ||
            cred.email.length < 1 ||
            cred.password.length < 1 ||
            isLoading
          }
        >
          {isLoading ? <Loader /> : "Register"}
        </Button>
      </form>

      <p className="text-xs text-light-clr mt-10">
        By clicking the button above, you agree to our{" "}
        <i className="not-italic text-pry-clr cursor-pointer">
          {" "}
          Terms of Service{" "}
        </i>{" "}
        and{" "}
        <i className="not-italic text-pry-clr cursor-pointer">
          Privacy Policy.{" "}
        </i>
      </p>

      <div className="flex items-end gap-2 mt-16">
        <p>Already have an account?</p>
        <Link to="/auth/login" className="text-pry-clr text-sm">
          Login
        </Link>
      </div>
    </div>
  );
};
