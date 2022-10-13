import React from "react";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Main = () => {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="article col-9">
          Main
        </div>
        <div className="col-3">
          <Sidebar/>
        </div>
      </div>
      
    </div>
    )
};

export default Main;
