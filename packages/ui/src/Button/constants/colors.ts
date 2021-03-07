import { ButtonColor } from '../types';
import { ThemeContext } from '../../types';

export const fetchColor = (_: { color: ButtonColor; theme: ThemeContext }) => {
  const { color, theme } = _;

  return {
    color: theme[color]?.color,
    contrast: theme[color]?.contrast,
  };
};
