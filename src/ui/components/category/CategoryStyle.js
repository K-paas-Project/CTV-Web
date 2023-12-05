import styled from "styled-components";

export const BaseCategory = styled.div`
  padding: 8px 14px;
  border-radius: 100px;
  background-color: ${props => '#' + props.color};
`