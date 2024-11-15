import React from 'react';
import CoinWhite from '../../assets/coin-white.svg';
import CoinColored from '../../assets/coin-colored.svg';

const Tab = ({ name = '', activeTab, setActiveTab }) => {
  return (
    <div
      className={`flex flex-row gap-2 items-center cursor-pointer font-poppins py-2 px-4 font-bold text-sm rounded-full ${
        activeTab === name ? 'text-white bg-tabBg' : 'text-secondary'
      }`}
      onClick={() => setActiveTab(name)}
    >
      <img src={activeTab === name ? CoinWhite : CoinColored} alt='coin' />
      {name}
    </div>
  );
};
export default Tab;
