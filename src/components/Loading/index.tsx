import { Loader } from '@mantine/core';
import { Suspense } from 'react';

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense
      fallback={
        <div style={{ paddingTop: 100, textAlign: 'center' }}>
          <Loader size="md" />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
