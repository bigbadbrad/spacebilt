// /src/components/icon.tsx:
import { styled } from '@mui/material/styles';

interface IconProps {
  fill?: string; // Optional prop for fill color
  height?: number | string;
}

export const IconWide: React.FC<IconProps> = ({ fill = '#ffffff', height = 'auto' }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 18"
      width="100%"
      height={height}
      preserveAspectRatio="xMidYMid meet"
    >
      <g fillRule="nonzero">		
      <path fill={fill} d="M21.5,12.4c0,2.7-1.5,4.7-6.5,4.7H0.9V7.3h14.2c0.7,0,1.4-0.3,1.4-1.1c0-0.8-0.7-1-1.4-1H0.9L4.2,1h10.6
	c3.8,0,6.3,1.5,6.3,4.4c0,1.9-1.1,3-2.2,3.4C20.4,9.2,21.5,10.5,21.5,12.4z M5.9,10.7v2.2H15c1.1,0,1.5-0.4,1.5-1.1
	c0-0.7-0.5-1.1-1.5-1.1H5.9z"/>
      </g>
    </svg>
  );
};
