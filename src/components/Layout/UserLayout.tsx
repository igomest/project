import { Box, Stack } from '@mantine/core';
import * as React from 'react';

import { Outlet } from 'react-router-dom';

// import { userRouter } from '../Router/router.config';
import utils from '../../utils/utils';

const UserLayout = () => {
  React.useEffect(() => {
    document.title = utils.getPageTitle(location.pathname);
  });

  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <Stack align="center" justify="center" w="100%" h="100%">
        <Outlet />
      </Stack>
    </Box>
  );
};

export default UserLayout;
