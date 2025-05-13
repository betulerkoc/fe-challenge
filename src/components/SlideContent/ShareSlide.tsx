import React from 'react';
import { MenuItem } from '../../types';
import shareJpgImg from '../../assets/shareJpg.jpg';
import sharePdfImg from '../../assets/sharePdf.jpg';
import shareTxtImg from '../../assets/sharetxt.jpg';

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

    <div className={`absolute top-1/2 -translate-y-1/2`}>
      <img
        src={shareJpgImg}
        alt={'Share JPG'}
        className={`w-[72px] opacity-0 animate-[slideUp_0.8s_ease-out_1000ms_forwards]`}
      />
      <img
        src={sharePdfImg}
        alt={'Share PDF'}
        className={`w-[72px] opacity-0 animate-[slideUp_0.8s_ease-out_2000ms_forwards]`}
      />
      <img
        src={shareTxtImg}
        alt={'Share TXT'}
        className={`w-[72px] opacity-0 animate-[slideUp_0.8s_ease-out_3000ms_forwards]`}
      />
    </div>

  </div>
); 