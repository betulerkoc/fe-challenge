import React from 'react';
import { MenuItem } from '../../types';
import filterLightImg from '../../assets/filterLight.jpg';
import filterContrastImg from '../../assets/filterContrast.jpg';

interface FilterSlideProps {
  slide: MenuItem;
}

export const FilterSlide: React.FC<FilterSlideProps> = ({ slide }) => (
  <div className='relative'>
    <div className="w-[284px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>
    <div className="absolute left-0 top-30 ">
      <img
        src={filterLightImg}
        alt="Light Filter"
        className="w-[28px] fade-in-left [animation-delay:2000ms]"
      />
    </div>
    <div className="absolute right-0 top-30">
      <img
        src={filterContrastImg}
        alt="Contrast Filter"
        className="w-[28px] fade-in-right [animation-delay:2000ms]"
      />
    </div>
  </div>
); 