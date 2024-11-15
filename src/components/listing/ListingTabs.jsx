import React, { useState } from 'react';
import Tab from './Tab';
import DropDown from '../Shared/DropDown';
import ListingCard from './ListingCard';
import useTailwindScreen from '../../hooks/useTailwindScreen';

const ListingTabs = () => {
  const screen = useTailwindScreen();
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Popular', 'Top Rated', 'Newest'];
  const isMedium = screen === 'lg';

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='gap-10 items-center xs:hidden sm:flex'>
          {tabs.map(tab => (
            <Tab key={tab} name={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
          ))}
        </div>
        <div className='xs:px-8 md:px-0 xs:w-full md:w-auto'>
          <DropDown
            className='md:w-64 xs:w-full h-12 rounded-xl text-xs font-poppins text-primary px-4 py-2'
            options={[
              { value: 'All', label: 'All' },
              { value: 'Popular', label: 'Popular' },
              { value: 'Top Rated', label: 'Top Rated' },
              { value: 'Newest', label: 'Newest' },
            ]}
          />
          <DropDown
            className='md:w-64 xs:w-full h-12 rounded-xl text-xs font-poppins text-primary px-4 py-2 xs:block sm:hidden mt-4'
            options={[
              { value: 'All', label: 'All' },
              { value: 'Popular', label: 'Popular' },
              { value: 'Top Rated', label: 'Top Rated' },
              { value: 'Newest', label: 'Newest' },
            ]}
          />
        </div>
      </div>
      <div className='grid xl:grid-cols-4 gap-8 md:grid-cols-3 xs:grid-cols-1 py-12 justify-items-center xs:px-7 md:px-0 '>
        {Array.from({ length: isMedium ? 6 : 8 }).map((_, index) => (
          <ListingCard key={index} />
        ))}
      </div>
    </>
  );
};

export default ListingTabs;
