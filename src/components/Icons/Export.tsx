import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExport = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 56 56"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={28} cy={28} r={27.5} stroke="#000" strokeOpacity={0.08} />
    <g fill="#666" clipPath="url(#export_svg__a)">
      <path d="m36.848 19.469-4.989-4.989v4.989z" />
      <path d="M29.234 29.094a.82.82 0 0 1 .82-.82h7.274v-7.165H31.04a.82.82 0 0 1-.82-.82V14H19.008A3.01 3.01 0 0 0 16 17.008v21.984A3.01 3.01 0 0 0 19.008 42H34.32a3.01 3.01 0 0 0 3.008-3.008v-9.078h-7.273a.82.82 0 0 1-.82-.82m-9.132-5.742h9.296a.82.82 0 1 1 0 1.64h-9.296a.82.82 0 1 1 0-1.64m0 3.28h7.109a.82.82 0 1 1 0 1.641H20.1a.82.82 0 1 1 0-1.64m0 3.282h7.109a.82.82 0 1 1 0 1.64H20.1a.82.82 0 1 1 0-1.64m9.296 4.922h-9.296a.82.82 0 1 1 0-1.64h9.296a.82.82 0 1 1 0 1.64M43.76 28.514l-3.282-3.281a.82.82 0 1 0-1.16 1.16l1.881 1.88h-3.87v1.641h3.87l-1.88 1.881a.82.82 0 1 0 1.16 1.16l3.28-3.281a.82.82 0 0 0 0-1.16" />
    </g>
    <defs>
      <clipPath id="export_svg__a">
        <path fill="#fff" d="M16 14h28v28H16z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgExport);
export default ForwardRef;
