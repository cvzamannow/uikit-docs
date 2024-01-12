import React, { ReactNode } from "react";
import Image from "next/image";
import { CustomTextarea, Icon } from "../Input.style";

interface TextareaProps {
  /**
   * used to input SVG icons
   */
  icon: ReactNode;
  /**
   * for input name
   */
  name: string;
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

export const Textarea: React.FC<TextareaProps> = ({ icon, name, placeHolder, isError, onInput, onChange, id }) => {
  return (
    <CustomTextarea $error={isError} $input={onInput}>
      <Icon $error={isError} $input={onInput}>
        {icon}
      </Icon>
      <textarea name={name} placeholder={placeHolder} id={id}></textarea>
    </CustomTextarea>
  );
};
