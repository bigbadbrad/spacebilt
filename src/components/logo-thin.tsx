// /src/components/logo-thin.tsx
import { styled } from '@mui/material/styles';

interface LogoProps {
  fill?: string; // Optional prop for fill color
  height?: string | number; // Optional prop for height
}

export const LogoThin: React.FC<LogoProps> = ({ fill = '#ffffff', height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184 18"
      width="100%" // Keeps it responsive
      height={height || "100%"} // Uses provided height or defaults to 100%
      preserveAspectRatio="xMidYMid meet" // Ensures the aspect ratio is preserved and the SVG is centered
    >
      <g fillRule="nonzero">	
    <path fill={fill} d="M16.6,7.4c3.9,0,6,1.5,6,4.4c0,3.3-2,5.3-6.9,5.3h-15l3.2-4.1h12.1c1.2,0,1.7-0.3,1.7-1.2c0-0.8-0.5-1.2-1.7-1.2H7.4
	c-4.1,0-6-1.8-6-4.6c0-3,2-5,6.9-5h13.9L19,5.2H7.8c-1.2,0-1.7,0.3-1.7,1.1c0,0.8,0.6,1.1,1.7,1.1H16.6z"/>
	<path fill={fill} d="M38.1,12.9h-8.4v4.1h-4.9V8.8h13.8C40.1,8.8,41,8.1,41,7c0-1.1-0.9-1.8-2.4-1.8H24.8L28,1h10.1c5,0,7.9,2.4,7.9,6
	C46,10.6,43.1,12.9,38.1,12.9z"/>
	<path fill={fill} d="M51.5,17.1l3-4.1h4c1,0,2.1,0,2.9,0c-0.4-0.6-1.1-1.6-1.6-2.3l-2.9-4.2l-7.5,10.7h-5.9L53.8,2.5c0.7-0.9,1.7-1.8,3.2-1.8
	c1.5,0,2.5,0.8,3.2,1.8l10,14.5H51.5z"/>
	<path fill={fill} d="M89.9,12.9l-3.2,4.1h-8.1c-5.6,0-9.7-3.5-9.7-8.2C69,4.2,73.1,1,78.7,1h11.3l-3.2,4.2h-8.1C76,5.2,74,6.8,74,9.1
	c0,2.3,2,3.8,4.7,3.8H89.9z"/>
	<path fill={fill} d="M111.3,12.9l-3.2,4.1H92.6V1h18.6L108,5.2H97.6v1.9h12.7l-2.9,3.6h-9.9v2.2H111.3z"/>
	<path fill={fill} d="M134.6,12.4c0,2.7-1.5,4.7-6.5,4.7H114V7.3h14.2c0.7,0,1.4-0.3,1.4-1.1c0-0.8-0.7-1-1.4-1H114l3.4-4.2H128
	c3.8,0,6.3,1.5,6.3,4.4c0,1.9-1.1,3-2.2,3.4C133.5,9.2,134.6,10.5,134.6,12.4z M119,10.7v2.2h9.1c1.1,0,1.5-0.4,1.5-1.1
	c0-0.7-0.5-1.1-1.5-1.1H119z"/>
	<path fill={fill} d="M143.2,17.1h-5V1h5V17.1z"/>
	<path fill={fill} d="M164.7,12.9l-3.2,4.1h-14.2V1h5v11.9H164.7z"/>
	<path fill={fill} d="M183.2,1L180,5.2h-5.7v11.9h-5V5.2h-7.5L165,1H183.2z"/>
      </g>
    </svg>
  );
};

