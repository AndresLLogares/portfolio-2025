import styled from 'styled-components';
import { Colors } from '../../../lib/enums/colors';
import { BoxAnimation } from '../../navbar/style';

export const StyledBoxJourneyTitle = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledTitleSection = styled.h3<{
  $textcolorselected?: string | null;
}>`
  ${BoxAnimation};
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : Colors.darkslategray};
  display: flex;
  font-family: 'Parkinsans', sans-serif;
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  margin-left: 32px;
  @media (max-width: 1024px) {
    animation: none;
    font-size: 32px;
    margin-left: 16px;
  }
`;

export const StyledContainerTimeLine = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  margin-bottom: 32px;
  margin-top: 32px;
  width: 100%;
`;

export const TitleCardTimeline = styled.h3<{
  $textcolorselected: string | null;
}>`
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : Colors.darkslategray};
  font-family: 'Parkinsans', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const SubTitleCardTimeline = styled.h4<{
  $textcolorselected: string | null;
}>`
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : Colors.darkslategray};
  font-family: 'Parkinsans', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const TextCardTimeline = styled.h5<{
  $textcolorselected: string | null;
}>`
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : Colors.darkslategray};
  font-family: 'Parkinsans', sans-serif;
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 24px;
`;
