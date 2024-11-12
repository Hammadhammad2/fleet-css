import React from 'react';
import Avatar from '../assets/avatar.png';
import StarSvg from '../assets/star.svg';

const MessageAvatar = () => {
  const avatars = [
    {
      id: 1,
      position: 'md:top-60 md:-left-10 xs:bottom-0 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:-translate-y-1/2',
    },
    { id: 2, position: 'top-[20rem] -right-16 xs:hidden md:flex' },
    { id: 3, position: 'top-[30rem] -left-28 xs:hidden md:flex' },
  ];

  return (
    <div>
      {avatars.map(avatar => (
        <div
          key={avatar.id}
          className={`bg-[#FCFCFD] bg-opacity-90 shadow-2xl rounded-full w-60 h-16 flex items-center absolute gap-2 p-4 ${avatar.position}`}
        >
          <img className='h-10 w-10 rounded-full' src={Avatar} alt='avatar' />
          <div>
            <p className='text-base font-medium'>Antone Heller</p>
            <div className='flex items-center gap-1'>
              <img src={StarSvg} alt='star' className='h-3 w-3' />
              <p className='font-semibold text-xs'>4.8</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageAvatar;
