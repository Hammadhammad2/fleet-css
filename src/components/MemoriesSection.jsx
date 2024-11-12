import React from 'react';
import MemoriesImages from './MemoriesImages';
import Button from './Shared/Button';

const MemoriesSection = () => {
  const memoriesData = [
    {
      id: 1,
      title: 'Explore remote mountain retreats',
      description:
        'Escape to nature with our handpicked destinations in the mountains, perfect for a peaceful getaway.',
      background: '#8BC5E5',
    },
    {
      id: 2,
      title: 'Relax at serene beach resorts',
      description:
        'Enjoy the tranquility of beach resorts with world-class amenities, perfect for relaxation and rejuvenation.',
      background: '#92A5EF',
    },
    {
      id: 3,
      title: 'Discover vibrant city escapes',
      description: 'Experience the hustle and bustle of dynamic cities filled with culture, art, and adventure.',
      background: '#58C27D',
    },
  ];

  return (
    <div className='xl:px-30 lg:px-20 mb-[8.5rem] xs:p-4'>
      <div className='w-full flex flex-col md:items-center xs:items-start md:mb-[7.9375rem] xs:mb-12'>
        <p className='md:text-5xl leading-[3.5rem] font-bold md:text-center md:w-[39.875rem] xs:w-full xs:text-[2.5rem] xs:leading-[40px]'>
          Travel to make memories all around the world
        </p>
        <p className='md:text-2xl font-poppins text-secondary md:text-center mt-3 xs:text-base'>
          Find trips that fit a flexible lifestyle
        </p>
      </div>
      <div className='flex md:flex-row md:justify-between xs:flex-col xs:justify-start xs:gap-16'>
        <div>
          {memoriesData.map((data, i) => (
            <div key={i} className='flex flex-col items-start justify-start w-[352px] gap-6 mb-10'>
              <span
                className={`px-3 py-[2px] text-white text-sm font-poppins rounded-full`}
                style={{ backgroundColor: data.background }}
              >
                {`0${i + 1}`}
              </span>
              <p className='text-2xl font-semibold font-poppins'>Find trips that fit a flexible lifestyle</p>
              <p className='text-sm font-poppins text-secondary'>
                Stacks is a production-ready library of stackable content blocks built in React Native
              </p>
            </div>
          ))}
          <Button>Start your search</Button>
        </div>
        <MemoriesImages />
      </div>
    </div>
  );
};

export default MemoriesSection;
