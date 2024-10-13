import { Button } from "@/components/ui/button";
import image from "@/lib/images";
import { Link } from "react-router-dom";

export default function EmailVerified() {
  return (
    <div className="bg-white text-center shadow p-[50px] rounded-md border-[1px] border-stroke-clr">
      <img src={image.email_verified} alt="" className="mx-auto mb-9" />
      <h2>Email Verified !</h2>
      <p className="text-xs mt-3 leading-[24px] max-w-[300px] mx-auto">
        The verified email address will be associated with your account. Click
        on the button below to continue
      </p>

      <Link to="/auth/login">
        <Button type="button" className="pry-btn mt-8 px-10">
          Continue
        </Button>
      </Link>
    </div>
  );
}
