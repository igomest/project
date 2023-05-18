import {
  IconActivity,
  IconDashboard,
  IconInfoCircle,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { lazy } from 'react';
import Loadable from '../Loading';

const Exception = Loadable(lazy(() => import('../../scenes/Exception')));
const Home = Loadable(lazy(() => import('../../scenes/Home')));

export const userRouter: any = [
  // {
  //   path: '/user',
  //   name: 'user',
  //   title: 'User',
  //   component: <Login />,
  //   isLayout: true,
  //   showInMenu: false,
  // },
  // {
  //   path: '/user/login',
  //   name: 'login',
  //   title: 'LogIn',
  //   component: <Login />,
  //   showInMenu: false,
  // },
];

export const appRouters: any = [
  // {
  //   exact: true,
  //   name: 'pré-vendas',
  //   permission: '',
  //   title: 'Pré-vendas',
  //   showInMenu: true,
  //   icon: IconDashboard,
  //   initiallyOpened: true,
  //   links: [
  //     { label: 'Overview', path: '/overview', component: <Home /> },
  //     { label: 'Forecasts', path: '/home/forecasts', component: <div>Forecasts</div> },
  //     { label: 'Outlook', path: '/home/outlook', component: <div>Outlook</div> },
  //     { label: 'Real time', path: '/home/real-time', component: <div>Real time</div> },
  //   ],
  // },
  {
    path: '/home',
    exact: true,
    name: 'overview',
    permission: '',
    title: 'Home',
    showInMenu: true,
    icon: IconDashboard,
    component: <Home />,
  },
  // {
  //   path: '/exception?:type',
  //   permission: '',
  //   title: 'exception',
  //   name: 'exception',
  //   showInMenu: false,
  //   component: <Exception />,
  // },
];

export const routers = [...userRouter, ...appRouters];
