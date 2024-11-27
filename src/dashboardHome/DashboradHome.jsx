import React from "react";
import Card from "./Card";
import Barchart from "./Barchart";
import RecentUser from "./RecentUser";
import Patient from "../../public/Dashboard/Patient.png";

const DashboardHome = () => {
  return (
    <div className="sm:px-5">
      {/* <Card> </Card> */}
      {/* <Barchart /> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-5">
        {/* Total User Card */}
        <div className="mt-5 bg-[#ece6ee] sm:p-4 p-4 rounded-xl flex sm:flex-col md:flex-row items-center gap-8">
          <img src={Patient} alt="Total Users" className="w-16 sm:w-20 md:w-24" />
          <div className="sm:text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1a1a1a]">
              Total User
            </h2>
            <h2 className="text-3xl font-medium text-[#430750]">780</h2>
          </div>
        </div>
        
        {/* Recent User Card */}
        <div className="mt-5 bg-[#ece6ee] sm:p-4 p-4 rounded-xl flex sm:flex-col md:flex-row items-center gap-8">
          <img src={Patient} alt="Recent Users" className="w-16 sm:w-20 md:w-24" />
          <div className="sm:text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1a1a1a]">
              Recent User
            </h2>
            <h2 className="text-3xl font-medium text-[#430750]">240</h2>
          </div>
        </div>
      </div>

      {/* Recent Users List */}
      <RecentUser state={"Recent Users"} />
      <RecentUser state={"Total Users"} />
    </div>
  );
};

export default DashboardHome;
