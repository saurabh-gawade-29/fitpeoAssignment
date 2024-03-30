import React from "react";
import Dashview from "./Dashview";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="row me-0">
        <div className="d-none d-sm-none d-md-block col-12 col-sm-12 col-md-2 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
          <Dashview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
