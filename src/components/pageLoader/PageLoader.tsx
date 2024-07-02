import { Layout, Skeleton, Spin } from 'antd'

const { Content } = Layout;
const PageLoader = () => {
  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Content>
        <Spin tip="페이지 불러오는중 ..." >
          <Skeleton active paragraph={{ rows: 15 }} style={{ height: '100vh' }} />
        </Spin>
      </Content>
    </Layout>
  )
}
export default PageLoader;
