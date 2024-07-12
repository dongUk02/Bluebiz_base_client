import FlexPanel from "@components/flex/FlexPanel"
import { Flex, DatePicker } from "antd"
const { RangePicker } = DatePicker;

export const BizGridSearchBar = () => {
  return (
    <FlexPanel padding={'8px 8px 4px'}>
      <Flex style={{ height: '28px', width: '100%' }} gap={4}>
        <RangePicker />
        {/* <BizSearch /> */}
      </Flex>
    </FlexPanel>
  )
}
