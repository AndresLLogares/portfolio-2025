import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { IPropsNavigatorProps } from '../../../lib/types/components';
import { StyledDivIcon } from '../style';

const NavIconsComponent = (props: IPropsNavigatorProps) => {
  const { children, handleClick, isIcon } = props;

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

  const trigger = () => {
    setIsBooped(!isBooped);
  };

  const style = useSpring({
    display: 'flex',
    transform: isBooped ? 'scale(1.5)' : 'scale(1)',
    config: {
      tension: 300,
      friction: 10,
    },
  });

  return (
    <StyledDivIcon icon={isIcon} onClick={() => handleClick()}>
      <animated.section
        onClick={trigger}
        style={style}>
        {children}
      </animated.section>
    </StyledDivIcon>
  );
};

export default NavIconsComponent;
