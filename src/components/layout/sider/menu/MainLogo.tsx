import { OpenAIOutlined } from "@ant-design/icons";
import { APP_NAME } from "../../../../utils/constants"

type MainLogonProps = {
  collapsed: boolean;
}

const MainLogo = ({ collapsed }: MainLogonProps) => {
  return collapsed
    ? <OpenAIOutlined className="main-logo" style={{ fontSize: 20 }} />
    : <div className="main-logo" children={APP_NAME} />
}

export default MainLogo