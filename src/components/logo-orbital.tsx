// /src/components/logo-money.tsx
import { styled } from '@mui/material/styles';

interface LogoProps {
  fill?: string; // Optional prop for fill color
  height?: string | number; // Optional prop for height
}

export const LogoOrbital: React.FC<LogoProps> = ({ fill = '#ffffff', height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 434 183"
      width="100%" 
      height={height || "100%"} 
      preserveAspectRatio="xMidYMid meet" 
    >
      <g fillRule="nonzero">
	<path fill={fill} d="M74.7,91.7c0,17.2-11.8,24.9-35.2,24.9C16,116.7,4.2,109,4.2,91.7S16,66.9,39.5,66.9C62.9,66.9,74.7,74.5,74.7,91.7z
		 M59.8,91.7c0-10.4-5.4-12.3-20.4-12.3c-15,0-20.4,1.9-20.4,12.3c0,10.4,5.4,12.4,20.4,12.4C54.4,104.1,59.8,102.1,59.8,91.7z"/>
	<path fill={fill} d="M150.6,115.9h-19.9l-10.7-12.7H97v12.7H82.1V91.2H124c4.6,0,8.2-2.1,8.2-5.4c0-3.7-3.1-5.6-8.2-5.6H82.1l9.7-12.5h31
		c10.9,0,24.8,3.5,24.8,17.2c0,7.5-4.7,13.7-12.6,15.3c1.7,1.2,3.5,3,6.8,6.3L150.6,115.9z"/>
	<path fill={fill} d="M217.8,101.8c0,8-4.4,14-19.6,14h-42.3V86.6h42.6c2.2,0,4.2-0.8,4.2-3.2c0-2.4-2.1-3.1-4.2-3.1h-42.6L166,67.7h31.9
		c11.5,0,18.9,4.5,18.9,13.3c0,5.7-3.2,8.9-6.6,10.1C214.4,92.3,217.8,96.1,217.8,101.8z M170.9,96.9v6.6h27.4
		c3.2,0,4.6-1.2,4.6-3.4c0-2.1-1.4-3.2-4.6-3.2H170.9z"/>
	<path fill={fill} d="M240.4,115.9h-14.9V67.7h14.9V115.9z"/>
	<path fill={fill} d="M309.5,67.7l-9.6,12.5h-17.2v35.6h-14.9V80.2h-22.6l9.6-12.5H309.5z"/>
	<path fill={fill} d="M319.2,115.9l9-12.4h12.1c2.9,0,6.3,0,8.6,0.1c-1.3-1.7-3.3-4.7-4.9-7l-8.6-12.7l-22.6,32h-17.6L326,72.3
		c2-2.8,5-5.4,9.6-5.4c4.5,0,7.4,2.4,9.5,5.4l30.1,43.6H319.2z"/>
	<path fill={fill} d="M432.8,103.5l-9.6,12.4h-42.6V67.7h14.9v35.8H432.8z"/>

{/* <polyline fill={fill} points="94.5,63.7 143.1,0.9 156,0.9 107.4,63.7 "/>
<polyline fill={fill} points="2.4,182.4 51.1,119.7 64,119.7 15.3,182.4 "/>
<polyline fill={fill} points="170.9,63.7 219.6,0.9 232.5,0.9 183.8,63.7 "/>
<polyline fill={fill} points="79.5,181.9 128.1,119.1 141,119.1 92.4,181.9 "/> */}
      </g>
    </svg>
  );
};

