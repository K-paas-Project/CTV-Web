import styled from "styled-components";
import Color from "../theme/color/Color";

export const Container = styled.div`
  width: 100%;
  height: 72px;
  box-shadow: 2px 2px 8px 0 #ddd;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 30;
  background-color: ${'#' + Color.white};
`

export const BurgerContainer = styled.div`
  margin-left: 24px;
`;


export const HomeContainer = styled.div`
  margin-left: 16px;
`

export const LeftContent = styled.div`
  display: flex;
  height: 72px;
  align-items: center;
`

export const RightContent = styled.div`
  display: flex;
  height: 72px;
  align-items: center;
`

export const LoginContainer = styled.div`
  margin-right: 24px;
`