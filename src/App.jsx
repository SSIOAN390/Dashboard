import React from "react";
import { Sidebar } from "./assets/componets/Sidebar";
import { Content } from "./assets/componets/Content";
import { Profile } from "./assets/componets/Profile";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboardContent">
          <Content />
          <Profile />
        </div>
      </div>
    </>
  );
}
