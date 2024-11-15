import React from 'react';
import Button from './Shared/Button';
import Tabs from './Shared/Tabs';

const HeroSection = () => {
  const tabs = ['Stays', 'Flights', 'Cars', 'Things to do'];
  return (
    <div className='xs:bg-[#F4F5F6] sm:bg-none xs:rounded-3xl lg:mb-40 sm:mb-16 xs:mb-5'>
      <div className='bg-custom rounded-3xl w-full sm:bg-cover sm:bg-center lg:h-[48.5rem] xs:h-[50.75rem] bg-no-repeat xs:bg-right-bottom xs:bg-180% relative'>
        <div className='absolute bg-gradient-custom rounded-3xl w-full inset-0 bg-no-repeat bg-cover'>
          <div className='h-[37.5625rem] xs:h-[39.5625rem] w-full sm:px-20 xs:px-4 xs:pt-20 flex flex-col sm:justify-start gap-6 xs:items-center sm:items-start xs:gap-4 sm:py-[146px]'>
            <p className='font-bold text-center sm:text-left sm:text-8xl sm:leading-[6rem] text-wrap sm:w-[27.9375rem] xs:text-[64px] xs:leading-[64px]'>
              Air, sleep, dream
            </p>
            <p className='font-poppins text-2xl xs:text-base'>Find and book a great experience.</p>
            <div>
              <Button>Start your search</Button>
            </div>
          </div>
          <div className='sm:mx-20 xs:mx-1 sm:p-10 xs:p-5 bg-white sm:h-[15.9375rem] xs:h-[10.9375rem] rounded-3xl'>
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  );
};
`
`;

export default HeroSection;
