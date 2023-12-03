import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 80;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  z-index: 100;
`;

export const ModalView = styled.div`
  display: flex;
  z-index: 200;
  pointer-events: auto;
`
