import { Stack, Box, Navbar, NavLink, ScrollArea, Group } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { isGranted } from '../../lib/abpUtility';
import { appRouters } from '../Router/router.config';
import { useStyles } from './styles';
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import { LinksGroup } from '../LinksGroup';

export interface ISiderMenuProps {
  opened: boolean;
}

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const SiderMenu = ({ opened }: ISiderMenuProps) => {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">APP</Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          {appRouters.map((route: any) => (
            <LinksGroup
              key={route.name}
              icon={route.icon}
              title={route.title}
              initiallyOpened={route.initiallyOpened}
              links={[
                { label: 'Overview', path: '/home' },
                { label: 'Forecasts', path: '/forecasts' },
                { label: 'Outlook', path: '/outlook' },
                { label: 'Real Time', path: '/real-time' },
              ]}
              path={route.path}
            />
          ))}
        </div>
      </Navbar.Section>
    </Navbar>
  );
};

export default SiderMenu;
