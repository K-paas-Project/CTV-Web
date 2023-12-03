import styled from "styled-components";
import Color from "../../theme/color/Color";

export const Container = styled.div`
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${'#' + Color.white};
  &:hover {
    background-color: #f4f5f9;
  }
  transition: background-color 0.25s;
`

export const Content = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  
`