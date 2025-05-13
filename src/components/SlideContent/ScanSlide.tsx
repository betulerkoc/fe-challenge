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
        className={`w-full slide-up-animation`}
      />
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src={scanFile1}
        alt={`Scan File 1`}
        className={`w-[250px] animate-[slideUp_3s_ease-out_1000ms_forwards]`}
      />
      <img
        src={scanFile2}
        alt={`Scan File 2`}
        className={`w-[250px] animate-[slideUp_3s_ease-out_2000ms_forwards]`}
      />
      <img
        src={scanFile3}
        alt={`Scan File 3`}
        className={`w-[250px] animate-[slideUp_3s_ease-out_3000ms_forwards]`}
      />
    </div>

  </div>
); 