import styled from "styled-components";
import Color from "../theme/color/Color";

export const BaseText = styled.div`
  font-size: ${props => props.size ? props.size + 'px' : '16px'};
  color: ${props => props.color ? '#' + props.color : '#' + Color.black};
  font-weight: ${props => props.weight ? props.weight : 500};
`