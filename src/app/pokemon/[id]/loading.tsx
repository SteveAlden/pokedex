// export default function Loading() {
//   // You can add any UI inside Loading, including a Skeleton.
//   return <LoadingSkeleton />
// }

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: 999999 }} open>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
}
