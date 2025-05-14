import React from 'react';
import { MenuItem } from '../../types';
import scanFile1 from '../../assets/images/scanFile1.jpg';
import scanFile2 from '../../assets/images/scanFile2.jpg';
import scanFile3 from '../../assets/images/scanFile3.jpg';

interface ScanSlideProps {
  slide: MenuItem;
}

export const ScanSlide: React.FC<ScanSlideProps> = ({ slide }) => (
  <div className="relative">
    <div className="w-[250.68px] lg:w-[374.79px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full"
      />
    </div>

    <div className="absolute inset-0 flex items-center justify-center h-[400px]">
      <div className="relative m-auto w-full h-full flex items-center justify-center">
        <img
          src={scanFile1}
          alt="Scan File 1"
          className="absolute w-[165.19px]  object-contain
                   shadow-[0px_0px_6.02px_rgba(0,0,0,0.25)] rounded-sm left-1/2 -translate-x-1/2 -translate-y-7
                  animate-[stackSlide_0.5s_ease-out_0.1s_forwards] 
                  opacity-0 lg:w-[246.98px] lg:translate-y-15"
        />
        <img
          src={scanFile2}
          alt="Scan File 2"
          className="absolute w-[182.71px]  object-contain
                  shadow-[0px_0px_6.02px_rgba(0,0,0,0.25)] rounded-sm left-1/2 -translate-x-1/2 -translate-y-2
                  animate-[stackSlide_0.5s_ease-out_0.3s_forwards] 
                  opacity-0 lg:w-[273.17px] lg:translate-y-22"
        />
        <img
          src={scanFile3}
          alt="Scan File 3"
          className="absolute w-[193.89px]  object-contain
                   shadow-[0px_0px_6.02px_rgba(0,0,0,0.25)] rounded-sm left-1/2 -translate-x-1/2 translate-y-2.5
                  animate-[stackSlide_0.5s_ease-out_0.5s_forwards] 
                  opacity-0 lg:w-[289.89px] lg:translate-y-28"
        />
      </div>
    </div>
  </div>
);