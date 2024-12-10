import { styled } from 'styled-components';
import { Colors } from '../../../lib/enums/colors';

export const StyledContainerSlider = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    position: absolute;
    justify-content: flex-end;
    align-self: flex-end;
  }
`;

export const StyledSliderComponent = styled.div`
  display: none;
  @media (max-width: 1024px) {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    margin-right: 16px;
    margin-top: 16px;
    position: absolute;
  }
`;

export const StyledSliderBox = styled.div`
  display: none;
  @media (max-width: 1024px) {
    align-items: center;
    backdrop-filter: blur(50px);
    background: transparent;
    border-radius: 16px;
    border: 3px solid ${Colors.darkslategray};
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    width: 200px;
  }
`;

export const StyledText = styled.button`
  align-items: center;
  background-color: ${Colors.cornsilk};
  border-radius: 16px;
  border: 3px solid ${Colors.darkslategray};
  color: ${Colors.darkslategray};
  cursor: pointer;
  display: flex;
  font-family: 'Parkinsans', sans-serif;
  font-size: 8x;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  margin: 8px;
  min-width: 128px;
  padding: 8px;
  text-decoration: none;
  &:active {
    background-color: ${Colors.darkslategray};
    color: ${Colors.cornsilk};
    border: 3px solid ${Colors.cornsilk};
    transform: scale(1.2); 
  }
`;
