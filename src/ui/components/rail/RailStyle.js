import styled from "styled-components";
import Color from "../theme/color/Color";

export const Container = styled.div`
  width: 240px;
  height: 100%;
  position: fixed;
  background-color: ${'#' + Color.white};
  z-index: 20;
  padding-top: 72px;
`