import { FC } from 'react';
import { Colors } from '../../lib/enums/colors';
import { useInView } from 'react-intersection-observer';
import { StyledSection, StyledSorterSections } from '../introduction/style';
import {
  StyledBoxJourneyTitle,
  StyledContainerTimeLine,
  StyledTitleSection,
} from './styles';
import VerticalTimelineComponent from './timeline';

const JourneyComponent: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <StyledSection
      id="journey"
      backColor={Colors.chocolate}
      ref={ref}>
      {inView && (
        <StyledSorterSections>
          <StyledBoxJourneyTitle>
            <StyledTitleSection $textcolorselected={Colors.cornsilk}>
              My Journey
            </StyledTitleSection>
          </StyledBoxJourneyTitle>
          <StyledContainerTimeLine>
            <VerticalTimelineComponent />
          </StyledContainerTimeLine>
        </StyledSorterSections>
      )}
    </StyledSection>
  );
};

export default JourneyComponent;
