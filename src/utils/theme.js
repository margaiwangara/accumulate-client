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
