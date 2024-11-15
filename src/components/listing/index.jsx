import React from 'react';
import ListingTabs from './ListingTabs';
import Button from '../Shared/Button';

const Listing = () => {
  return (
    <div className='xl:mx-5 md:my-10 xs:my-0 xl:p-20 md:p-10 bg-primaryGray rounded-3xl'>
      <div className='md:mb-16 xs:px-8 md:px-0 md:pt-0 md:pb-0 xs:pt-16 xs:pb-12'>
        <h2 className='md:text-5xl font-bold md:leading-[3.5rem] xs:text-4xl xs:leading-[3rem]'>Go somewhere</h2>
        <p className='md:text-2xl font-poppins text-secondary xs:text-base'>Let’s go on an adventure </p>
      </div>
      <ListingTabs />
      <div className='flex flex-row justify-center'>
        <Button variant='gray' className='px-4 py-3 text-sm'>
          View all
        </Button>
      </div>
    </div>
  );
};

export default Listing;
