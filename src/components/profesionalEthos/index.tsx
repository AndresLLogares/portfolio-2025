import { FC } from 'react';
import { Colors } from '../../lib/enums/colors';
import { useInView } from 'react-intersection-observer';
import {
  StyledDivContainerAbout,
  StyledEachDivAbout,
  StyledSection,
  StyledSorterSections,
  StyledTextAbout,
} from '../introduction/style';
import { StyledBoxJourneyTitle, StyledTitleSection } from '../journey/styles';
import { Monster2 } from '..';
import { ProfessionalEthosEnum } from './enum';

const ProfessionalEthosComponent: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <StyledSection
      id='ethos'
      backColor={Colors.cornsilk}
      ref={ref}>
      {inView && (
        <StyledSorterSections>
          <StyledBoxJourneyTitle>
            <StyledTitleSection>Professional Ethos</StyledTitleSection>
          </StyledBoxJourneyTitle>
          <StyledDivContainerAbout isReverse={true}>
            <StyledEachDivAbout>
              <StyledTextAbout>{ProfessionalEthosEnum.message}</StyledTextAbout>
            </StyledEachDivAbout>
            <StyledEachDivAbout>
              <Monster2 />
            </StyledEachDivAbout>
          </StyledDivContainerAbout>
        </StyledSorterSections>
      )}
    </StyledSection>
  );
};

export default ProfessionalEthosComponent;
