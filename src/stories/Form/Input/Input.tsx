import React, { ReactNode } from "react";
import { InputWrapper, Icon } from "../Input.style";
import Image from "next/image";

interface InputProps {
  /**
   * used to input SVG icons
   */
  icon: ReactNode;
  /**
   * for input name
   */
  name: string;
  /**
   * for input type
   */
  type: string;
  /**
   * for placeholder input
   */
  placeHolder: string;
  /**
   * if the error is "true" then the border becomes red
   */
  isError: boolean;
  /**
   * if the onInput is "true" then the border becomes blue
   */
  onInput: boolean;
  /**
   * function to get the value
   */
  onChange: (value: string) => void;
  /**
   * If you want to assign a name to an id
   */
  id?: string;
}

const Input: React.FC<InputProps> = ({ icon, name, type, placeHolder, isError, onInput, id, onChange }) => {
  return (
    <InputWrapper $error={isError} $input={onInput}>
      <Icon $error={isError} $input={onInput}>
        {icon}
      </Icon>
      <input name={name} type={type} placeholder={placeHolder} id={id} />
    </InputWrapper>
  );
};

export default Input;
