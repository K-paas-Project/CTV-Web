import styled from "styled-components";
import Color from "../theme/color/Color";

export const BaseInput = styled.input`
  width: 100%;
  outline: none;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${'#' + Color.gray3};
  height: 44px;
`