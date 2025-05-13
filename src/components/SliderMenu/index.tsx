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
              className={"flex flex-row items-center justify-center w-[301px] h-[124px] border border-gray-200 transition-all duration-200"}
            >
              <div className="w-12 h-12 flex items-center justify-center text-gray-600">
                {item.icon}
              </div>
              <div className="text-center">
                <div className={`text-xl font-medium ${activeIndex === index ? 'text-blue-600' : 'text-gray-700'}`}>
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
