import { Flex } from "antd"
import { AnyObject } from "antd/es/_util/type"
import { FlexProps } from "antd/lib"
import styled from 'styled-components';
import type { Properties } from "csstype";

export const PanelStyled = styled.div<IFlexPanel>`
display:flex;
width: ${({ width = '100%' }) => width};
height: ${({ height }) => height};
padding: ${({ padding = '4px 8px' }) => padding};

  .ant-biz-panel{
    width: 100%;
    height: 100%;
    background: ${({ backgroundColor = '#fff' }) => backgroundColor};
    border-radius: 4px;
    padding: 8px;
  }
`;

interface IFlexPanel {
  backgroundColor?: Properties['backgroundColor']
  width?: Properties['width'],
  height?: Properties['height'],
  padding?: Properties['padding'],
};
const FlexPanel = ({
  children,
  backgroundColor,
  width,
  height,
  padding,
  ...rest
}:
  IFlexPanel
  & FlexProps<AnyObject>
  & React.RefAttributes<HTMLElement>
) => {
  return (
    <PanelStyled backgroundColor={backgroundColor} width={width} height={height} padding={padding}>
      <Flex {...rest} prefixCls="ant-biz-panel">
        {children}
      </Flex>
    </PanelStyled>
  )
}

export default FlexPanel