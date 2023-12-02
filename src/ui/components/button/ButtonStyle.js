import styled from "styled-components";
import Color from "../theme/color/Color";

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: ${props => props.color ? '#' + props.color : 'transparent'};
  border: 1px solid ${props => props.strokeColor ? '#' + props.strokeColor : 'transparent'};
  cursor: pointer;
  padding: 13px 20px;
  border-radius: 100px;
  box-shadow: 2px 2px 8px 0 ${props => props.shadowColor ? '#' + props.shadowColor : '#' + Color.transparent};
  
  &:hover {
    scale: 0.95;
    transition: scale 0.3s;
  }
`;