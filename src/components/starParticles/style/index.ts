import styled, { keyframes } from 'styled-components';
import { Colors } from '../../../lib/enums/colors';

const snowflakesFall = keyframes`
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
`;

const snowflakesShake = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const Snowflake = styled.div`
  animation: ${snowflakesFall} 10s linear infinite, ${snowflakesShake} 3s ease-in-out infinite;
  color: ${Colors.chocolate};
  cursor: default;
  font-family: Arial, sans-serif;
  font-size: 24px;
  opacity: 0.5;
  position: fixed;
  text-shadow: 0 0 1px ${Colors.chocolate};
  top: -10%;
  user-select: none;
  z-index: 1;
  &:nth-of-type(1) {
    left: 10%;
    animation-delay: 1s, 1s;
  }
  &:nth-of-type(2) {
    left: 20%;
    animation-delay: 6s, 0.5s;
  }
  &:nth-of-type(3) {
    left: 30%;
    animation-delay: 4s, 2s;
  }
  &:nth-of-type(4) {
    left: 40%;
    animation-delay: 2s, 2s;
  }
  &:nth-of-type(5) {
    left: 50%;
    animation-delay: 8s, 3s;
  }
  &:nth-of-type(6) {
    left: 60%;
    animation-delay: 6s, 2s;
  }
  &:nth-of-type(7) {
    left: 70%;
    animation-delay: 2.5s, 1s;
  }
  &:nth-of-type(8) {
    left: 80%;
    animation-delay: 1s, 0s;
  }
  &:nth-of-type(9) {
    left: 90%;
    animation-delay: 3s, 1.5s;
  }
  @media (max-width: 1024px) {
    font-size: 8px;
  }
`;
