// /src/components/icon.tsx:
import { styled } from '@mui/material/styles';

interface IconProps {
  fill?: string; // Optional prop for fill color
  height?: number | string;
}

export const Icon: React.FC<IconProps> = ({ fill = '#ffffff', height = 'auto' }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 106"
      width="100%"
      height={height}
      preserveAspectRatio="xMidYMid meet"
    >
      <g fillRule="nonzero">		
      <path fill={fill} d="M105.9,53c0,25.8-17.7,37.4-52.8,37.4C17.9,90.3,0.3,78.8,0.3,53c0-25.8,17.6-37.3,52.8-37.3
			C88.2,15.7,105.9,27.2,105.9,53z M83.6,53c0-15.6-8.1-18.5-30.6-18.5c-22.5,0-30.6,2.9-30.6,18.5s8.1,18.6,30.6,18.6
			C75.5,71.5,83.6,68.5,83.6,53z"/>

      </g>
    </svg>
  );
};
