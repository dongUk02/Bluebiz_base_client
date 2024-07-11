import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { LicenseManager } from "ag-grid-enterprise";
import { AG_GRID_LISENSE } from '@utils/constants.ts'
import "ag-grid-enterprise";
LicenseManager.setLicenseKey(AG_GRID_LISENSE);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
