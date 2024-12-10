import { Colors } from '../../../lib/enums/colors/index';
import { styled, css } from 'styled-components';

export const BoxAnimation = css`
  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0.9;
    }
  }
`;

export const Nav = styled.nav`
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  backdrop-filter: blur(50px);
  background-color: transparent;
  border-radius: 16px;
  border: 3px solid ${Colors.darkslategray};
  display: flex;
  height: fit-content;
  margin: 32px;
  padding: 16px;
  position: fixed;
  width: 85%;
  z-index: 12;
  ${BoxAnimation};
  @media (max-width: 1024px) {
    animation: none;
  }
`;

export const NavMenu = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled.button`
  align-items: center;
  background-color: ${Colors.cornsilk};
  border-radius: 16px;
  border: 3px solid ${Colors.darkslategray};
  color: ${Colors.darkslategray};
  cursor: pointer;
  display: flex;
  font-family: 'Parkinsans', sans-serif;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  min-width: 128px;
  padding: 16px;
  &:active {
    background-color: ${Colors.darkslategray};
    border: 3px solid ${Colors.cornsilk};
    color: ${Colors.cornsilk};
    transform: scale(1.2);
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    height: fit-content;
    margin: 8px;
    padding: 8px;
    width: 80%;
  }
`;

export const StyledHashLink = styled.a`
  display: flex;
  text-decoration: none;
`;
