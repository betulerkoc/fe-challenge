import React from 'react';
import { MenuItem } from '../../types';
import scanFile1 from '../../assets/scanFile1.jpg';
import scanFile2 from '../../assets/scanFile2.jpg';
import scanFile3 from '../../assets/scanFile3.jpg';

interface ScanSlideProps {
  slide: MenuItem;
}

export const ScanSlide: React.FC<ScanSlideProps> = ({ slide }) => (
  <div className="relative">
    <div className="w-[284px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full"
      />
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative m-auto h-[400px] w-full flex items-center justify-center">
        <img
          src={scanFile1}
          alt="Scan File 1"
          className="absolute w-[165px] h-auto max-h-[350px] object-contain
                  shadow-xl rounded-sm left-1/2 -translate-x-1/2 -translate-y-1
                  animate-[stackSlide_0.5s_ease-out_1s_forwards] 
                  opacity-0"
        />
        <img
          src={scanFile2}
          alt="Scan File 2"
          className="absolute w-[182px] h-auto max-h-[350px] object-contain
                  shadow-xl rounded-sm left-1/2 -translate-x-1/2 translate-y-3
                  animate-[stackSlide_0.5s_ease-out_2s_forwards] 
                  opacity-0"
        />
        <img
          src={scanFile3}
          alt="Scan File 3"
          className="absolute w-[193px] h-auto max-h-[350px] object-contain
                   shadow-xl rounded-sm left-1/2 -translate-x-1/2 translate-y-6
                  animate-[stackSlide_0.5s_ease-out_3s_forwards] 
                  opacity-0"
        />
      </div>
    </div>
  </div>
);