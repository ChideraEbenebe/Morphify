const MorphifyLogo = () => {
  return (
    <svg
      width='120'
      height='120'
      viewBox='0 0 120 120'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'>
      {/* Background circle (optional, for visual framing) */}
      <circle
        cx='60'
        cy='60'
        r='55'
        stroke='#FF924A'
        strokeWidth='2'
        fill='#FFF8F0'
      />

      {/* Big 'M' */}
      <text
        x='50%'
        y='60%'
        textAnchor='middle'
        fill='#FF924A'
        fontSize='48'
        fontWeight='bold'
        fontFamily='Arial, sans-serif'
        dy='.3em'>
        M
      </text>

      {/* Stars */}
      <g fill='#FFD700'>
        <polygon points='10,10 12,15 17,16 13,19 14,24 10,21 6,24 7,19 3,16 8,15' />
        <polygon points='100,25 102,28 106,29 103,31 104,35 100,33 96,35 97,31 94,29 98,28' />
        <polygon points='85,90 87,93 91,94 88,96 89,100 85,98 81,100 82,96 79,94 83,93' />
      </g>
    </svg>
  );
};

export default MorphifyLogo;
