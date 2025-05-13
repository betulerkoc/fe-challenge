import React, { useState } from 'react';
import { MenuItem } from '../../types';
import SlideContent from '../SlideContent';

interface SlideMenuProps {
  items: MenuItem[];
  defaultActiveIndex?: number;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ items, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="w-full">
      <div className="mb-8 px-4">
        <SlideContent slide={items[activeIndex]} />
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex px-4">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center space-x-4 min-w-[301px] h-[124px] border border-gray-200 transition-all duration-200 px-6 ${activeIndex === index ? 'bg-[#0381FF08] border-[#0381FF]' : 'hover:bg-gray-50'
                }`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center ${activeIndex === index
                    ? 'text-[#0381FF] animate-circle-fill'
                    : 'text-gray-400'
                  }`}
              >
                {React.cloneElement(item.icon as JSX.Element, {
                  className: 'w-full h-full',
                })}
              </div>



              <div className="text-left flex-1">
                <div className="text-xl font-medium">
                  {item.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
