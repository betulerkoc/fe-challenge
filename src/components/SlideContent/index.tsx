import React from 'react';
import { MenuItem } from '../../types';

interface SlideContentProps {
  slide: MenuItem;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide }) => (
  <div className="flex flex-col justify-center items-center lg:h-[736px] lg:flex-row-reverse">
    <div className="flex flex-col items-center justify-center mt-10 lg:w-[556px] lg:items-end">
      <p className="text-sm font-bold text-[#0381FF] uppercase tracking-wider mb-2">{slide.title}</p>
      <p className="text-3xl text-gray-900 mb-4">{slide.subtitle}</p>
      <p className="text-sm text-center leading-8 text-gray-600 mb-8 lg:text-xl lg:text-right">{slide.description}</p>
      <button className="text-[#0B122A] border border-gray-200 rounded-md px-4 py-2 font-medium mb-8">Learn More</button>
    </div>

    <div className="lg:mr-20">
      {slide.image && (
        <img
          src={slide.image}
          alt={slide.title}
          className="w-[284px]"
        />
      )}
    </div>
  </div>
);

export default SlideContent;