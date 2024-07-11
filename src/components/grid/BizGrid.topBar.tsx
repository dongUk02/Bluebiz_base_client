import FlexPanel from "@components/flex/FlexPanel"
import BizSearch from "@components/search/BizSearch"
import { Flex, DatePicker } from "antd"
const { RangePicker } = DatePicker;

export const BizGridSearchBar = () => {
  return (
    <FlexPanel>
      <Flex style={{ height: '28px', width: '100%' }} gap={4}>
        <RangePicker />
        {/* <BizSearch /> */}
      </Flex>
    </FlexPanel>
  )
}
