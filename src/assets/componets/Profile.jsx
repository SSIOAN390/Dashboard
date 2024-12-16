import React from "react";
import { ProfileHeader } from "./ProfileHeader";
import "../../styles/Profile.css";
import UserImage from "../images/myPic.jpeg";
import { FaPython } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
const course = [
  {
    id: 1,
    title: "Python",
    duration: "8 months",
    icon: <FaPython />,
  },
  {
    id: 2,
    title: "Javascript",
    duration: "5 months",
    icon: <DiJavascript />,
  },
  {
    id: 3,
    title: "React.js",
    duration: "2 months",
    icon: <FaReact />,
  },
];
export function Profile() {
  return (
    <>
      <div className="profile">
        <ProfileHeader />
        <div className="user_profile">
          <div className="user_details">
            <img src={UserImage} alt="" className="avatar" />
            <h3 className="username">Ngelelo</h3>
            <span className="profession">Developer</span>
          </div>
          <div className="user_courses">
            {course.map((course) => (
              <div className="course">
                <div className="course_details">
                  <div className="course_cover">{course.icon}</div>
                </div>
                <div className="course_name">
                  <h2 className="title">{course.title}</h2>
                  <span className="duration">{course.duration}</span>
                </div>
                <div className="action"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
