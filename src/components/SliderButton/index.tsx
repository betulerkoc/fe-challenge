import React from 'react';
import { MenuItem } from '../../types';

interface SliderButtonProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}

const SliderButton: React.FC<SliderButtonProps> = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-4 min-w-[301px] h-[124px] border border-gray-200 transition-all duration-200 px-6 ${
      isActive ? 'bg-[#0381FF08] border-[#0381FF]' : 'hover:bg-gray-50'
    }`}
  >
    <div
      className={`w-12 h-12 flex items-center justify-center ${
        isActive ? 'text-[#0381FF] animate-circle-fill' : 'text-gray-400'
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
);

export default SliderButton; 