import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa6';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Colors } from '../../../lib/enums/colors';
import {
  SubTitleCardTimeline,
  TextCardTimeline,
  TitleCardTimeline,
} from '../styles';
import { ExperienceEnum } from '../enum';
import MonsterIcon from '../../icons/monsterIcon';

const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline lineColor={Colors.darkslategray}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${Colors.cornsilk}`,
          color: `${Colors.chocolate}`,
        }}
        contentArrowStyle={{
          borderRight: `5px solid  ${Colors.darkslategray}`,
        }}
        iconStyle={{
          background: `${Colors.cornsilk}`,
          color: `${Colors.chocolate}`,
        }}
        icon={<FaBriefcase />}
        visible={true}>
        <TitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.Accenture}
        </TitleCardTimeline>
        <SubTitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.AccentureDate}
        </SubTitleCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.AccentureFirst}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.AccentureSecond}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.AccentureThird}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.AccentureFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${Colors.cornsilk}`,
          color: `${Colors.chocolate}`,
        }}
        contentArrowStyle={{
          borderRight: `5px solid  ${Colors.darkslategray}`,
        }}
        iconStyle={{
          background: `${Colors.cornsilk}`,
          color: `${Colors.chocolate}`,
        }}
        icon={<FaBriefcase />}
        visible={true}>
        <TitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.ALT}
        </TitleCardTimeline>
        <SubTitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.ALTDate}
        </SubTitleCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.ALTFirst}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.ALTSecond}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.ALTThird}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.ALTFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${Colors.cornsilk}`,
          color: `${Colors.chocolate}`,
        }}
        contentArrowStyle={{
          borderRight: `5px solid  ${Colors.darkslategray}`,
        }}
        iconStyle={{
          background: `${Colors.cornsilk}`,
          color: `${Colors.chocolate}`,
        }}
        icon={<FaBriefcase />}
        visible={true}>
        <TitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.OCTOSOFT}
        </TitleCardTimeline>
        <SubTitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTDate}
        </SubTitleCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.OCTOSOFTFirst}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.OCTOSOFTSecond}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.OCTOSOFTThird}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          <MonsterIcon /> {ExperienceEnum.OCTOSOFTFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
