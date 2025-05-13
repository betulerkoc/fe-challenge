import React from 'react';
import { MenuItem } from '../../types';

interface DocumentSlideProps {
  slide: MenuItem;
  animate?: boolean;
}

export const DocumentSlide: React.FC<DocumentSlideProps> = ({ slide, animate = false }) => (
  <div className="w-[284px]">
    <img
      src={slide.image}
      alt={slide.title}
      className={`w-full ${animate ? 'slide-up-animation' : ''}`}
    />
  </div>
); 