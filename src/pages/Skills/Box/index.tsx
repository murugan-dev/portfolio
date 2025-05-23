

import React from "react";

import { type TechStackItem } from "../../../utils/constants.ts";

const Box = ({ techName, color, logo }: TechStackItem) => {
  return (
    <div className={`h-50 w-50 rounded-lg shadow-lg flex flex-col items-start gap-10 justify-center text-center p-4`} style={{ backgroundColor: color }}>
        <div className="text-6xl">{typeof logo === "function" ? React.createElement(logo) : <img src={logo} alt={techName} className="h-12 w-12"/>}</div>
        <h2 className="text-2xl font-bold mb-2">{techName}</h2>
    </div>
  )
}

export default Box