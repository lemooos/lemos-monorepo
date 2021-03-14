import React from 'react';

import { Props } from './types';

import * as styled from './Button.styles';

const Button: React.FunctionComponent<Props> = ({
  children,
  onHover,
  color = 'primary',
  size = 'md',
  variant = 'contained',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const onClick = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    !disabled && typeof props.onClick === 'function' && props.onClick(event);
  };

  return (
    <styled.Rounded
      className={`lButton-${variant}--${size}--${color}`}
      {...{ variant, color, size, onClick, type, disabled }}
      onMouseOver={onHover}>
      {children}
    </styled.Rounded>
  );
};

export default Button;
