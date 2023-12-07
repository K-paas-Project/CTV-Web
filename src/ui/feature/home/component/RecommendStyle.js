import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30vw;
  margin-bottom: 16px;
  position: relative;
  &:hover {
    background-color: #f4f5f9;
  }
  border-radius: 16px;
  transition: background-color 0.3s;
  cursor: pointer;
`

export const Video = styled.img`
  border-radius: 16px;
  width: 60%;
  height: calc(30vw * 6 / 10 / 16 * 9);
  box-shadow: 2px 2px 8px 0 #bbb;
  background-color: #f4f5f9;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 4px;
`

export const CategoryContent = styled.div`
  position: absolute;
  right: 40%;
  padding: 8px;
`