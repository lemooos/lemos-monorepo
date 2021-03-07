import { ButtonColor } from '../types';
import { ThemeContext } from '../../types';
import { SimpleInterpolation } from 'styled-components';

export type CreateVariantMethod = (_: {
  theme: ThemeContext;
  color: ButtonColor;
}) => SimpleInterpolation;
