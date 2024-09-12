"use client"

import { useState } from "react";

interface RadioButtonProps {
  options: string[];
  name: string;
  color: string[];
  selected: string;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, name, color, selected, onChange }) => {


  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="text-lg font-semibold">{name}</div>
      <div className="flex gap-2 flex-wrap ">
        {options.map((option, index) => (
          <label key={index} htmlFor={option} className="flex gap-2 justify-center items-center border rounded-lg border-black  px-2 py-1 text-sm font-medium">
            <input
              type="radio"
              id={option}
              name={name} 
              value={option}
              checked={selected === option}
              onChange={() => onChange(option)}
              className="appearance-none h-[8px] w-[8px] rounded-full outline outline-offset-2 outline-1"
              style={{
                backgroundColor: selected  === option ? color[index] : "",
                outlineColor: color[index],
              }}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
