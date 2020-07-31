// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/orders',
            },
            {
              name: '店铺管理',
              icon: 'table',
              path: '/shop',
              component: './Shop',
            },
            {
              name: '人员管理',
              icon: 'table',
              path: '/person',
              component: './Person',
            },
            {
              name: '个人设置',
              icon: 'smile',
              path: '/accountsettings',
              component: './AccountSettings',
            },
            {
              name: '支付账号管理',
              icon: 'table',
              path: '/account',
              component: './Account',
            },
            {
              name: '广告费用管理',
              icon: 'smile',
              path: '/ad-price',
              component: './AdPrice',
            },
            {
              name: '数据导入',
              icon: 'smile',
              path: '/excel-job',
              component: './ExcelJob',
            },
            {
              name: '订单列表',
              icon: 'smile',
              path: '/orders',
              component: './Order',
            },
            {
              name: '绩效计算任务管理',
              icon: 'smile',
              path: '/sale-volume-job',
              component: './SaleVolumeJob',
            },
            {
              name: '绩效核算列表',
              icon: 'smile',
              path: '/sale-volume',
              component: './SaleVolume',
            },
            {
              name: '基础详情页',
              icon: 'smile',
              path: '/test',
              component: './Test',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
