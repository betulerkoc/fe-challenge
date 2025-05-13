import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdvancedFilter = (
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
    <path
      fill="#666"
      d="M42 33a9.033 9.033 0 0 1-11.997 8.475 10.94 10.94 0 0 0 3.958-9.24 11.06 11.06 0 0 0 4.624-6.28A8.98 8.98 0 0 1 42 33M31.988 33.24a8.997 8.997 0 1 1-14.573-7.284 11.05 11.05 0 0 0 14.573 7.284"
    />
    <path fill="#666" d="M19 23a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9" />
  </svg>
);
const ForwardRef = forwardRef(SvgAdvancedFilter);
export default ForwardRef;
