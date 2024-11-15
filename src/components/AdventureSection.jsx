import React from 'react';
import { adventureData } from './data';
import useSlider from '../hooks/useSlider';
import SliderControls from './Shared/SliderControls';
import useTailwindScreen from '../hooks/useTailwindScreen';

const AdventureSection = () => {
  const screen = useTailwindScreen();
  const isMedium = screen === 'lg';
  const isSmall = screen === 'xs' || screen === 'sm';
  const initialItemsPerPage = isMedium ? 2 : isSmall ? 1 : 3;

  const { activeIndex, itemsPerPage, handleNext, handlePrevious } = useSlider(
    adventureData.length,
    initialItemsPerPage
  );

  return (
    <div className='xl:px-20 lg:px-10 py-14 flex flex-col items-center gap-12 lg:mb-[3.5rem] xl:mb-[5rem] xs:mb-16'>
      <div className='w-full flex flex-col items-center'>
        <p className='text-5xl leading-[3.5rem] font-bold text-center'>Let’s go on an adventure</p>
        <p className='sm:text-2xl font-poppins text-secondary text-center mt-3 xs:text-base'>
          Find and book a great experience.
        </p>
        <div className='relative overflow-hidden w-full mt-8'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${(activeIndex * 100) / itemsPerPage}%)` }}
          >
            {adventureData.map((data, index) => (
              <div
                key={index}
                className='xl:min-w-[33.3333%] lg:min-w-[50%] flex-shrink-0 flex justify-center items-center p-4 transition-all duration-500 ease-in-out transform'
              >
                <div className='min-w-[22rem]  h-[12rem] max-w-[22rem] flex flex-row justify-center items-center gap-4 p-4'>
                  <img src={data.image} alt='adventure' className='w-[8.2562rem] h-[7.5rem]' />
                  <div>
                    <p className='text-base font-medium mb-2'>{data.title}</p>
                    <span className='py-2 px-3 bg-lightGray rounded-full font-bold text-xs font-poppins'>
                      {data.places}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SliderControls onPrevious={handlePrevious} onNext={handleNext} />
      </div>
    </div>
  );
};

export default AdventureSection;
