'use client';
import styled from 'styled-components';
import { Colors } from '../../../lib/enums/colors';

export const StyledBall = styled.div`
  border-radius: 0px 0px 0px 0px;
  border: 3px dashed ${Colors.darkslategray};
  height: 25px;
  left: 0;
  position: fixed;
  top: 0;
  width: 25px;
  z-index: 1;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledPointer = styled.div`
  background-color: ${Colors.darkslategray};
  border-radius: 50%;
  height: 10px;
  left: 0;
  position: fixed;
  top: 0;
  width: 10px;
  z-index: 1;
  @media (max-width: 1024px) {
    display: none;
  }
`;
