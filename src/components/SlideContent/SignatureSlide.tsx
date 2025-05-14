import React from 'react';
import { MenuItem } from '../../types';
import signatureImg from '../../assets/signature.jpg';
import stampImg from '../../assets/stamp.jpg';

interface SignatureSlideProps {
  slide: MenuItem;
}

export const SignatureSlide: React.FC<SignatureSlideProps> = ({ slide }) => (
  <div className="">

    <div className="w-[284px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full slide-up-animation"
      />
    </div>
    <div className="absolute left-0 bottom-25">
      <img
        src={signatureImg}
        alt="Signature"
        className="w-[120px] fade-in-left"
      />
    </div>
    <div className="absolute right-0 top-35">
      <img
        src={stampImg}
        alt="Stamp"
        className="w-[120px] fade-in-right"
      />
    </div>
  </div>
); 