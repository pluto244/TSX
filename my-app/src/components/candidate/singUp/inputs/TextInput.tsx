import React from "react";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, disabled }) => {
  return (
    <div>
      <label>
        {label}:
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      </label>
    </div>
  );
};

export default TextInput;
