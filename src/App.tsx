import Router from './components/Router';

import { useLocation } from 'react-router-dom';
import { ReactNode, useLayoutEffect, useState } from 'react';
import React from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

import { Notifications } from '@mantine/notifications';

declare var abp: any;

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  const location = useLocation();
  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
  return <React.Fragment>{children}</React.Fragment>;
};

const App = () => {
  return (
    <Wrapper>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          components: {
            Navbar: {
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors.gray[0],
                },
              }),
            },
            Checkbox: {
              styles: (theme) => ({
                label: {
                  cursor: 'pointer',
                },
                input: {
                  cursor: 'pointer',
                },
              }),
            },
          },
          colors: {
            blue: [
              '#e6f7ff',
              '#bae7ff',
              '#91d5ff',
              '#69c0ff',
              '#40a9ff',
              '#1890ff',
              '#096dd9',
              '#0050b3',
              '#003a8c',
              '#212e3e',
            ],
            green: [
              '#D2D7D4',
              '#BDC6C0',
              '#A8B7AD',
              '#94AB9C',
              '#81A28B',
              '#6D9B7C',
              '#5C946E',
              '#588065',
              '#53705C',
              '#4D6254',
            ],
            charcoal: [
              '#7B7C81',
              '#6F7076',
              '#64666C',
              '#5A5C63',
              '#50535B',
              '#484B54',
              '#40434E',
              '#3B3D45',
              '#36373D',
              '#252527',
            ],
            red: [
              '#BF9897',
              '#B97F7E',
              '#B86563',
              '#BB4846',
              '#B93331',
              '#B7201D',
              '#B80C09',
              '#961A18',
              '#7C2221',
              '#672726',
            ],
          },
          fontFamily: 'Inter, sans-serif',
          primaryColor: 'blue',
        }}
      >
        {/* <GlobalStyles /> */}
        <Notifications />
        <Router />
      </MantineProvider>
    </Wrapper>
  );
};

export default App;
