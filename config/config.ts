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
              redirect: '/setting/person',
            },
            {
              name: '支付账号管理',
              icon: 'CreditCardOutlined',
              path: '/account',
              component: './Account',
            },
            {
              name: '广告费用管理',
              icon: 'DollarOutlined',
              path: '/ad-price',
              component: './AdPrice',
            },
            {
              name: '订单列表',
              icon: 'BarcodeOutlined',
              path: '/orders',
              component: './Order',
            },
            {
              name: '绩效计算任务管理',
              icon: 'InteractionOutlined',
              path: '/sale-volume-job',
              component: './SaleVolumeJob',
            },
            {
              name: '绩效核算列表',
              icon: 'InsertRowRightOutlined',
              path: '/sale-volume',
              component: './SaleVolume',
            },
            {
              path: '/setting',
              name: '设置',
              icon: 'SettingOutlined',
              routes: [
                {
                  name: '店铺管理',
                  icon: 'BankOutlined',
                  path: '/setting/shop',
                  component: './Shop',
                },
                {
                  name: '人员管理',
                  icon: 'TeamOutlined',
                  path: '/setting/person',
                  component: './Person',
                },
                {
                  name: '数据导入',
                  icon: 'FileAddOutlined',
                  path: '/setting/excel-job',
                  component: './ExcelJob',
                },
              ]
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
