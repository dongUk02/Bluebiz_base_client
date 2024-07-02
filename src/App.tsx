import { ConfigProvider, ThemeConfig } from 'antd'
import './App.css'
import { useMemo } from 'react'
import { GlobalStyle } from './assets/styles/global-style'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import * as dayjs from 'dayjs'
import locale from "antd/locale/ko_KR";
import 'dayjs/locale/ko';
import Router from './service/router/Router';
dayjs.locale('ko');
function App() {
  const antdTheme: ThemeConfig = useMemo(() => {
    return {
      token: {
        borderRadius: 3,
        fontSize: 14,
        fontFamilyCode: 'Pretendard',
        tabsCardActiveBg: "#bbb",
      },
      components: {
        Menu: {
          itemHeight: 28,
          darkItemSelectedBg: '#306585',
          itemPaddingInline: 4
        },
        Tabs: {
          cardHeight: 32,
          cardPadding: '4px 12px',
          horizontalMargin: '0px',
          cardBg: '#a6b4c1',
          itemColor: '#fefefe',
          inkBarColor: '#0011f9',
          itemSelectedColor: '#177dc9',
          itemHoverColor:'#0d1c5b',
          cardGutter:0,
        }
      }
    }
  }, [])

  return (
    <ConfigProvider theme={antdTheme} locale={locale}>
      <GlobalStyle />
      <Router />
    </ConfigProvider>
  )
}

export default App
