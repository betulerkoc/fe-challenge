import React, { useState } from 'react';
import { MenuItem } from '../../types';
import SlideMedia from '../SlideMedia';
import SlideDescription from '../SlideDescription';

interface SlideMenuProps {
  items: MenuItem[];
  defaultActiveIndex?: number;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ items, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="w-full relative">
      <SlideMedia 
        activeSlide={items[activeIndex]} 
        activeIndex={activeIndex}
      />

      <div className="w-full overflow-x-auto scrollbar-hide relative z-10">
        <div className="flex">
          {items.map((item, index) => (
            <SlideDescription
              key={index}
              item={item}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
