import { resendOtp } from "@/api-calls/Auth";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import image from "@/lib/images";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ConfirmEmail() {
  const location = useLocation();
  const { email } = location.state;

  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="bg-white text-center shadow p-[50px] rounded-md border-[1px] border-stroke-clr">
      <img src={image.email_sent} alt="" className="mx-auto" />
      <h2>Check your mailbox !</h2>
      <p className="text-xs mt-3 leading-[24px] max-w-[300px] mx-auto">
        We've sent an email to {email} with an OTP to confirm your account.
        Check your inbox to activate your account.
      </p>
      <Link to="/auth/verify-email" state={{ email }}>
        <Button type="button" className="pry-btn mt-5" disabled={isLoading}>
          {isLoading ? <Loader /> : "Confirm Email"}
        </Button>
      </Link>

      <div className="flex items-end gap-2 mt-16 justify-center">
        <p>Didn't get the email?</p>
        <p
          className={`${
            isLoading
              ? "cursor-not-allowed pointer-events-none"
              : "text-pry-clr cursor-pointer"
          } text-sm`}
          onClick={() => resendOtp(email, setIsLoading)}
        >
          Resend
        </p>
      </div>
    </div>
  );
}
