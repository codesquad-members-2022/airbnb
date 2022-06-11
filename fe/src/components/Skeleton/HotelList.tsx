import { Fragment } from 'react';
import { Divider } from '@mui/material';

import SkeletonHotel from 'components/Skeleton/Hotel';

import { keyMaker } from 'utils/util';

function SkeletonHotelList() {
  const DEFAULT_RENDERS = 5;
  const List = [...Array(DEFAULT_RENDERS)].map((el) => {
    return (
      <Fragment key={keyMaker()}>
        <SkeletonHotel />
        <Divider sx={{ width: '100%', margin: '24px 0' }} />
      </Fragment>
    );
  });

  return <div>{List}</div>;
}

export default SkeletonHotelList;
