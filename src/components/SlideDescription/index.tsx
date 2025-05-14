import React from 'react';
import { MenuItem } from '../../types';

interface SlideDescriptionProps {
  slide: MenuItem;
}

const SlideDescription: React.FC<SlideDescriptionProps> = ({ slide }) => (
  <div className="flex flex-col items-center justify-center w-[327px] lg:w-[556px] lg:items-end relative z-20">
    <p className="font-['SF_Pro_Display'] font-extrabold text-[16px] leading-[100%] tracking-[2px] text-center uppercase text-[#0381FF] mb-2">{slide.title}</p>
    <p className="font-['SF_Pro_Display'] font-bold text-[32px] leading-[40px] tracking-[0px] text-center text-gray-900 mb-4">{slide.subtitle}</p>
    <p className="font-['SF_Pro_Display'] font-normal text-[14px] leading-[28px] tracking-[0px] text-center text-gray-600 mb-4 lg:text-right lg:text-[20px] lg:leading-[32px] lg:tracking-[0.8px]">{slide.description}</p>
    <button className="font-['SF_Pro_Display'] mb-12 font-normal text-sm leading-[100%] tracking-[0px] text-center align-middle text-[#0B122A] border-[0.37px] border-black/[0.16] rounded-xs px-4 py-2">Learn More</button>
  </div>
);

export default SlideDescription; 