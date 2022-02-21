import * as React from 'react';
function SvgPointsIpadGuy(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={163}
      height={94}
      {...props}
    >
      <defs>
        <linearGradient
          id="points_ipad_guy_svg__a"
          x1={0.148}
          y1={0.084}
          x2={0.885}
          y2={0.631}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#550962" />
          <stop offset={1} stopColor="#690770" />
        </linearGradient>
        <clipPath id="points_ipad_guy_svg__b">
          <rect
            data-name="Rectangle 9"
            width={163}
            height={94}
            rx={6}
            transform="translate(779 312)"
            fill="url(#points_ipad_guy_svg__a)"
          />
        </clipPath>
        <pattern
          id="points_ipad_guy_svg__c"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 7087 3651"
        >
          <image
            width={7087}
            height={3651}
          />
        </pattern>
      </defs>
      <g
        data-name="Mask Group 1"
        transform="translate(-779 -312)"
        clipPath="url(#points_ipad_guy_svg__b)"
      >
        <path
          data-name="Rectangle 3"
          transform="translate(658.534 298.671)"
          fill="url(#points_ipad_guy_svg__c)"
          d="M0 0h278.214v143.701H0z"
        />
      </g>
    </svg>
  );
}
export default SvgPointsIpadGuy;