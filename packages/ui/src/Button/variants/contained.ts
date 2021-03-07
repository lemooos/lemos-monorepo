import { css } from 'styled-components';
import { fetchColor } from '../constants/colors';

import { CreateVariantMethod } from './types';

const createContained: CreateVariantMethod = ({ theme, color }) => {
  const c = fetchColor({ theme, color });

  return css`
    background: ${c.color};
    color: ${c.contrast};
    border: none;
  `;
};

export default createContained;
