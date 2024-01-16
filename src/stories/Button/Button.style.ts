import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  &.button {
    font-family: 'Inter', sans-serif;
    backface-visibility: hidden;
    border: 0;
    border-radius: 30px;
    box-sizing: border-box;
    color: #fff;
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    display: inline-block;
    font-size: 16px;
    letter-spacing: -0.16px;
    padding: ${(props) => props.padding};
    position: relative;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    transform: translateZ(0) scale(1);
    transition: transform 0.2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
      ${({ disabled }) => !disabled && 'transform: scale(1.05);'}
    }

    &:hover:active {
      ${({ disabled }) =>
        !disabled && 'transform: scale(1.05) translateY(2px);'}
    }

    &:focus {
      outline: 0 solid transparent;
    }

    &:focus:before {
      border-width: 2px;
      content: '';
      left: calc(-1 * 6px);
      pointer-events: none;
      position: absolute;
      top: calc(-1 * 6px);
      transition: border-radius;
      user-select: none;
    }

    &:focus:not(:focus-visible) {
      outline: 0 solid transparent;
    }

    &:active {
      ${({ disabled }) => !disabled && 'transform: translateY(.125rem);'}
    }
  }

  &.button--primary {
    color: #ffffff;
    background: #0041e8;
    box-shadow: 0px 25px 30px 0px #0041e81a;
  }

  &.button--secondary {
    background: #ff000000;
    color: #ffffff;
    background-color: transparent;
    box-shadow: #ffffff 0px 0px 0px 1px inset;
  }
`;
