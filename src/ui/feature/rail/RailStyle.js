import styled from "styled-components";
import Color from "../../components/theme/color/Color";

export const Container = styled.div`
  width: 240px;
  height: 100%;
  position: fixed;
  background-color: ${'#' + Color.white};
  z-index: 20;
  padding-top: 72px;
  box-shadow: 2px 2px 8px 0 rgba(1, 1, 1, 0.1);
  transition: left 0.6s;
`
