import React from 'react';
import { MenuItem } from '../../types';
import filterLightImg from '../../assets/images/filterLight.png';
import filterContrastImg from '../../assets/images/filterContrast.png';

interface FilterSlideProps {
  slide: MenuItem;
}

export const FilterSlide: React.FC<FilterSlideProps> = ({ slide }) => (
  <div className='relative'>
    <div className="w-[244.41px] lg:w-[365.42px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>
    <div className="absolute -left-3 top-18 lg:-left-5 lg:top-27">
      <img
        src={filterLightImg}
        alt="Light Filter"
        className="w-[28.35px] lg:w-[42.39px] fade-in-left [animation-delay:2000ms]"
      />
    </div>
    <div className="absolute -right-3 top-18 lg:-right-5 lg:top-27">
      <img
        src={filterContrastImg}
        alt="Contrast Filter"
        className="w-[28.35px] lg:w-[42.39px] fade-in-right [animation-delay:2000ms]"
      />
    </div>
  </div>
); 