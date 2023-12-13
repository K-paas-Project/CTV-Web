import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 72px;
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
  position: absolute;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  right: 0;
  padding: 8px;
`

export const LiveContent = styled.div`
  position: absolute;
  display: flex;
  height: calc(65vw / 16 * 9);
  align-items: end;
  padding: 20px;
`

export const Live = styled.div`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  position: relative;
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

export const Map = styled.iframe`
  border: none;
  border-radius: 16px;
  width: 100%;
  height: 26rem;
`

export const MapContent = styled.div`
  border-radius: 16px;
  box-shadow: 2px 2px 8px 0 #eee;
  margin-top: 16px;
`
