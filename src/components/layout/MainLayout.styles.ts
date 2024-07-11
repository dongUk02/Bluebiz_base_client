import styled from 'styled-components';
interface MainLayoutStyledProps {
  $headerHeight: number;
}
export const MainLayoutStyled = styled.div<MainLayoutStyledProps>`
  max-width: 100vw;
  width: 100vw;
  position: relative;

  > .main-layout {
    min-height: 100vh;

    .main-logo {
      height: ${({ $headerHeight }) => $headerHeight}px;
      color: #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #262c3b;
    }

    .ant-layout-footer{
      height: ${({ $headerHeight }) => $headerHeight}px;
      position: relative;
      display: flex;
      justify-content: right;
      align-items: center;
      padding: 0 16px;
      // background-color: #fff;
    }

    .ant-layout-footer::before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        content: '';
        // border-top: 1px solid #bbb;
    }
  }

  .biz-tabs-nav-operations{
    margin-right: 10px;
  }

  .biz-tabs-nav::before {
    border-bottom: 1px solid #bbb;
  }

  .biz-tabs-content-holder{
  }
`;