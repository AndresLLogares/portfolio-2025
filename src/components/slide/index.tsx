import { TextNavigation } from '../../lib/enums/navbar';
import NavIconsComponent from '../icons/navIcons';
import { NavLink, StyledHashLink } from '../navbar/style';
import {
  StyledContainerSlider,
  StyledSliderBox,
  StyledSliderComponent,
} from './style';

const SliderComponent = () => {
  const handleTest = () => {
    return;
  };

  return (
    <StyledContainerSlider>
      <StyledSliderComponent>
        <StyledSliderBox>
          <NavIconsComponent
            isIcon={false}
            handleClick={handleTest}>
            <StyledHashLink href="#introduction">
              <NavLink>{TextNavigation?.Home}</NavLink>
            </StyledHashLink>
          </NavIconsComponent>
          <NavIconsComponent
            isIcon={false}
            handleClick={handleTest}>
            <StyledHashLink href="#journey">
              <NavLink> {TextNavigation?.Journey}</NavLink>
            </StyledHashLink>
          </NavIconsComponent>
          <NavIconsComponent
            isIcon={false}
            handleClick={handleTest}>
            <StyledHashLink href="#ethos">
              <NavLink>{TextNavigation?.ProfessionalEthos}</NavLink>
            </StyledHashLink>
          </NavIconsComponent>
          <NavIconsComponent
            isIcon={false}
            handleClick={handleTest}>
            <StyledHashLink href="#contact">
              <NavLink>{TextNavigation?.ContacMe}</NavLink>
            </StyledHashLink>
          </NavIconsComponent>
        </StyledSliderBox>
      </StyledSliderComponent>
    </StyledContainerSlider>
  );
};

export default SliderComponent;
