import React from 'react';
import { MenuItem } from '../../types';
import shareJpgImg from '../../assets/shareJpg.png';
import sharePdfImg from '../../assets/sharePdf.png';
import shareTxtImg from '../../assets/shareTxt.png';

interface ShareSlideProps {
  slide: MenuItem;
}

export const ShareSlide: React.FC<ShareSlideProps> = ({ slide }) => (
  <div className='relative'>
    <div className="w-[284px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>

    <div className="absolute inset-x-0 bottom-5 flex justify-center items-center gap-4">
      <img
        src={sharePdfImg}
        alt={'Share PDF'}
        className="w-[72px] h-[86px] object-contain opacity-0 animate-[slideUp_0.8s_ease-out_1000ms_forwards]"
      />
      <img
        src={shareJpgImg}
        alt={'Share JPG'}
        className="w-[64px] h-[86px] object-contain opacity-0 mb-8 animate-[slideUp_0.8s_ease-out_2000ms_forwards]"
      />
      <img
        src={shareTxtImg}
        alt={'Share TXT'}
        className="w-[72px] h-[86px] object-contain opacity-0 animate-[slideUp_0.8s_ease-out_3000ms_forwards]"
      />
    </div>
  </div>
); 