import { useMemo, useState, useEffect, lazy } from 'react';
import PageLoader from './components/pageLoader/PageLoader';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { fetchMenu } from './data/menu/fetchMenu';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { IMenuInfoRes } from './@types/response/response';

const Router = () => {
  const [menuList, setMenuList] = useState<IMenuInfoRes[]>([]);
  const [routerPaths, _setRouterPaths] = useState<RouteObject[]>([]);

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

  const fetchMenuData = async () => {
    try {
      const menuData = await fetchMenu();
      setMenuList(menuData);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  
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