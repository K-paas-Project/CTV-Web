import styled from "styled-components";
import Color from "../../components/theme/color/Color";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100dvh;
  background-color: ${'#' + Color.white};
`

export const SideBar = styled.div`
  width: 440px;
  height: 100%;
  position: absolute;
  box-shadow: 2px 2px 8px 0 rgba(1, 1, 1, 0.1);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
