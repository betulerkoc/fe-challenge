import React from 'react';
import { MenuItem } from '../../types';
import shareJpgImg from '../../assets/images/shareJpg.png';
import sharePdfImg from '../../assets/images/sharePdf.png';
import shareTxtImg from '../../assets/images/shareTxt.png';
import shareArrowImg from '../../assets/images/shareArrow.png';

interface ShareSlideProps {
  slide: MenuItem;
}

export const ShareSlide: React.FC<ShareSlideProps> = ({ slide }) => (
  <div className='relative'>
    <div className="w-[237.22px] lg:w-[365.42px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>

    <div className="absolute inset-x-0 bottom-5 flex justify-center items-center">
      <img
        src={shareArrowImg}
        alt={'Share'}
        className="w-[23.24px] object-contain opacity-0 -mr-2 mt-12 animate-[slideUp_0.8s_ease-out_1000ms_forwards]"
      />
      <img
        src={sharePdfImg}
        alt={'Share PDF'}
        className="w-[72.1px] object-contain opacity-0 mx-1 animate-[slideUp_0.8s_ease-out_1250ms_forwards] lg:w-[110px]"
      />
      <img
        src={shareJpgImg}
        alt={'Share JPG'}
        className="w-[71.8px] object-contain opacity-0 mb-12 animate-[slideUp_0.8s_ease-out_1500ms_forwards] lg:w-[96px]"
      />
      <img
        src={shareTxtImg}
        alt={'Share TXT'}
        className="w-[72.5px] object-contain opacity-0 mx-3 animate-[slideUp_0.8s_ease-out_1750ms_forwards] lg:w-[110px]"
      />
    </div>
  </div>
); 