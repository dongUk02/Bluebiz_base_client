import { Content } from 'antd/es/layout/layout';
import { Suspense, useEffect, useState } from 'react';
import PageLoader from '../../../pageLoader/PageLoader.tsx';

interface TabPaneProps {
  importModule: { default: React.ComponentType<any> };
}

export const TabPane = ({ importModule }: TabPaneProps) => {
  const [PathComponent, setPathComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (importModule) {
      setPathComponent(() => importModule.default);
    }
  }, [importModule]);

  if (!PathComponent) {
    return <PageLoader />;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Content style={{
        height: 'calc(100vh - 37px - 36px)',
        overflowY: 'auto',
      }}>
        <PathComponent />
      </Content>
    </Suspense> 
  );
};