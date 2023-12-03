import styled from "styled-components";
import Color from "../theme/color/Color";

export const BaseInputArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${'#' + Color.gray3};
  resize: none;
  height: ${props => props.height ? props.height + 'px' : '44px'};
`