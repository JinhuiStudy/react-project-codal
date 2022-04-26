import React from "react";
import styled, { css } from "styled-components";
export interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the input be?
   */
  size?: "small";
  /**
   * what do you want to write for placeholder?
   */
  placeholder: string;
}
const Inputs = styled.input<InputProps>`
  all: unset;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  ${(props) =>
    props.primary
      ? css`
          width: 80%;
          height: 30px;
          padding: 8px;
        `
      : css`
          width: 30%;
          height: 15px;
          padding: 8px;
        `}
`;
export const TodoInput = ({ primary = false, placeholder }: InputProps) => {
  return <Inputs placeholder={placeholder} primary={primary} />;
};
