import React from 'react';
import { MenuItem } from '../../types';
import filterLightImg from '../../assets/images/filterLight.png';
import filterContrastImg from '../../assets/images/filterContrast.png';

interface FilterSlideProps {
  slide: MenuItem;
}

export const FilterSlide: React.FC<FilterSlideProps> = ({ slide }) => (
  <div className='relative'>
    <div className="w-[244.41px] lg:w-[365.42px] -translate-y-4.5 lg:translate-y-0">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>
    <div className="absolute -left-3 top-14 lg:-left-5 lg:top-27">
      <img
        src={filterLightImg}
        alt="Light Filter"
        className="w-[28.35px] lg:w-[42.39px] opacity-0 [animation:fade-in_0.6s_ease-out_1s_forwards]"
      />
    </div>
    <div className="absolute -right-3 top-14 lg:-right-5 lg:top-27">
      <img
        src={filterContrastImg}
        alt="Contrast Filter"
        className="w-[28.35px] lg:w-[42.39px] opacity-0 [animation:fade-in_0.8s_ease-out_1.2s_forwards]"
      />
    </div>
  </div>
); 