import styled from "styled-components";
import Color from "../../../components/theme/color/Color";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${'#' + Color.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    background-color: #f4f5f9;
  }
`
export const DetailContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DownContent = styled.div`
  display: flex;
  flex-direction: column;
`