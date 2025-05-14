import React from 'react';
import { MenuItem } from '../../types';
import { DocumentSlide } from './DocumentSlide';
import { SignatureSlide } from './SignatureSlide';
import { ScanSlide } from './ScanSlide';
import { FilterSlide } from './FilterSlide';
import { ShareSlide } from './ShareSlide';
import SlideDescription from '../SlideDescription';

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
    <div className="flex flex-col justify-center items-center lg:flex-row-reverse">
      <SlideDescription slide={slide} />
      <div className="lg:mr-20 flex items-center justify-center relative">
        {renderSlideContent()}
      </div>
    </div>
  );
}

export default SlideContent;