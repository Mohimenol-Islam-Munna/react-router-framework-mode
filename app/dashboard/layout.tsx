import React from "react";
import { Outlet } from "react-router";

export const loader = () => {
  console.log("Loader Data 1:");

  return { data: "Dashboard Layout Data" };
};

const DashboardLayout = ({ loaderData }: { loaderData: any }) => {
  console.log("Loader Data 2:", loaderData);

  return (
    <div>
      <div>dashboard layout header</div>
      <Outlet />
      <div>dashboard layout footer</div>
    </div>
  );
};

export default DashboardLayout;
