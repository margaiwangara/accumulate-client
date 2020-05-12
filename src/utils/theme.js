import styled from 'styled-components';
import { fontSize, pixelsToRem } from './styles';

export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;

  span {
    height: ${pixelsToRem(50)};
    width: ${pixelsToRem(50)};
    border: double ${pixelsToRem(5)} var(--primaryColor);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${fontSize(70)}
    font-weight: 700;
    position: relative;
    color: var(--primaryColor);
  }
`;

export const Heading3 = styled.h3`
  text-align: center;
  color: var(--primaryColor);
  ${fontSize(25)}
  letter-spacing: 0.25px;
`;

export const Alert = styled.div`
  width: 100%;
  padding: ${pixelsToRem(10)} ${pixelsToRem(15)};
  ${fontSize(18)}
  border-radius: ${pixelsToRem(10)};
  color: var(--whiteColor);
  transition: all 0.15 ease-in-out;

  &.alert-success {
    background-color: var(--successColor);
  }

  &.alert-danger {
    background-color: var(--dangerColor);
  }

  &.alert-info {
    background-color: var(--infoColor);
  }
`;
