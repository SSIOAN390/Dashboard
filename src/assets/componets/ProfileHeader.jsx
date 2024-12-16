import React from "react";
import { FaEdit } from "react-icons/fa";
export function ProfileHeader() {
  return (
    <>
      <div className="profile_header">
        <h2 className="header_title">Profiles</h2>
        <div className="edit">
          <FaEdit className="icon" />
        </div>
      </div>
    </>
  );
}
