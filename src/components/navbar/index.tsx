import { useState } from 'react';
import { BarsIcon, CancelIcon } from '../icons/style';
import { Boop, NavIcon } from '..';
import { IPropsNavBarProps } from '../../lib/types/components';
import { Nav, NavLink, NavMenu, StyledHashLink } from './style';
import { TextNavigation } from '../../lib/enums/navbar';
import SliderComponent from '../slide';

const Navbar = (props: IPropsNavBarProps) => {
  const { currentScroll } = props;
  const [navIsOpen, setNavIsOpen] = useState(false);

  const hnadleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <>
      {currentScroll !== 0 ? (
        <Nav>
          {navIsOpen ? (
            <NavIcon
              isIcon={true}
              handleClick={hnadleClick}>
              <CancelIcon />
            </NavIcon>
          ) : (
            <NavIcon
              isIcon={true}
              handleClick={hnadleClick}>
              <BarsIcon />
            </NavIcon>
          )}
          <NavMenu>
            <Boop>
              <StyledHashLink href="#introduction">
                <NavLink>{TextNavigation?.Home}</NavLink>
              </StyledHashLink>
            </Boop>
            <Boop>
              <StyledHashLink href="#journey">
                <NavLink> {TextNavigation?.Journey}</NavLink>
              </StyledHashLink>
            </Boop>
            <Boop>
              <StyledHashLink href="#ethos">
                <NavLink>{TextNavigation?.ProfessionalEthos}</NavLink>
              </StyledHashLink>
            </Boop>
            <Boop>
              <StyledHashLink href="#contact">
                <NavLink>{TextNavigation?.ContacMe}</NavLink>
              </StyledHashLink>
            </Boop>
          </NavMenu>
          {navIsOpen ? <SliderComponent /> : null}
        </Nav>
      ) : null}
    </>
  );
};

export default Navbar;
