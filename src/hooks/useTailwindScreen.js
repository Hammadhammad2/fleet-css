import { useState, useEffect } from 'react';

function useTailwindScreen() {
  const [screen, setScreen] = useState(getScreenSize());

  function getScreenSize() {
    const width = window.innerWidth;

    if (width < 375) return 'xs';
    if (width >= 375 && width <= 640) return 'sm';
    if (width >= 640 && width <= 768) return 'md';
    if (width >= 768 && width <= 1024) return 'lg';
    if (width >= 1024 && width <= 1440) return 'xl';
    if (width >= 1440 && width <= 1536) return '2xl';
    return '3xl';
  }

  useEffect(() => {
    function handleResize() {
      setScreen(getScreenSize());
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screen;
}

export default useTailwindScreen;
