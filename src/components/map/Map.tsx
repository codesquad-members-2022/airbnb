import React, { Suspense, lazy } from 'react';
import SkeletonMap from './SkeletonMap';

const Map = () => {
  const LazyMap = lazy(() => import('./LazyMap'));
  return (
    <Suspense fallback={<SkeletonMap />}>
      <LazyMap />
    </Suspense>
  );
};

export default Map;
