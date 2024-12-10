import { css, styled } from 'styled-components';
import { Colors } from '../../../lib/enums/colors';
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFile,
  FaEnvelope,
} from 'react-icons/fa';

export const StyledIconLinkedin = styled(FaLinkedin)`
  color: ${Colors.cornsilk};
  font-size: 24px;
  margin-right: 8px;
`;

export const StyledIconGithub = styled(FaGithub)`
  color: ${Colors.cornsilk};
  font-size: 24px;
  margin-right: 8px;
`;

export const StyledIconWhatsapp = styled(FaWhatsapp)`
  color: ${Colors.cornsilk};
  font-size: 24px;
  margin-right: 8px;
`;

export const StyledIconFile = styled(FaFile)`
  color: ${Colors.cornsilk};
  font-size: 24px;
  margin-right: 8px;
`;

export const StyledIconEnvelope = styled(FaEnvelope)`
  color: ${Colors.cornsilk};
  font-size: 24px;
  margin-right: 8px;
`;

export const BoxAnimation = css`
  @keyframes scale-in-center {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }
`;

export const StyledSection = styled.section<{ backColor: string }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  margin: 0;
  background-color: ${(props) =>
    props.backColor ? props.backColor : Colors.cornsilk};
`;

export const StyledIntroductionContainer = styled.h1`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  margin-top: 32px;
`;

export const StyledSorterSections = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin-top: 32px;
  margin-bottom: 32px;
  z-index: 5;
`;

export const StyledNameComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledDivContainerAbout = styled.div<{ isReverse: boolean }>`
  align-items: center;
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  display: flex;
  flex-direction: row;
  height: fit-content;
  justify-content: space-around;
  margin-top: 32px;
  width: 100%;
  ${BoxAnimation};
  @media (max-width: 1024px) {
    animation: none;
    flex-direction: ${(props) =>
      props.isReverse ? 'column-reverse' : 'column'};
  }
`;

export const StyledEachDivAbout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  @media (max-width: 1024px) {
    width: 80%;
    margin-bottom: 16px;
    margin-top: 16px;
    align-items: center;
  }
`;

export const StyledTextAbout = styled.p`
  display: flex;
  color: ${Colors.darkslategray};
  font-family: 'Parkinsans', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledNameText = styled.h3`
  display: flex;
  font-family: 'Parkinsans', sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: ${Colors.darkslategray};
  margin: 0;
  padding: 8px;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${BoxAnimation};
  @media (max-width: 1024px) {
    animation: none;
    font-size: 32px;
  }
`;

export const StyledLinkContactMe = styled.a`
  align-items: center;
  color: ${Colors.cornsilk};
  display: flex;
  flex-direction: row;
  font-family: 'Parkinsans', sans-serif;
  font-size: 24px;
  font-weight: bold;
  justify-content: flex-start;
  margin-bottom: 16px;
  text-decoration: none;
  width: 100%;
  z-index: 5;
  &:hover {
    cursor: pointer;
  }
`;
