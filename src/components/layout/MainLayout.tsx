import { Button, Layout, Tabs, theme } from "antd"
import { MainLayoutStyled } from "./MainLayout.styles"
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { BlueBizGrid } from "../grid/BlueBizGrid";
import { MenuObject } from "../../utils/common.d";
import MainMenu from "./sider/menu/MainMenu";

const { Header, Content, Sider } = Layout

const MainLayout = ({
  menuList
}: {
  menuList: MenuObject[]
}) => {
  const [collapsed, setCollapsed] = useState(false);
  // const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const headerHeight = 36;
  
  return (
    <MainLayoutStyled headerHeight={headerHeight}>
      <Layout className="main-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <MainMenu menuList={menuList} />
        </Sider>
        <Layout>
          {/* <Modal open={true} width={'50%'} bodyStyle={{height:500}}/> */}
          <Header style={{ background: colorBgContainer, height: headerHeight, padding: 0, position: 'relative' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: headerHeight,
                height: headerHeight,
                position: 'absolute',
                left: 0,
                zIndex: 100
              }}
            />
            <Tabs
              defaultActiveKey="1"
              hideAdd
              type="editable-card"
              tabPosition={'top'}
              tabBarStyle={{ padding: `0 ${headerHeight}px`, height: headerHeight - 3, marginTop: 3 }}
              items={new Array(18).fill(null).map((_, i) => {
                const id = String(i);
                return {
                  label: i === 0 ? `거래처정보` : i === 1 ? `제품정보` : `...${i} 번째 탭`,
                  key: id,
                  disabled: i === 28,
                  children: (
                    <Content style={{ height: '90vh' }}>
                      {/* <Outlet /> */}
                      <BlueBizGrid
                        columnDefs={[
                          { headerName: '거래처 코드', field: 'a' },
                          { headerName: '거래처 명', field: 'b' },
                          { headerName: '매입/매출 구분', field: 'c' },
                          { headerName: '담당자', field: 'd' },
                          { headerName: '담당자 번호', field: 'c' },
                        ]}
                        dummy={"balham"}
                        rowData={[
                          { a: 'COMP-20240626-001', b: '우남기공', c: '매출', d: '홍길동', e: '010-2240-1242', },
                          { a: 'COMP-20240626-002', b: '해원', c: '매출', d: '고길동', e: '010-1231-1242', },
                          { a: 'COMP-20240626-003', b: '늘푸른', c: '매출', d: '김영희', e: '010-1634-1242', },
                          { a: 'COMP-20240626-004', b: '베오베', c: '매출', d: '김철수', e: '010-7645-1242', },
                          { a: 'COMP-20240626-005', b: '한울팜스', c: '매출', d: '바둑이', e: '010-2154-1242', },
                        ]}
                      />
                    </Content>
                  )
                };
              })}
            />
          </Header>

        </Layout>
      </Layout>

    </MainLayoutStyled>
  )
}

export default MainLayout