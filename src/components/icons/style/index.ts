import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import styled from 'styled-components';
import { Colors } from '../../../lib/enums/colors';

export const StyledDivIcon = styled.div<{ icon: boolean }>`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.icon ? 'flex-end' : 'center')};
    width: 100%;
  }
`;

export const BarsIcon = styled(FaBars)`
  color: ${Colors.darkslategray};
  display: none;
  @media screen and (max-width: 1024px) {
    cursor: pointer;
    display: flex;
    font-size: 16px;
    margin-right: 16px;
    margin-top: 0px;
    padding: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`;
export const CancelIcon = styled(FaRegWindowClose)`
  color: ${Colors.darkslategray};
  display: none;
  @media screen and (max-width: 1024px) {
    cursor: pointer;
    display: flex;
    font-size: 16px;
    margin-right: 16px;
    margin-top: 0px;
    padding: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`;
