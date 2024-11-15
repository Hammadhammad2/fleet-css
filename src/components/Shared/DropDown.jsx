import { twMerge } from 'tailwind-merge';

const DropDown = ({ options = [], className = '' }) => {
  return (
    <select className={twMerge(`text-secondary font-bold text-sm capitalize outline-none`, className)}>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
