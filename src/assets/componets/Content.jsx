import React from "react";
import { ContentHeader } from "./ContentHeader";
import "../../styles/Content.css";
import { Card } from "./Card";
import { Developer } from "./Developer";
export function Content() {
  return (
    <>
      <div className="content">
        <ContentHeader />
        <Card />
        <Developer />
      </div>
    </>
  );
}
