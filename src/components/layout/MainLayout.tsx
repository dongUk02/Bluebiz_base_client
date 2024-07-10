import { Layout, theme } from "antd"
import { MainLayoutStyled } from "./MainLayout.styles"
import { useState } from "react";;
import { MenuResponse } from "../../@types/response/response";
import MainMenu from "./sider/menu/MainMenu";
import MainLogo from "./sider/menu/MainLogo";
import MainTabs from "./tabs/MainTabs";

const { Header, Sider } = Layout

interface IMainLayout {
  menuList: MenuResponse[]
}

const MainLayout = ({ menuList }: IMainLayout) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const headerHeight = 36;

  return (
    <MainLayoutStyled headerHeight={headerHeight}>
      <Layout className="main-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <MainLogo collapsed={collapsed} />
          <MainMenu menuList={menuList} />
        </Sider>
        <Layout>
          <Header style={{ background: colorBgContainer, height: headerHeight, padding: 0, position: 'relative' }}>
            <MainTabs headerHeight={headerHeight} collapsed={collapsed} setCollapsed={setCollapsed} />
          </Header>
        </Layout>
      </Layout>
    </MainLayoutStyled>
  )
}

export default MainLayout