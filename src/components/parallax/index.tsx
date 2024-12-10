import { Introduction, Journey, ContactMe, ProfessionalEthos } from '..';
import { StyleContainer } from './style';

const ParallaxComponent = () => {
  return (
    <StyleContainer>
      <Introduction />
      <Journey />
      <ProfessionalEthos />
      <ContactMe />
    </StyleContainer>
  );
};

export default ParallaxComponent;
