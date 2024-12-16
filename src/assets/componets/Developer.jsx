import React from "react";
import myPic from "../images/myPic.jpeg";
import "../../styles/Developer.css";
const IT_professionals = [
  {
    id: 1,
    image: myPic,
    name: "Mr. Andrew Sio",
    task: "Software Engineer",
    payment: "200",
  },
  // {
  //     image: myPic,
  //     name: 'Mr. Raphael Garama',
  //     professiona: 'Networking',
  // },
  // {
  //     image: myPic,
  //     name: 'Mr. John Mwasi',
  //     professional: 'BBIT',
  // },
];
export function Developer() {
  return (
    <>
      <div className="developer_list">
        <div className="list_header">
          <h2>Developer language</h2>
          <select name="" id="">
            <option value="Python">Python</option>
            <option value="Javascript">Javascript</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className="list_container">
          {IT_professionals.map((item) => (
            <div className="list">
              <div className="professional_details">
                <img src={item.image} alt="professional.name" className="img" />
                <h2>{item.name}</h2>
              </div>
              <span>{item.task}</span>
              <span>${item.payment}/hr</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
