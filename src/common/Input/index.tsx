// Input.tsx

import React, { ChangeEvent } from "react";

interface InputProps {
  arabicName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ arabicName, type, name, placeholder, value, onChange, style }) => {
  return (
    <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <label style={{ marginBottom: "5px", fontSize: "18px",    color: "white" }}>{arabicName}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ width: "150px", padding: "15px", borderRadius: "5px", ...style }}
      />
    </div>
  );
};

export default Input;
