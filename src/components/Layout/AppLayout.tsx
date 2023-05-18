import * as React from 'react';

import { useLocation, Navigate, Outlet } from 'react-router-dom';

import utils from '../../utils/utils';

import { useState } from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import SideMenu from '../SiderMenu/index';
import {
  AppShell,
  Header,
  Card,
  MediaQuery,
  Burger,
  useMantineTheme,
  useMantineColorScheme,
  ActionIcon,
  Group,
} from '@mantine/core';
declare var abp: any;

const AppLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    document.title = utils.getPageTitle(location.pathname);
  });

  const layout = (
    <AppShell
      styles={{
        main: {
          background: theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<SideMenu opened={opened} />}
      header={
        <Header height={60}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Group position="apart" h="100%" px="md"></Group>
          </MediaQuery>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Group position="right" h="100%" px="md"></Group>
          </MediaQuery>
        </Header>
      }
    >
      <Card shadow={'sm'} h="100%">
        <Outlet />
      </Card>
    </AppShell>
  );

  return <React.Fragment>{layout}</React.Fragment>;
};

export default AppLayout;
