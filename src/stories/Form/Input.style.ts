import styled from 'styled-components';

const InputWrapper = styled.div<{ $error: boolean; $input: boolean }>`
  padding: 10px 14px;
  display: flex;
  border-radius: 30px;
  align-items: center;
  background-color: white;
  gap: 8px;
  border: 1.5px solid
    ${({ $error, $input }) => ($error ? 'red' : $input ? '#0041E8' : '#c0c0c0')};
  input {
    outline: none;
    border: none;
    width: 100%;
    color: #516371;
    &::placeholder {
      color: #c0c0c0;
    }
  }
`;

const OptionWrapper = styled.div<{ $error: boolean; $input: boolean }>`
  padding: 8px 14px;
  display: flex;
  border-radius: 30px;
  background-color: white;
  gap: 8px;
  align-items: center;
  border: 1.5px solid
    ${({ $error, $input }) => ($error ? 'red' : $input ? '#0041E8' : '#c0c0c0')};
  justify-content: space-between;
`;

const StyledSelectContainer = styled.div`
  position: relative;
  width: 100%;
  color: #516371;
  input {
    color: #516371;
    outline: none;
    width: 100%;
    border: none;
    &::placeholder {
      color: #c0c0c0;
    }
  }
`;

const StyledSelectOptions = styled.ul<{ $showOptions: boolean }>`
  list-style: none;
  padding: 10px 15px;
  margin: 0;
  position: absolute;
  border: 1.5px solid #c0c0c0;
  border-radius: 10px;
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.1);
  top: 200%;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #fff;
  display: ${({ $showOptions }) => ($showOptions ? 'block' : 'none')};

  li {
    cursor: pointer;
    padding: 10px;
    font-weight: 500;
  }

  li:hover {
    border-radius: 4px;
    background-color: #2e63eb1a;
  }
`;

const IconWrapper = styled.div<{ $showOptions: boolean }>`
  margin: 0;
  svg {
    rotate: ${({ $showOptions }) => ($showOptions ? '180deg' : '0')};
  }
`;

const CustomTextarea = styled.div<{ $error: boolean; $input: boolean }>`
  padding: 10px 14px;
  display: flex;
  border-radius: 10px;
  background-color: white;
  gap: 8px;
  border: 1.5px solid
    ${({ $error, $input }) => ($error ? 'red' : $input ? '#0041E8' : '#c0c0c0')};
  textarea {
    outline: none;
    border: none;
    width: 100%;
    height: 297px;
    resize: none;
    &::placeholder {
      color: #c0c0c0;
    }
  }
`;

const Icon = styled.div<{ $error: boolean; $input: boolean }>`
  svg {
    color: ${({ $error, $input }) =>
      $error ? 'red' : $input ? '#0041E8' : '#c0c0c0'};
  }
`;

export {
  CustomTextarea,
  IconWrapper,
  InputWrapper,
  Icon,
  OptionWrapper,
  StyledSelectContainer,
  StyledSelectOptions,
};
