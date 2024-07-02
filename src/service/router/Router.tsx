import { Suspense, useMemo, useState, useEffect } from 'react';
import PageLoader from '../../components/pageLoader/PageLoader';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import { fetchMenu } from '../../data/menu/fetchMenu';
import { MenuObject } from '../../utils/common.d';

const Router = () => {
  const [menuList, setMenuList] = useState<MenuObject[]>([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuData = await fetchMenu();
        // const routerTree = buildRouterTree(menuData);
        setMenuList(menuData);
        // setMenuTree(tree);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenuData();
  }, []);

  const router = useMemo(() => {
    if (menuList.length === 0) {
      return null;
    }
    const publicPaths: RouteObject[] = [
      {
        path: '/',
        element: <MainLayout menuList={menuList} />,
        // children: menuTree,
      }
    ];
    return createBrowserRouter(publicPaths);
  }, [menuList]);

  if (!router) {
    return <PageLoader />;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
