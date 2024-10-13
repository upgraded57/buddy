import { Input } from "@/components/ui/input";
import icon from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "@/components/Loader";
import { login } from "@/api-calls/Auth";

export default function Login() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
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

    login(data, setIsLoading, navigate);
  };
  return (
    <div className="bg-white shadow p-[50px] rounded-md border-[1px] border-stroke-clr ">
      <h2>Login to your Account</h2>
      <p className="text-xs mt-3">
        Proceed to login to your account and setup your organization
      </p>

      <form className="mt-5" onSubmit={handleSubmit}>
        <label htmlFor="email" className="flex items-center relative mb-5">
          <img
            src={icon.email}
            alt=""
            className="w-4 opacity-20 absolute left-5"
          />
          <Input
            type="email"
            className="pl-12"
            placeholder="Email"
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
            cred.email.length < 1 || cred.password.length < 1 || isLoading
          }
        >
          {isLoading ? <Loader /> : "Login"}
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
        <p>Don't have an account?</p>
        <Link to="/auth/register" className="text-pry-clr text-sm">
          Register
        </Link>
      </div>
    </div>
  );
}
