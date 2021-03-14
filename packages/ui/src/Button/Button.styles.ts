import styled from 'styled-components';

import { Props, ButtonColor, ButtonVariant, ButtonSize, ButtonType } from './types';
import { ThemeContext } from '../types';

import size from './constants/size';

export const Rounded = styled.button<
  Pick<Props, 'children' | 'onClick'> & {
    variant: ButtonVariant;
    size: ButtonSize;
    type: ButtonType;
    color: ButtonColor;
  } & { theme: ThemeContext }
>`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-family: ${(props) => props.theme?.settings?.fontFamily || '"Inter", "Roboto", sans-serif'};

  padding: ${(props) => size[props.size].padding};
  font-size: ${(props) => size[props.size].fontSize};

  border-radius: 0.625rem;
`;
