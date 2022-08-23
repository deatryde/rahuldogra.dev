import type { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
}

const LogoSVG: FC<Props> = ({ width = 30, height = 30 }): ReactElement => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 75.59054435220287 75.39728547727759'
  >
    <defs id='SvgjsDefs2883'></defs>
    <g
      id='SvgjsG2884'
      transform='matrix(0.7719934992729088,0,0,0.7719934992729088,-2.2241133037993865,-2.2827847906021383)'
      fill='#c8e7ed'
    >
      <g xmlns='http://www.w3.org/2000/svg'>
        <path d='M2.881,59.625v25.604l22.175,12.803L47.23,85.229V59.625L25.056,46.822L2.881,59.625z M37.778,79.772l-12.722,7.345   l-12.723-7.345v-14.69l12.723-7.346l12.722,7.346V79.772z'></path>
        <path d='M72.556,15.759L50.381,2.957L28.206,15.76v25.605l22.175,12.803l22.175-12.803V15.759z M63.104,35.907l-12.723,7.346   l-12.722-7.346v-14.69l12.722-7.346l12.723,7.346V35.907z'></path>
        <path d='M75.707,46.822L53.531,59.625v25.604l22.175,12.803l22.175-12.803V59.625L75.707,46.822z M88.429,79.772l-12.723,7.345   l-12.723-7.345v-14.69l12.724-7.346l12.722,7.346V79.772z'></path>
      </g>
    </g>
  </svg>
);

export default LogoSVG;
