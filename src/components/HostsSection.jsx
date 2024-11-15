import React from 'react';
import DropDown from './Shared/DropDown';
import SliderControls from './Shared/SliderControls';
import { hostsData } from './data';
import useSlider from '../hooks/useSlider';
import useTailwindScreen from '../hooks/useTailwindScreen';

const HostsSection = () => {
  const screen = useTailwindScreen();
  const isMedium = screen === 'lg';
  const isSmall = screen === 'xs' || screen === 'sm';
  const initialItemsPerPage = isMedium ? 3 : isSmall ? 1 : 4;
  const { activeIndex, itemsPerPage, handleNext, handlePrevious } = useSlider(hostsData.length, initialItemsPerPage);

  return (
    <div className='xl:px-28 xl:py-14 flex flex-col lg:px-5 lg:py-8'>
      <div className='md:flex justify-between items-center xs:flex-col'>
        <div className='md:flex gap-12 xs:flex-col xs:py-16 xs:px-8 md:py-0 md:px-0'>
          <p className='md:text-5xl md:leading-[3.5rem] xs:leading-10 xs:text-[2.5rem] font-bold'>Best hosts of the</p>
          <DropDown
            className='font-bold text-5xl leading-[56px] text-buttonPrimary custom-select lowercase xs:hidden md:block'
            options={[
              { value: 'All', label: 'All' },
              { value: 'Popular', label: 'Popular' },
              { value: 'Top Rated', label: 'Top Rated' },
              { value: 'Newest', label: 'Newest' },
            ]}
          />
        </div>
        <SliderControls onPrevious={handlePrevious} onNext={handleNext} />
      </div>
      <div className='relative overflow-hidden w-full'>
        <div
          className='flex xl:gap-8 lg:gap-0 py-12 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(activeIndex * 100) / itemsPerPage}%)` }}
        >
          {hostsData.map((host, index) => (
            <div
              key={index}
              className='xl:min-w-[0.25%] lg:min-w-[33.3333%] flex-shrink-0 flex justify-center items-center transition-all duration-500 ease-in-out transform'
            >
              <div className='border border-lightGray rounded-3xl transform min-w-[256.6px] max-w-[256.6px] min-h-[22.25rem] relative'>
                <img src={host.backgroundImage} className='w-full h-[13.75rem] object-cover rounded-t-3xl' />
                <img
                  src={host.profilePic}
                  alt='profile-pic'
                  className='absolute bottom-24 rounded-full border-4 border-[#FCFCFD] h-20 w-20 translate-x-full '
                />
                <div className='w-full h-[136px] flex flex-col items-center justify-center gap-1'>
                  <p className='text-sm font-bold leading-6'>{host.name}</p>
                  <p className='text-xs text-secondary leading-5'>{host.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostsSection;
