import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
export function ContentHeader() {
  return (
    <>
      <div className="content_header">
        <h1 className="header_title">Dashboard</h1>
        <div className="header_activities">
          <div className="searchBox">
            <input type="text" placeholder="Search..." />
            <FaSearch className="icon" />
          </div>
          <div className="notify">
            <IoMdNotifications className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
