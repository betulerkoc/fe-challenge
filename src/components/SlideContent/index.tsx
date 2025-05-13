import React from 'react';
import { MenuItem } from '../../types';
import { DocumentSlide } from './DocumentSlide';
import { SignatureSlide } from './SignatureSlide';
import { ScanSlide } from './ScanSlide';
import { FilterSlide } from './FilterSlide';
import { ShareSlide } from './ShareSlide';

interface SlideContentProps {
  slide: MenuItem;
  activeIndex: number;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, activeIndex }) => {
  const renderSlideContent = () => {
    switch (activeIndex) {
      case 0:
        return <DocumentSlide slide={slide} animate />;
      case 1:
        return <SignatureSlide slide={slide} />;
      case 2:
        return <ScanSlide slide={slide} />;
      case 3:
        return <FilterSlide slide={slide} />;
      case 4:
        return <ShareSlide slide={slide} />;
      default:
        return <DocumentSlide slide={slide} />;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:h-[736px] lg:flex-row-reverse">
      <div className="flex flex-col items-center justify-center mt-10 lg:w-[556px] lg:items-end relative z-20">
        <p className="text-sm font-bold text-[#0381FF] uppercase tracking-wider mb-2">{slide.title}</p>
        <p className="text-3xl text-gray-900 mb-4">{slide.subtitle}</p>
        <p className="text-sm text-center leading-8 text-gray-600 mb-8 lg:text-xl lg:text-right">{slide.description}</p>
        <button className="text-[#0B122A] border border-gray-200 rounded-md px-4 py-2 font-medium mb-8">Learn More</button>
      </div>

      <div className="lg:mr-20 flex items-center justify-center min-h-[400px] relative">
        {renderSlideContent()}
      </div>
    </div>
  );
}

export default SlideContent;