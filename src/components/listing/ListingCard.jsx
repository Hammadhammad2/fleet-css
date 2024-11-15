import React from 'react';
import BeechPng from '../../assets/beech.png';
import StarSvg from '../../assets/star.svg';

const ListingCard = () => {
  return (
    <div className='rounded-2xl bg-white md:w-[16.6669rem] xs:w-full min-h-[22.75rem] xs:mx-7 md:mx-0'>
      <img src={BeechPng} alt='beech' className='md:w-[16.6669rem] xs:w-full' />
      <div className='p-5 flex flex-col justify-center gap-4'>
        <div className='flex justify-between items-center '>
          <div>
            <p className='font-medium text-base'>The grand resort</p>
            <p className='text-tabBg text-xs'>Karineside</p>
          </div>
          <div className='rounded-md border-2 border-[#58C27D] p-2'>
            <p className='line-through font-bold text-xs text-[#B1B5C3]'>$699</p>
            <p className='text-[#58C27D] font-bold text-xs'>$548</p>
          </div>
        </div>
        <div className='h-px bg-lightGray rounded-px' />
        <div className='flex justify-between items-center'>
          <p className='text-secondary text-xs'>Tue, Jul 20 - Fri, Jul 23</p>
          <div className='flex items-center gap-1'>
            <img src={StarSvg} alt='star' className='h-3 w-3' />
            <p className='font-semibold text-xs'>4.8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
