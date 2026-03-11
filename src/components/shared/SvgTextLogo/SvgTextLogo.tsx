import React, { SVGProps } from 'react';

interface SvgTextLogoProps extends SVGProps<SVGSVGElement> {
  text?: string;
  fontSize?: number;
  fontFamily?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text = 'Webild',
  fontSize = 48,
  fontFamily = 'Arial, sans-serif',
  ...props
}) => {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
