import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  position: relative;
  display: flex;
  align-items: start;
`

export const LeftContent = styled.div`
  width: 65vw;
  margin: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: 20px 0 20px 16px;
`

export const InfoContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  position: relative;
  margin-left: auto;
  padding: 8px;
`

export const LiveContent = styled.div`
  position: absolute;
  display: flex;
  height: calc(65vw / 16 * 9);
  align-items: end;
  padding: 20px;
`

export const Img = styled.img`
  position: absolute;
  width: 65vw;
  background-color: #f4f5f9;
  height: calc(65vw / 16 * 9);
  border-radius: 16px;
  box-shadow: 2px 2px 8px 0 #bbb;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
`

export const RecommendControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RecommendContainer = styled.div`
  display: flex;
`

