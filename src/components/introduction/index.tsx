import { FC } from 'react';
import {
  StyledDivContainerAbout,
  StyledEachDivAbout,
  StyledSection,
  StyledSorterSections,
  StyledTextAbout,
} from './style';
import { Colors } from '../../lib/enums/colors';
import { useInView } from 'react-intersection-observer';
import NameComponent from './name/indes';
import { Monster1, Monster4 } from '..';
import { Messages } from './enum';

const IntroductionComponent: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <StyledSection
      id="introduction"
      backColor={Colors.cornsilk}
      ref={ref}>
      {inView ? (
        <StyledSorterSections>
          <NameComponent />
          <StyledDivContainerAbout isReverse={true}>
            <StyledEachDivAbout>
              <StyledTextAbout>
                {Messages.IntroductionMessagePartOne}
              </StyledTextAbout>
              <StyledTextAbout>
                {Messages.IntroductionMessagePartTwo}
              </StyledTextAbout>
            </StyledEachDivAbout>
            <StyledEachDivAbout>
              <Monster1 />
            </StyledEachDivAbout>
          </StyledDivContainerAbout>
          <StyledDivContainerAbout isReverse={false}>
            <StyledEachDivAbout>
              <Monster4 />
            </StyledEachDivAbout>
            <StyledEachDivAbout>
              <StyledTextAbout>
                {Messages.IntroductionMessagePartThree}
              </StyledTextAbout>
              <StyledTextAbout>
                {Messages.IntroductionMessagePartFour}
              </StyledTextAbout>
            </StyledEachDivAbout>
          </StyledDivContainerAbout>
        </StyledSorterSections>
      ) : null}
    </StyledSection>
  );
};

export default IntroductionComponent;
