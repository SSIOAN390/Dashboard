import React from "react";
import { FaHome } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { BiSolidBookAlt } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { FaHireAHelper } from "react-icons/fa";
import "../../styles/Sidebar.css";

export function Sidebar() {
  return (
    <>
      <div className="menu">
        <div className="logo">
          <BiSolidBookAlt className="logoIcon" />
          <h2>ANDREW SIO</h2>
        </div>
        <div className="menu_Items">
          <a href="" className="item active">
            <FaHome className="icon" />
            Dashboard
          </a>
          <a href="" className="item">
            <FaTasks className="icon" />
            Work_Done
          </a>
          <a href="" className="item">
            <MdReport className="icon" />
            Report
          </a>
          <a href="" className="item">
            <IoStatsChart className="icon" />
            Statistics
          </a>
          <a href="" className="item">
            <MdMessage className="icon" />
            Message
          </a>
          <a href="" className="item">
            <FaHireAHelper className="icon" />
            Help
          </a>
        </div>
      </div>
    </>
  );
}
