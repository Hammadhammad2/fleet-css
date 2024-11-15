import React, { useState } from 'react';
import BellIcon from '../../assets/bell.svg';
import TabOneContent from '../TabOneContent';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='w-full'>
      <div className='flex sm:gap-12 xs:gap-8'>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer font-dmSans text-sm leading-[0.875rem] pb-[1.875rem] relative
                ${
                  activeTab === index
                    ? 'text-primary after:h-[1px] after:w-full after:bg-primary after:content-[""] after:block after:rounded-sm after:-bottom-[1px] after:absolute'
                    : 'text-secondary'
                }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className='h-[1px] bg-lightGray'></div>
      {activeTab === 0 && <TabOneContent />}
    </div>
  );
};

export default Tabs;
