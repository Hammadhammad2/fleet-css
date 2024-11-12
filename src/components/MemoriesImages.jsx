import React, { useState } from 'react';
import SparrowPng from '../assets/sparrow.png';
import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';
import MessageAvatar from './MessageAvatar';

const MemoriesImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const images = [SparrowPng, SparrowPng];

  const handleNext = () => {
    if (isFading) return;
    setIsFading(true);

    setTimeout(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (isFading) return;
    setIsFading(true);

    setTimeout(() => {
      setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
      setIsFading(false);
    }, 300);
  };

  return (
    <div className='md:w-[28.375rem] md:h-[43.75rem] xs:w-full xs:h-[38.125rem] relative md:mr-10'>
      <div className='mt-12 flex justify-center items-center gap-2 absolute right-5 -top-5'>
        <button onClick={handlePrevious} className='hover:outline outline-2 outline-lightGray rounded-full p-2'>
          <img src={LeftArrow} alt='left-arrow' className='h-4 w-4' />
        </button>
        <button onClick={handleNext} className='hover:outline outline-2 outline-lightGray rounded-full p-2'>
          <img src={RightArrow} alt='right-arrow' className='h-4 w-4' />
        </button>
      </div>
      <div className={`transition-all duration-300 h-full w-full ${isFading ? 'bg-white opacity-50' : ''}`}>
        <img src={images[currentImageIndex]} alt='memories' className='rounded-3xl object-cover w-full h-full' />
      </div>
      <MessageAvatar />
    </div>
  );
};

export default MemoriesImages;
