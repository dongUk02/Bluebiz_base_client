import { Flex } from "antd"
import { AnyObject } from "antd/es/_util/type"
import { FlexProps } from "antd/lib"
import { PanelStyled } from "./FlexPanel.style";
import { IFlexPanel } from "src/@types/layout/FlexPanel";


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
    <PanelStyled $backgroundColor={backgroundColor} $width={width} $height={height} $padding={padding}>
      <Flex {...rest} prefixCls="ant-biz-panel">
        {children}
      </Flex>
    </PanelStyled>
  )
}

export default FlexPanel