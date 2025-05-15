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
    <div className="w-[237.22px] lg:w-[365.42px] translate-y-11 lg:translate-y-0">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>

    <div className="absolute inset-x-0 bottom-5 lg:bottom-10">
      <div className="flex items-center justify-center">
        <img
          src={shareArrowImg}
          alt={'Share'}
          className="w-[23.24px] object-contain opacity-0 mt-16 lg:mt-22 lg:scale-[1] [animation:slide-up_0.8s_ease-out_1s_forwards]"
        />
        <img
          src={sharePdfImg}
          alt={'Share PDF'}
          className="w-[72.1px] object-contain opacity-0 mx-1 lg:scale-[2.2] lg:mr-10 lg:ml-3 [animation:slide-up_0.8s_ease-out_1.25s_forwards]"
        />
        <img
          src={shareJpgImg}
          alt={'Share JPG'}
          className="w-[71.8px] object-contain opacity-0 mb-12 lg:scale-[2] lg:mb-16 lg:mx-10 [animation:slide-up_0.8s_ease-out_1.5s_forwards]"
        />
        <img
          src={shareTxtImg}
          alt={'Share TXT'}
          className="w-[72.5px] object-contain opacity-0 mx-1 lg:scale-[2.2] lg:mx-10 [animation:slide-up_0.8s_ease-out_1.75s_forwards]"
        />
      </div>
    </div>
  </div>
); 