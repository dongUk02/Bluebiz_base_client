// import { MenuObject } from './common.d';

// export const buildRouterTree = (items: MenuObject[], parentCode: string = "0000"): MenuObject[] => {
//   return items
//     .filter((item) => item.pageCd === parentCode)
//     .map((item) => {
//       const children = buildMenuTree(items, item.pageJaCd);
//       return {
//         ...item,
//         children: children.length ? children : undefined,
//       };
//     });
// };


