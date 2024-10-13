import { resendOtp, verifyOtp } from "@/api-calls/Auth";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const location = useLocation();
  const { email } = location.state;

  const navigate = useNavigate();

  const otp = localStorage.getItem("otp") as string;
  if (!otp) navigate("/auth/register");

  const [isLoading, setIsLoading] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    verifyOtp(data, setIsLoading, navigate);
  };
  return (
    <div className="bg-white shadow p-[50px] rounded-md border-[1px] border-stroke-clr">
      <h2>Verify your email</h2>
      <p className="text-xs mt-3 leading-[24px]">
        A four digit OTP code has been sent to your email{" "}
        <i className="not-italic text-pry-clr"> {email} </i>
      </p>
      <form onSubmit={handleSubmit}>
        <InputOTP
          maxLength={4}
          name="otp"
          onChange={(e) => setOtpInput(e)}
          value={otp}
        >
          <InputOTPGroup className="gap-5 mt-6">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          type="submit"
          className="pry-btn mt-8"
          disabled={isLoading || otpInput.length < 3}
        >
          {isLoading ? <Loader /> : "Confirm Code"}
        </Button>
      </form>

      <div className="flex items-end gap-2 mt-8">
        <p>Didn't get the email?</p>
        <p
          className={`text-sm cursor-pointer ${
            isLoading ? "pointer-events-none text-text-clr" : "text-pry-clr"
          }`}
          onClick={() => resendOtp(email, setIsLoading)}
        >
          Resend
        </p>
      </div>
    </div>
  );
}
