declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  import React from 'react'
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default SVG
}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'