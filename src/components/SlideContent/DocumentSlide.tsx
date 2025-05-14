import React from 'react';
import { MenuItem } from '../../types';

interface DocumentSlideProps {
  slide: MenuItem;
  animate?: boolean;
}

export const DocumentSlide: React.FC<DocumentSlideProps> = ({ slide, animate = false }) => (
  <div className="w-[230.14px] lg:w-[365.58px]">
    <img
      src={slide.image}
      alt={slide.title}
      className={`w-full ${animate ? 'slide-up-animation' : ''}`}
    />
  </div>
); 