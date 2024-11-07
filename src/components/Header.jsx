import MainLogo from '../assets/main-logo.svg';
import WordLogo from '../assets/world-logo.svg';
import Bell from '../assets/bell.svg';
import Avatar from '../assets/avatar.png';
import { travelersDropdownOptions } from './data';
import DropDown from './Shared/DropDown';

const Header = () => {
  return (
    <div className='px-20 py-5 flex items-center justify-between md:px-10 xs:px-8 xs:py-7 '>
      <div className='flex flex-row items-center'>
        <div className='flex flex-row items-center gap-[0.5625rem]'>
          <img className='h-8 w-8' src={MainLogo}></img>
          <p className='font-poppins font-semibold text-[1.6875rem] leading-7'>fleet</p>
        </div>
        <div className='h-12 text-lightGray border-l mx-10 lg:block hidden' />
        <DropDown options={travelersDropdownOptions} className='lg:block hidden' />
      </div>
      <div className='flex items-center gap-8'>
        <a href='#' className='font-poppins font-semibold text-[1.125rem] leading-7 text-darkGray xl:block hidden'>
          Support
        </a>
        <div className='items-center justify-center gap-3 px-2 xs:hidden xl:flex hidden'>
          <img className='h-4 w-4' src={WordLogo} />
          <a href='#' className='font-poppins font-semibold text-[1.125rem] leading-7 text-darkGray'>
            Language
          </a>
        </div>
        <div className='py-3 px-4 rounded-full border border-lightGray text-sm font-bold lg:block hidden'>
          List your property
        </div>
        <div className='relative h-10 w-10 flex items-center justify-center'>
          <img className='h-6 w-6' src={Bell} />
          <div className='absolute h-3 w-3 bg-[#58C27D] rounded-full right-0 top-0'></div>
        </div>
        <img className='sm:h-12 sm:w-12 rounded-full xs:h-8 xs:w-8' src={Avatar} />
      </div>
    </div>
  );
};

export default Header;
