import React, { ReactNode, useState } from "react";
import { OptionWrapper, StyledSelectContainer, StyledSelectOptions, Icon, IconWrapper } from "../Input.style";
import Image from "next/image";
import ArrowSelect from "../icons/ArrowSelect.svg";

interface InputProps {
  name: string;
  value: string;
}
interface SelectProps {
  /**
   * if the error is "true" then the border becomes red
   */
  data: InputProps[];
  /**
   * Enter the data list in the form of an array of objects with property names and values
   */
  isError: boolean;
  /**
   * for input name
   */
  name: string;
  /**
   * used to input SVG icons
   */
  icon: ReactNode;
  /**
   * for placeholder input
   */
  placeHolder: string;
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

const Select: React.FC<SelectProps> = ({ data, isError, name, placeHolder, onInput, icon, id, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectOption = (value: string) => {
    setSelectedValue(value);
    setShowOptions(false);
  };

  return (
    <OptionWrapper onClick={() => setShowOptions(!showOptions)} $error={isError} $input={onInput}>
      <Icon $error={isError} $input={onInput}>
        {icon}
      </Icon>
      <StyledSelectContainer>
        <input name={name} type="text" readOnly placeholder={placeHolder} value={selectedValue || ""} id={id} />
        <StyledSelectOptions $showOptions={showOptions}>
          {data &&
            data.map((detail, index) => (
              <li key={index} onClick={() => handleSelectOption(detail.value)} data-value={detail.value}>
                {detail.name}
              </li>
            ))}
        </StyledSelectOptions>
      </StyledSelectContainer>
      <IconWrapper $showOptions={showOptions}>
        <Image src={ArrowSelect} alt="arrow-select" width={24} height={24} />
      </IconWrapper>
    </OptionWrapper>
  );
};

export default Select;
