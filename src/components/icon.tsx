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
      viewBox="0 0 100 94"
      width="100%"
      height={height}
      preserveAspectRatio="xMidYMid meet"
    >
      <g fillRule="nonzero">		
		<path fill={fill} d="M56.5,1.4l42.7,91v0h-13l-2.4-5c-5.2-10.5-17.9-17.7-34-17.7c-16.5,0-28.2,7.1-33.4,17.2l-2.6,5.5h-13
			l42.7-91L56.5,1.4z M50,15.3L28,62.1c6.5-3,13.7-4.3,21.6-4.3c8.1,0,15.8,1.7,22.8,5.2L50,15.3z"/>
      </g>
    </svg>
  );
};
