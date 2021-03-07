import React from 'react';

import { Props } from './types';

import { themeContext } from '../theme/defaultThemeContext';

import * as styled from './ThemeProvider.styles';
import { ThemeProvider as OriginalProvider } from 'styled-components';

const ThemeProvider: React.FunctionComponent<Props> = ({
  children,
  theme = themeContext,
}) => {
  const withBuiltinTheme = {
    primary: {
      ...themeContext?.primary,
      ...theme?.primary,
    },
    secondary: {
      ...themeContext?.secondary,
      ...theme?.secondary,
    },
    terciary: {
      ...themeContext?.terciary,
      ...theme?.terciary,
    },
    problem: {
      ...themeContext?.problem,
      ...theme?.problem,
    },
    warning: {
      ...themeContext?.warning,
      ...theme?.warning,
    },
    success: {
      ...themeContext?.success,
      ...theme?.success,
    },
    settings: {
      ...themeContext?.settings,
      ...theme?.settings,
    },
  };

  return (
    <React.Fragment>
      <styled.Global />
      <OriginalProvider theme={withBuiltinTheme}>
        {children}
      </OriginalProvider>
    </React.Fragment>
  );
};

export default ThemeProvider;
