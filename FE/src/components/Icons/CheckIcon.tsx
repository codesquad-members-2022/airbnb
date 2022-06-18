import React from 'react';
import DefaultIconProps from 'components/Icons/DefaultIconProps';

function CheckIcon({ size = { width: '24', height: '24' }, color }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="30" height="30" rx="7" fill={color} />
      <path
        d="M21.3332 12L13.9998 19.3333L10.6665 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="1" y="1" width="30" height="30" rx="7" stroke="#4F4F4F" strokeWidth="2" />
    </svg>
  );
}

export default CheckIcon;
