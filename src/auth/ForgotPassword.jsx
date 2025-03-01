import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "antd"; // Keeping Ant Design Checkbox for styling consistency
import toast, { Toaster } from "react-hot-toast";
import logo from "./../../public/image/logo.png";
import { useAdminLoginMutation } from "../redux/features/auth/Login";
import { FaArrowLeft } from "react-icons/fa6";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [adminLogin, { isLoading }] = useAdminLoginMutation();

  // Handle Form Submission
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form refresh
    console.log("Form Data:", { email, password }); // ✅ Console log form data

    try {
      const res = await adminLogin({ email, password }).unwrap();
      console.log(res);
      if (res?.code === 200) {
        console.log(res?.data?.tokens);
        toast.success(res?.message);
        localStorage.setItem("token", res?.data?.attributes?.tokens?.access?.token);
        localStorage.setItem("user", JSON.stringify(res?.data));
        setTimeout(() => navigate("/dashboard/home"), 500);
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      setError(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster reverseOrder={false} />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center h-screen relative">
          <img className="absolute top-0 left-0" src="/All/login-1.png" alt="" />
          <div className="bg-[#d4b2ff] w-[200px] h-[200px] flex items-center justify-center">
            <h3 className="text-5xl ">Logo</h3>
          </div>
          <img className="absolute bottom-0 right-0" src="/All/login-2.png" alt="" />
        </div>
        <div className="bg-[url('/All/login-bg.png')] h-screen w-full flex items-center bg-no-repeat bg-cover bg-center">
          <form className="w-2/3 p-5 bg-[#00000090] rounded-2xl mx-auto" action="">
            <h2 className="mb-5 text-3xl font-semibold text-white text-center flex items-center gap-2 justify-center"> <Link to={'/'} ><FaArrowLeft /> </Link> Forgot Password</h2>
            <p className="mb-5 text-gray-400 text-center">Please enter your email address to reset
              your password.</p>
            <label className="block my-6" htmlFor="">
              <span className="text-white mb-2 block">Email</span>
              <input
                className="block border border-secondary py-3 w-full px-3 rounded-lg bg-white "
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>


            <button className="block border border-[#6d37b5] py-3 w-full px-3 rounded-lg bg-[#6d37b5] text-white font-semibold mt-5" type="submit">Send OTP</button>
          </form>
        </div>
      </div>
    </div >
  );
};

export default ForgotPassword;
