import { Input } from "antd";

const { Search } = Input;

const BizSearch = () => {
  return (
    <Search
      className="biz-search"
      placeholder="검색어를 입력하세요."
      style={{ width: 250 }}
    />
  )
}

export default BizSearch