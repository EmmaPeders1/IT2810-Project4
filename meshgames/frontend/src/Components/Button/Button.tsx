import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import './Button.css';

interface ButtonProps {
  children?: JSX.Element;
  disabled?: boolean;
  label?: string;
  icon?: IconDefinition;
  type?: string;
  className?: string;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  dataTestid?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  label,
  icon,
  type,
  className,
  id,
  onClick,
  onKeyDown,
  dataTestid }) => {
  return (
    <button
      disabled={disabled}
      className={`button-component ${className}`}
      id={id}
      data-type={type}
      onClick={onClick}
      onKeyDown={onKeyDown}
      data-testid={dataTestid}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label || children}
    </button>
  );
};

export default Button;
