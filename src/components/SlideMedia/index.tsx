import React from 'react';
import { MenuItem } from '../../types';
import SlideContent from '../SlideContent';

interface SlideMediaProps {
  activeSlide: MenuItem;
  activeIndex: number;
}

const SlideMedia: React.FC<SlideMediaProps> = ({ activeSlide, activeIndex }) => (
  <div className="relative mb-8 px-4">
    <div className="flex-1">
      <SlideContent 
        slide={activeSlide} 
        activeIndex={activeIndex}
      />
    </div>
  </div>
);

export default SlideMedia; 