import styled from "styled-components";
import Color from "../../components/theme/color/Color";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-top: 72px;
  background-color: ${'#' + Color.white};
`

export const SideBar = styled.div`
  width: 440px;
  height: 100%;
  position: fixed;
  box-shadow: 2px 2px 8px 0 rgba(1, 1, 1, 0.1);
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 440px;
`


export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 32px;
  align-items: start;
`

export const Img = styled.img`
  border-radius: 16px;
  margin-top: 36px;
  width: 40vw;
`

export const DetailContent = styled.div`
  display: flex;
  align-items: center;
`