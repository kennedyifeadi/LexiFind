import PropTypes from 'prop-types';
import { useState } from 'react';
export const TranslateDashboard = ({text, icon, title, color }) => {
  const [colorr, setColor] = useState("");
  if (color === "blue"){
    setColor("bg-blue-100")
  }
  if (color === "white"){
    setColor("bg-white")
  }
  if (color === "green"){
    setColor("bg-green-100")
  }
  return (
    <div className="flex w-[28%] flex-col justify-between p-2 shadow-md bg-white rounded-md h-[200px]">
      <div className={`bg-[${colorr}]`}>{icon}</div>
      <div className="flex flex-col">
        <span>{title}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}

TranslateDashboard.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  color: PropTypes.string
}