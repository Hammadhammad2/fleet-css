import React, { useState, useEffect } from 'react';
import HolidayCamp from '../assets/holiday-camp.svg';
import HolidaySnow from '../assets/holiday-snow.svg';
import HolidaySummer from '../assets/holiday-summer.svg';
import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';

const AdventureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const adventureData = [
    { image: HolidayCamp, title: 'Luxury resort at the sea', places: '9,326 places' },
    { image: HolidaySnow, title: 'Snowy mountain getaway', places: '3,326 places' },
    { image: HolidaySummer, title: 'Sunny beach retreat', places: '6,326 places' },
    { image: HolidayCamp, title: 'Mountain escape', places: '5,000 places' },
    { image: HolidaySnow, title: 'Winter wonderland', places: '2,300 places' },
    { image: HolidaySummer, title: 'Tropical paradise', places: '7,500 places' },
  ];

  const maxIndex = adventureData.length - itemsPerPage;

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrevious = () => {
    setActiveIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return (
    <div className='xl:px-20 lg:px-10 py-14 flex flex-col items-center gap-12 lg:mb-[3.5rem] xl:mb-[17rem] xs:mb-16'>
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
                className='min-w-1/3 flex-shrink-0 flex justify-center items-center p-4 transition-all duration-500 ease-in-out transform'
              >
                <div className='min-w-[22rem] h-[12rem] max-w-[22rem] flex flex-row justify-center items-center gap-4 p-4'>
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
        <div className='mt-12 flex justify-center items-center gap-2'>
          <button
            onClick={handlePrevious}
            className='hover:outline outline-2 outline-lightGray rounded-full p-2 transition-transform transform active:scale-90'
          >
            <img src={LeftArrow} alt='left-arrow' className='h-4 w-4' />
          </button>
          <button
            onClick={handleNext}
            className='hover:outline outline-2 outline-lightGray rounded-full p-2 transition-transform transform active:scale-90'
          >
            <img src={RightArrow} alt='right-arrow' className='h-4 w-4' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureSection;
