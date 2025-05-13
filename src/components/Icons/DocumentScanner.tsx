import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDocumentScanner = (
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
      strokeOpacity={0.08}
    />
    <path
      fill="currentColor"
      d="M22.646 38.493h10.708c2.16 0 3.274-1.135 3.274-3.304v-8.99h-7.533c-1.256 0-1.858-.603-1.858-1.859v-7.613h-4.59c-2.15 0-3.275 1.135-3.275 3.314V35.19c0 2.17 1.125 3.304 3.274 3.304m6.64-13.76h7.242c-.06-.463-.392-.895-.914-1.427l-5.495-5.565c-.502-.512-.954-.854-1.416-.914v7.322c.01.392.2.583.583.583m-5.183 5.915c-.432 0-.744-.311-.744-.713s.312-.713.744-.713h7.824c.412 0 .734.311.734.713a.714.714 0 0 1-.734.713zm0 3.767c-.432 0-.744-.311-.744-.713s.312-.713.744-.713h7.824c.412 0 .734.311.734.713a.714.714 0 0 1-.734.713z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentScanner);
export default ForwardRef;
