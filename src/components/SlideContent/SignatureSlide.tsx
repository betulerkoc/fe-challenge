import React from 'react';
import { MenuItem } from '../../types';
import signatureImg from '../../assets/images/signature.png';
import stampImg from '../../assets/images/stamp.png';

interface SignatureSlideProps {
  slide: MenuItem;
}

export const SignatureSlide: React.FC<SignatureSlideProps> = ({ slide }) => (
  <div className='relative'>
    <div className="w-[239.12px] lg:w-[365.58px] -translate-y-2 lg:translate-y-0">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>
    <div className="absolute -left-16 top-50 lg:top-76 lg:-left-24">
      <img
        src={signatureImg}
        alt="Signature"
        className="w-[142.18px] lg:w-[217.37px] opacity-0 [animation:fade-in_0.8s_ease-out_1000ms_forwards]"
      />
    </div>
    <div className="absolute -right-12 top-24 lg:top-36 lg:-right-20">
      <img
        src={stampImg}
        alt="Stamp"
        className="w-[141.68px] lg:w-[216.62px] opacity-0 [animation:fade-in_0.8s_ease-out_1500ms_forwards]"
      />
    </div>
  </div>
); 