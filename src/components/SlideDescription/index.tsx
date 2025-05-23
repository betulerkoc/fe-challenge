import React from 'react';
import { MenuItem } from '../../types';

interface SlideDescriptionProps {
  slide: MenuItem;
}

const SlideDescription: React.FC<SlideDescriptionProps> = ({ slide }) => (
  <div className="flex flex-col items-center justify-center w-[327px] lg:w-[556px] lg:items-end relative z-20">
    <p className="font-bold text-[15px] leading-[100%] tracking-[1.2px] text-center uppercase text-[#0381FF] mb-2.5">{slide.title}</p>
    <p className="font-semibold text-[30px] leading-[38px] tracking-[0px] text-center text-[#0B122A] mb-4">{slide.subtitle}</p>
    <p className="font-light text-[12.5px] leading-[26px] tracking-[0px] text-center text-[#0B172A] mb-5 lg:text-right lg:text-[19px] lg:leading-[31px] lg:tracking-[0.7px]">{slide.description}</p>
    <button className="mb-12 font-normal text-[13px] leading-[100%] tracking-[-0.1px] text-center align-middle text-[#0B122A] border-[0.37px] border-black/[0.16] rounded-xs px-4 py-2 hover:bg-black/[0.02] transition-colors lg:text-{18.5px]">Learn More</button>
  </div>
);

export default SlideDescription; 