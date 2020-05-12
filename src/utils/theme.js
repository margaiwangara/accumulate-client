import styled from 'styled-components';
import { fontSize } from './styles';

export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;

  span {
    height: 50px;
    width: 50px;
    border: double 5px var(--primaryColor);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${fontSize(70)}
    font-weight: 700;
    position: relative;

    &:after {
      position: absolute;
      height: 150%;
      width: 75%;
      background-color: var(--whiteColor);
      top: -10px;
      right: -10px;
    }
  }
`;
