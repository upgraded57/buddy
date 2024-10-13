import React from "react";
import { NavigateFunction } from "react-router-dom";
import { axiosRequest, baseUrl } from "./AxiosConfig";
import toast from "react-hot-toast";
import axios from "axios";

export const login = async (
  data: any,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  setIsLoading(true);
  const toastId = toast.loading("Login in ...", { id: "authToast" });

  await axios
    .post(`${baseUrl}/login`, data)
    .then((res) => {
      toast.success(res.data.message || "Login Successful", {
        id: toastId,
      });
      const token = res.data.data.token;
      sessionStorage.setItem("token", JSON.stringify(token));
      const user = res.data.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    })
    .catch((err) => {
      toast.error(err.response.data.message || "Unable to login", {
        id: toastId,
      });
    })
    .finally(() => setIsLoading(false));
};

export const register = async (
  data: any,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  setIsLoading(true);
  const toastId = toast.loading("Creating account ...");

  await axios
    .post(`${baseUrl}/register`, data)
    .then((res) => {
      toast.success(res.data.message || "Login Successful", {
        id: toastId,
      });
      const token = res.data.data.token;
      const otp = res.data.data.opt;
      sessionStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("otp", JSON.stringify(otp));
      navigate("/auth/confirm-email", { state: { email: data.email } });
    })
    .catch((err) => {
      toast.error(err.response.data.message || "Unable to create account", {
        id: toastId,
      });
    })
    .finally(() => setIsLoading(false));
};

export const resendOtp = async (
  email: String,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  const toastId = toast.loading("Resending otp ...");

  await axiosRequest
    .post("/resend-otp", { email })
    .then((res) => {
      toast.success(res.data.message, { id: toastId });
      const otp = res.data.data.opt;
      localStorage.setItem("otp", JSON.stringify(otp));
    })
    .catch((err) => {
      toast.error(err.response.data.message, { id: toastId });
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const verifyOtp = async (
  data: {},
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  setIsLoading(true);
  const toastId = toast.loading("Resending otp ...", { id: "resendToast" });

  await axiosRequest
    .post("/verify-otp", data)
    .then((res) => {
      toast.success(res.data.message, { id: toastId });
      navigate("/auth/login");
      localStorage.removeItem("otp");
    })

    .catch((err) => {
      toast.error(err.response.data.message, { id: toastId });
    })
    .finally(() => {
      setIsLoading(false);
    });
};
