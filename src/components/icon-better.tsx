// /src/components/icon.tsx:
import { styled } from '@mui/material/styles';

interface IconProps {
  fill?: string; // Optional prop for fill color
  height?: number | string;
}

export const IconBetter: React.FC<IconProps> = ({ fill = '#ffffff', height = 'auto' }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 43.5 36.2"
      width="100%"
      height={height}
      preserveAspectRatio="xMidYMid meet"
    >
      <g fillRule="nonzero">		
      <path fill={fill} d="M16.1,15.2c3.9,0,6,1.5,6,4.4c0,3.3-2,5.3-6.9,5.3h-15l3.2-4.1h12.1c1.2,0,1.7-0.3,1.7-1.2c0-0.8-0.5-1.2-1.7-1.2H6.9
	c-4.1,0-6-1.8-6-4.6c0-3,2-5,6.9-5h13.9l-3.2,4.2l-11.1,0c-1.2,0-1.7,0.3-1.7,1.1c0,0.8,0.6,1.1,1.7,1.1H16.1z"/>
<path fill={fill} d="M43.1,20.1c0,2.7-1.5,4.7-6.5,4.7H22.5v-9.8h14.2c0.7,0,1.4-0.3,1.4-1.1c0-0.8-0.7-1-1.4-1H22.5l3.1-4.2l10.8,0
	c3.8,0,6.3,1.5,6.3,4.4c0,1.9-1.1,3-2.2,3.4C42,17,43.1,18.2,43.1,20.1z M27.5,18.5v2.2h9.1c1.1,0,1.5-0.4,1.5-1.1
	c0-0.7-0.5-1.1-1.5-1.1H27.5z"/>
<polyline fill={fill} points="18,15 26.1,4.5 28.2,4.5 20.1,15 "/>
<polyline fill={fill} points="5.6,35.9 13.7,25.4 15.9,25.4 7.8,35.9 "/>
<polyline fill={fill} points="19.8,8.9 26.3,0.5 28.1,0.5 21.6,8.9 "/>
<polyline fill={fill} points="11.1,32.8 19.2,22.4 21.4,22.4 13.3,32.8 "/>
      </g>
    </svg>
  );
};
