import styled from 'styled-components';

export const StyledButton = styled.button`

  &.button{
    font-family: 'Inter', sans-serif;
    backface-visibility: hidden;
    border: 0;
    border-radius: 30px;
    box-sizing: border-box;
    color: #fff;
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    display: inline-block;
    font-size: 16px;
    letter-spacing: -0.01em;
    padding: 16px 32px 16px 32px;
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
        !disabled && 'transform: scale(1.05) translateY(.125rem);'}
    }

    &:focus {
      outline: 0 solid transparent;
    }

    &:focus:before {
      border-width: 0.125rem;
      content: '';
      left: calc(-1 * 0.375rem);
      pointer-events: none;
      position: absolute;
      top: calc(-1 * 0.375rem);
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
    color: #FFFFFF;
    background: #0041e8;
  }

  &.button--secondary {
    background: #ff000000;
    color: #FFFFFF;
    background-color: transparent;
    box-shadow: #FFFFFF 0px 0px 0px 1px inset;
  }
`;
