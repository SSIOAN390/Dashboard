import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { Si365Datascience } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaStaylinked } from "react-icons/fa";
const Courses = [
  {
    id: 1,
    title: "web Development",
    duration: "1 year",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    title: "Data Science",
    duration: "1 year",
    icon: <Si365Datascience />,
  },
  {
    id: 3,
    title: "App Development",
    duration: "1 month",
    icon: <FaAppStoreIos />,
  },
  {
    id: 4,
    title: "Api Development",
    duration: "1 month",
    icon: <FaStaylinked />,
  },
];

export function Card() {
  return (
    <>
      <div className="card_container">
        {Courses.map((item) => (
          <div className="card">
            <div className="card_cover">{item.icon}</div>
            <div className="card_title">
              <h2>{item.title}</h2>
            </div>
            <div className="card_duration">{item.duration}</div>
          </div>
        ))}
      </div>
    </>
  );
}
