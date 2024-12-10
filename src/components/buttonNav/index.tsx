import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { IPropsComponent } from '../../lib/types/components';

const Boop = (props: IPropsComponent) => {
  const { children } = props;

  const [isBooped, setIsBooped] = useState(false);

  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, 150);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped]);

  const style = useSpring({
    display: 'inline-block',
    transform: isBooped ? `rotate(10deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const trigger = () => {
    setIsBooped(!isBooped);
  };

  return (
    <animated.div
      onMouseEnter={trigger}
      style={style}>
      {children}
    </animated.div>
  );
};

export default Boop;
