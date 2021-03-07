import { createGlobalStyle } from 'styled-components';

import { ThemeContext } from '../types';
import { themeContext } from '../theme/defaultThemeContext';

const wrenchBaselineSize = (_: { theme: ThemeContext }) => {
    const { theme } = _;
    
    if (theme && theme.settings?.fontRootElementMeasureSize) {
        return theme.settings?.fontRootElementMeasureSize;
    }

    return themeContext.settings?.fontRootElementMeasureSize || '16px';
};

const wrenchFontFamily = (_: { theme: ThemeContext }) => {
    const { theme } = _;

    if (theme && theme.settings?.fontFamily) {
        return theme.settings?.fontFamily;
    }

    return themeContext.settings?.fontFamily;
};

export const Global = createGlobalStyle<{ theme: ThemeContext }>`
    body {
        font-family: ${({ theme }) => wrenchFontFamily({ theme })};
        font-size: ${({ theme }) => wrenchBaselineSize({ theme })};

        @media only screen and (max-width: 700px) {
            font-size: ${({ theme }) => `calc(${wrenchFontFamily({ theme })} - 0.215rem)`};
        }
    }
`;