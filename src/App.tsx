import { AppProps, ConfigProvider, ThemeConfig } from 'antd'
import './App.css'
import { GlobalStyle } from './assets/styles/global-style'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import * as dayjs from 'dayjs'
import locale from "antd/locale/ko_KR";
import 'dayjs/locale/ko';
import Router from './Router';
import { App as AntdApp } from 'antd';

dayjs.locale('ko');

function App() {
  const antdTheme: ThemeConfig = {
    token: {
      borderRadius: 3,
      fontSize: 14,
      fontFamilyCode: 'Pretendard',
      motionDurationMid: '0.2s',
      motionDurationSlow: '0.2s',
      controlHeightLG: 32,
      controlHeight: 28,
      controlHeightSM: 24,
      colorBgLayout: '#eee'
    },
    components: {
      Menu: {
        itemHeight: 28,
        darkItemSelectedBg: '#306585',
        darkSubMenuItemBg: '#04294b',
        itemPaddingInline: 4
      },
      Layout: {
        footerPadding: 0,
      },
      Tabs: {
        cardPadding: '4px 8px',
        cardGutter: 1,
        horizontalMargin: '1px 0 0 0',
        cardBg: '#6d768f',
        itemColor: '#fdfdfd',
        inkBarColor: '#0011f9',
        itemSelectedColor: '#124c97',
        itemHoverColor: '#bed4e5',
        colorBgContainer: '#eee',
        colorBorderSecondary: '#bbb',
        motionDurationMid: '0.1s',
        motionDurationSlow: '0.3s',
      },
      Button: {
        paddingInlineLG: 8,
        paddingInline: 6,
        paddingInlineSM: 4,
        controlHeightLG: 28,
        controlHeight: 24,
        controlHeightSM: 20,
      },
    }
  }
  const AntdAppConfig: AppProps = {
    message: {
      maxCount: 1
    },
    notification: {
      placement: 'bottomRight'
    }
  }

  return (
    <ConfigProvider theme={antdTheme} locale={locale}>
      <GlobalStyle />
      <AntdApp {...AntdAppConfig}>
      </AntdApp>
      <Router />
    </ConfigProvider>
  )
}

export default App
