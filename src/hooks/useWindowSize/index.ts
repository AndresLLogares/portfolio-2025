import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMobile = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.innerWidth > 1024 ? setIsMobile(true) : setIsMobile(false);
    };
    handleMobile();
  }, [window.innerWidth]);

  return {
    isMobile,
  };
};

export default useWindowSize;
