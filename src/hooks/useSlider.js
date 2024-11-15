import { useState, useEffect } from 'react';

const useSlider = (dataLength = [], initialItemsPerPage = 3) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const maxIndex = dataLength - itemsPerPage;

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(initialItemsPerPage);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, [initialItemsPerPage]);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrevious = () => {
    setActiveIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return { activeIndex, itemsPerPage, handleNext, handlePrevious };
};

export default useSlider;
