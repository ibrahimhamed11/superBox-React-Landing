// src/components/ImageGallery/ImageGallery.tsx

import React, { useState } from 'react';
import './ImageGallery.css';

// Import your local PNG icons
import icon1 from './../pages/Home/ImageGallery/icon1.png';
import icon2 from './../pages/Home/ImageGallery/icon2.png';
import icon3 from './../pages/Home/ImageGallery/icon3.png';

interface IconData {
  path: string;
  title: string;
}

const iconsData: IconData[] = [
  { path: icon1, title: 'وسائل دفع متعدده' },
  { path: icon2, title: 'ضمان وجودة' },
  { path: icon3, title: 'توصيل سريع' },
];

const ImageGallery: React.FC = () => {
  const [circleSizes, setCircleSizes] = useState<number[]>([200, 200, 200]); // Increase the initial size

  const handleSizeChange = (index: number, newSize: number) => {
    const newSizes = [...circleSizes];
    newSizes[index] = newSize;
    setCircleSizes(newSizes);
  };

  return (
    <div className="image-gallery-container">
      {iconsData.map((iconData, index) => (
        <div key={index} className="icon-wrapper">
          <div className="icon-circle" style={{ width: circleSizes[index], height: circleSizes[index] }}>
            <img src={iconData.path} alt={`Icon ${index + 1}`} />
          </div>
          <div className="circle-title">
            <label>{iconData.title}</label>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
