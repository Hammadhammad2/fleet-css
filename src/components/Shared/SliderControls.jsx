import React from 'react';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';

const SliderControls = ({ onPrevious, onNext }) => (
  <div className='flex justify-center items-center gap-2'>
    <button
      onClick={onPrevious}
      className='hover:outline outline-2 outline-lightGray rounded-full p-2 transition-transform transform active:scale-90'
    >
      <img src={LeftArrow} alt='left-arrow' className='h-4 w-4' />
    </button>
    <button
      onClick={onNext}
      className='hover:outline outline-2 outline-lightGray rounded-full p-2 transition-transform transform active:scale-90'
    >
      <img src={RightArrow} alt='right-arrow' className='h-4 w-4' />
    </button>
  </div>
);

export default SliderControls;
