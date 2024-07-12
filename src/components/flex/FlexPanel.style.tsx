import { IStyledFlexPanel } from "src/@types/layout/FlexPanel";
import styled from "styled-components";

export const PanelStyled = styled.div<IStyledFlexPanel>`
display:flex;
width: ${({ $width = '100%' }) => $width};
height: ${({ $height }) => $height};
padding: ${({ $padding = '8px 8px 4px' }) => $padding};
  .ant-biz-panel{
    width: 100%;
    height: 100%;
    background: ${({ $backgroundColor = '#fff' }) => $backgroundColor};
    border-radius: 4px;
    padding: 8px;
  }
`;
