import React from 'react';
import LocationIcon from '../assets/location.svg';
import ProfileIcon from '../assets/profile.svg';
import CalendarIcon from '../assets/calendar.svg';
import Search from '../assets/search.svg';

const TabOneContent = () => {
  const content = [
    {
      icon: LocationIcon,
      title: 'Location',
      description: 'Where are you going?',
    },
    {
      icon: CalendarIcon,
      title: 'Check in',
      description: 'Add date',
      display: 'xl:flex lg:hidden xs:hidden',
    },
    {
      icon: CalendarIcon,
      title: 'Check out',
      description: 'Add date',
      display: 'xl:flex lg:hidden xs:hidden',
    },
    {
      icon: CalendarIcon,
      title: 'Date',
      description: 'Add date',
      display: 'lg:flex xl:hidden xs:hidden',
    },
    {
      icon: ProfileIcon,
      title: 'Travelers',
      description: 'Add guests',
      display: 'lg:flex xs:hidden',
    },
  ];

  return (
    <div className='sm:px-6 sm:py-5 xs:py-0 xs:px-0 flex flex-row items-center justify-between'>
      {content.map(({ title, description, icon, display = 'flex' }, index) => (
        <div className={`p-5 items-start gap-3 ${display}`} key={title}>
          <img src={icon} alt={`${title} icon`} className='xs:hidden sm:block' />
          <div key={index} className='items-start justify-start flex-col font-poppins'>
            <h3 className='text-2xl font-semibold leading-[2rem]'>{title}</h3>
            <p className='text-lg leading-[1.5rem] text-secondary'>{description}</p>
          </div>
        </div>
      ))}
      <div>
        <button className='bg-buttonPrimary text-white rounded-full font-bold text-lg h-16 w-16 flex items-center justify-center'>
          <img src={Search} alt='search' className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
};

export default TabOneContent;
