import { FC } from 'react';
import { Colors } from '../../lib/enums/colors';
import { useInView } from 'react-intersection-observer';
import {
  StyledDivContainerAbout,
  StyledEachDivAbout,
  StyledSection,
  StyledSorterSections,
  StyledLinkContactMe,
  StyledIconLinkedin,
  StyledIconEnvelope,
  StyledIconGithub,
  StyledIconWhatsapp,
} from '../introduction/style';
import { Boop, Monster3 } from '..';
import { StyledBoxJourneyTitle, StyledTitleSection } from '../journey/styles';
import { ContactEnum } from './enum';

const ContactMeComponent: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <StyledSection
      id="contact"
      backColor={Colors.chocolate}
      ref={ref}>
      {inView && (
        <>
          <StyledSorterSections>
            <StyledBoxJourneyTitle>
              <StyledTitleSection $textcolorselected={Colors.cornsilk}>
                Contact Me
              </StyledTitleSection>
            </StyledBoxJourneyTitle>
            <StyledDivContainerAbout isReverse={false}>
              <StyledEachDivAbout>
                <Monster3 />
              </StyledEachDivAbout>
              <StyledEachDivAbout>
                <Boop>
                  <StyledLinkContactMe
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/">
                    <StyledIconLinkedin />
                    {ContactEnum.LinkedIn}
                  </StyledLinkContactMe>
                </Boop>
                <Boop>
                  <StyledLinkContactMe
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/AndresLLogares">
                    <StyledIconGithub />
                    {ContactEnum.Github}
                  </StyledLinkContactMe>
                </Boop>
                <Boop>
                  <StyledLinkContactMe
                    rel="noreferrer"
                    target="_blank"
                    href="https://wa.me/5491136005563">
                    <StyledIconWhatsapp />
                    {ContactEnum.Whatsapp}
                  </StyledLinkContactMe>
                </Boop>
                <Boop>
                  <StyledLinkContactMe
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:andresl940@hotmail.com">
                    <StyledIconEnvelope />
                    {ContactEnum.Email}
                  </StyledLinkContactMe>
                </Boop>
              </StyledEachDivAbout>
            </StyledDivContainerAbout>
          </StyledSorterSections>
        </>
      )}
    </StyledSection>
  );
};

export default ContactMeComponent;
