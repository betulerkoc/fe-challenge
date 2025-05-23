import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBatchScan = (
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
    <circle
      cx={28}
      cy={28}
      r={27.5}
      stroke="currentColor"
      strokeLinecap="round"
      className="batch-scan_svg__progress-ring"
    />
    <path
      fill="currentColor"
      d="M16 25.333A1.333 1.333 0 0 0 17.333 24v-5.334a1.333 1.333 0 0 1 1.334-1.333H24a1.333 1.333 0 0 0 0-2.666h-5.333a4 4 0 0 0-4 4V24A1.333 1.333 0 0 0 16 25.333M37.333 14.667H32a1.333 1.333 0 0 0 0 2.666h5.333a1.333 1.333 0 0 1 1.334 1.334V24a1.333 1.333 0 1 0 2.666 0v-5.334a4 4 0 0 0-4-4M40 30.667A1.333 1.333 0 0 0 38.667 32v5.333a1.333 1.333 0 0 1-1.334 1.334H32a1.333 1.333 0 0 0 0 2.666h5.333a4 4 0 0 0 4-4V32A1.334 1.334 0 0 0 40 30.666M24 38.667h-5.333a1.334 1.334 0 0 1-1.334-1.334V32a1.334 1.334 0 0 0-2.666 0v5.333a4 4 0 0 0 4 4H24a1.333 1.333 0 0 0 0-2.666"
    />
    <path
      fill="currentColor"
      d="M33.333 20H22.667A2.667 2.667 0 0 0 20 22.667v10.666A2.667 2.667 0 0 0 22.667 36h10.666A2.667 2.667 0 0 0 36 33.333V22.667A2.667 2.667 0 0 0 33.333 20"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBatchScan);
export default ForwardRef;
