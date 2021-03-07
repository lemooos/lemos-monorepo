import { css } from 'styled-components';
import { fetchColor } from '../constants/colors';

import { CreateVariantMethod } from './types';

const createOutlined: CreateVariantMethod = ({ theme, color }) => {
  const c = fetchColor({ theme, color });

  return css`
    background: ${c.contrast};
    color: ${c.color};
    border: 0.2rem solid ${c.contrast};
  `;
};

export default createOutlined;
