import { useMemo, useState, useEffect, lazy } from 'react';
import PageLoader from './components/pageLoader/PageLoader';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { fetchMenu } from './data/menu/fetchMenu';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { IMenuInfoRes } from './@types/response/response';

 const Router = () => {
  const [menuList, setMenuList] = useState<IMenuInfoRes[]>([]);
  const [routerPaths, setRouterPaths] = useState<RouteObject[]>([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const menuData = await fetchMenu();
      const routeData = castMenuResponseToRouteObject(menuData);
      setRouterPaths(routeData)
      setMenuList(menuData);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  const castMenuResponseToRouteObject = (menus: IMenuInfoRes[]): RouteObject[] => {
    function capitalize(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return menus.map(menu => {
      const splitPaths: string[] = menu.pageInfo.pagePath.split('/');
      let element: any;

      if (splitPaths.length === 1) {
        const lastWord = capitalize(splitPaths[0]);
        element = lazy(() => import(`./pages/${lastWord}.tsx`));
      }
      if (splitPaths.length === 2) {
        const lastWord = capitalize(splitPaths[1]);
        element = lazy(() => import(`./pages/${splitPaths[0]}/${lastWord}.tsx`));
      }
      if (splitPaths.length === 3) {
        const lastWord = capitalize(splitPaths[2]);
        element = lazy(() => import(`./pages/${splitPaths[0]}/${splitPaths[1]}/${lastWord}.tsx`));
      }
      if (splitPaths.length === 4) {
        const lastWord = capitalize(splitPaths[3]);
        element = lazy(() => import(`./pages/${splitPaths[0]}/${splitPaths[1]}/${splitPaths[2]}/${lastWord}.tsx`));
      }

      return {
        path: menu.pageInfo.pagePath,
        element,
      }
    })
  }

  const router = useMemo(() => {
    if (menuList.length === 0) {
      return null;
    }
    const publicPaths: RouteObject[] = [
      {
        path: '/',
        element: <MainLayout menuList={menuList} />,
        children: routerPaths
      }
    ];
    return createBrowserRouter(publicPaths);
  }, [menuList, routerPaths]);

  if (!router) {
    return <PageLoader />;
  }

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default Router;