import React, { useState, useCallback } from 'react';
import { MenuItem } from '../../types';
import SlideContent from '../SlideContent';
import SliderButton from '../SliderButton';

interface SlideMenuProps {
  items: MenuItem[];
  defaultActiveIndex?: number;
  className?: string;
  onSlideChange?: (index: number) => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({
  items,
  defaultActiveIndex = 0,
  className = '',
  onSlideChange
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
    onSlideChange?.(index);
  }, [onSlideChange]);

  if (!items.length) {
    return null;
  }

  return (
    <div className={`w-full relative ${className}`.trim()}>
      <div className="relative top-14 lg:top-18 h-[560px]">
        <div className="flex-1">
          <SlideContent
            slide={items[activeIndex]}
            activeIndex={activeIndex}
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto top-14 lg:top-18 scrollbar-hide relative z-10">
        <div className="flex">
          {items.map((item, index) => (
            <SliderButton
              key={index}
              item={item}
              isActive={activeIndex === index}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;