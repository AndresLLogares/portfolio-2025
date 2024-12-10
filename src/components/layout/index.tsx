import { useEffect } from 'react';
import { IPropsComponent } from '../../lib/types/components';
import StarsParticles from '../starParticles';
import { LayoutStyled } from './style';

const LayoutComponent = (props: IPropsComponent) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutStyled>
      <StarsParticles />
      {props?.children}
    </LayoutStyled>
  );
};

export default LayoutComponent;
