import { Content } from 'antd/es/layout/layout'
import { Suspense, lazy } from 'react';
import PageLoader from '../../../pageLoader/PageLoader.tsx';

export const TabContent = ({ pagePath }: { pagePath: string }) => {
  const getPathComponent = (pagePath: string): React.LazyExoticComponent<React.ComponentType<any>> => {
    const defaultPath = '../../../../pages';

    const splitPaths: string[] = pagePath.split('/');
    let element = lazy(() => import('../../../pageLoader/PageLoader.tsx'));

    if (splitPaths.length === 0) {
      element = lazy(() => import(`${defaultPath}/Page.tsx`));
    }
    if (splitPaths.length === 1) {
      element = lazy(() => import(`${defaultPath}/${splitPaths[0]}/Page.tsx`));
    }
    if (splitPaths.length === 2) {
      element = lazy(() => import(`${defaultPath}/${splitPaths[0]}/${splitPaths[1]}/Page.tsx`));
    }
    if (splitPaths.length === 3) {
      element = lazy(() => import(`${defaultPath}/${splitPaths[0]}/${splitPaths[1]}/${splitPaths[2]}/Page.tsx`));
    }

    return element
  }

  const PathComponent = getPathComponent(pagePath);
  return (
    <Suspense fallback={<PageLoader />}>
      <Content style={{ height: '90vh' }}>
        <PathComponent />
      </Content>
    </Suspense>
  )
}
