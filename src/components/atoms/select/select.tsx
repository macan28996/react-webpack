/* =============== refactor lint rules =============== */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* =============== refactor lint rules =============== */
import React from "react";
import ReactSelect, { Props as ReactSelectProps } from "react-select";

export interface IOption {
  value: any;
  label: string;
}

export interface ISelectProps
  extends Omit<ReactSelectProps, "value" | "onChange" | "defaultValue"> {
  value?: any;
  options?: IOption[];
  onChange?: (value?: any) => void;
}

export const Select: React.FC<ISelectProps> = ({
  onChange = () => {},
  value,
  options,
  ...props
}): JSX.Element => {
  const handleChange = (newValue?: any) => {
    onChange(newValue?.value);
  };

  const currentValue = options?.find((item) => String(item.value) === String(value));

  return (
    <ReactSelect
      className="basic-single"
      classNamePrefix="select"
      options={options}
      value={currentValue}
      onChange={handleChange}
      {...props}
      id={`react-select-${props.id}-listbox`}
      instanceId={props.id ?? "id-select"}
    />
  );
};
