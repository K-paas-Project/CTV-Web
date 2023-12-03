import styled from "styled-components";
import Color from "../../components/theme/color/Color";

export const Container = styled.div`
  background-color:  ${'#' + Color.white};
  border-radius: 16px;
  padding: 24px;
  width: 40vw;
`

export const TitleContent = styled.div`
  display: flex;
  justify-content: left;
`

export const Img = styled.img`
  border-radius: 16px;
  width: 100%;
  margin-top: 28px;
`

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`