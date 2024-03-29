import React from "react";
import Dashview from "./Dashview";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="row me-0">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Dashview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
