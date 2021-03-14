import React from 'react';

export type ClickEventListener = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export type HoverEventListener = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonColor = 'primary' | 'secondary' | 'terciary' | 'warning' | 'problem' | 'success';

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType = 'submit' | 'button';

export interface Props {
  onClick?: ClickEventListener;
  onHover?: HoverEventListener;

  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: ButtonType;

  disabled?: boolean;
}
