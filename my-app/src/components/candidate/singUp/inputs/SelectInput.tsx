import React from "react";

interface SelectInputProps {
  label: string;
  value: string;
  options: { id: number; name: string }[];
  onChange: (value: string) => void;
  disabled: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, value, options, onChange, disabled }) => {
  return (
    <div>
      <label>
        {label}:
        <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}>
          <option value="">Select a role</option>
          {options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectInput;
